from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task

from crewai_tools import SerperDevTool
from crewai_tools import JSONSearchTool
from crewai_tools import FileReadTool
from send_to_supabase import send_data_to_supabase

# Uncomment the following line to use an example of a custom tool
# from genesify.tools.custom_tool import MyCustomTool

# Check our tools documentations for more information on how to use them

@CrewBase
class GenesifyCrew():
	"""Genesify crew"""
	agents_config = 'config/agents.yaml'
	tasks_config = 'config/tasks.yaml'

	@agent
	def researcher(self) -> Agent:
		return Agent(
			config=self.agents_config['researcher'],
			tools=[JSONSearchTool(json_path='data.json')], # Example of custom tool, loaded on the beginning of file
			verbose=True
		)

	@agent
	def business_idea_developer(self) -> Agent:
		return Agent(
			config=self.agents_config['business_idea_developer'],
			tools=[SerperDevTool()],
			verbose=True
		)

	@task
	def research_task(self) -> Task:
		return Task(
			config=self.tasks_config['research_task'],
			agent=self.researcher(),
			output_file='research.md',

		)

	@task
	def business_idea_task(self) -> Task:
		return Task(
			config=self.tasks_config['business_idea_task'],
			agent=self.business_idea_developer(),
			output_file='business.md',
		)

	@crew
	def crew(self) -> Crew:
		"""Creates the Genesify crew"""
		return Crew(
			agents=self.agents, # Automatically created by the @agent decorator
			tasks=self.tasks, # Automatically created by the @task decorator
			process=Process.sequential,
			verbose=2,
			# process=Process.hierarchical, # In case you wanna use that instead https://docs.crewai.com/how-to/Hierarchical/
		)