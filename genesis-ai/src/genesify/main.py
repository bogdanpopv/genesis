#!/usr/bin/env python

from genesify.crew import GenesifyCrew

def run():
    # Replace with your inputs, it will automatically interpolate any tasks and agents information
    inputs = {
        'topic': 'AI LLMs'
    }
    GenesifyCrew().crew().kickoff(inputs=inputs)
