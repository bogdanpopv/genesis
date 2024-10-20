import os
from supabase import create_client, Client

# Replace these with your actual Supabase URL and API key
SUPABASE_URL = "https://zahnsdjaonlfzthwimem.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphaG5zZGphb25sZnp0aHdpbWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxMTE0NzAsImV4cCI6MjA0NDY4NzQ3MH0.ylu8X_B6YxagBTf1LFC8xqRKLrxLX85wL2vg1PUAOXc"

def send_data_to_supabase(data):
    # Create a Supabase client
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
    
    # Insert data into your Supabase table
    response = supabase.table("report").insert(data).execute()
    print(response)

if __name__ == "__main__":
    # Read the contents of research.md
    # with open('../../research.md', 'r') as file:
    #     research_content = file.read()
    
    # Prepare the data to send
    data = {
        "test": "testvalue",
    }
    
    # Send the data to Supabase
    send_data_to_supabase(data)
