from supabase import Client, create_client
from config import config
from app.models.users import UserSignupModel
from fastapi import  Body

class Supabase:
    supabase: Client = create_client(config.url, config.key)


supabase = Supabase()


