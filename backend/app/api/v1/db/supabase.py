from supabase import Client, create_client
from config import config

class Supabase:
    supabase: Client = create_client(config.url, config.key)


supabase = Supabase().supabase


