from dotenv import load_dotenv
import os

from pathlib import Path
env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)


class Config:
    url: str = os.environ.get("SUPABASE_URL")
    key: str = os.environ.get("SUPABASE_KEY")
    OPENAI_API_KEY=os.getenv("OPENAI_API_KEY")
    DB_USERNAME=os.getenv("DB_USERNAME"),
    DB_PASSWORD=os.getenv("DB_PASSWORD"),
    DB_NAME=os.getenv("DB_NAME"),
    DB_URL=f"mongodb+srv://{DB_USERNAME[0]}:{DB_PASSWORD[0]}@cluster0.zivlcn9.mongodb.net/?retryWrites=true&w=majority"



config = Config()           


