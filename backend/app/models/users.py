from pydantic import BaseModel
from uuid import UUID


class UserSignup(BaseModel):
    email: str
    password: str


class User(BaseModel):
    first_name: str
    last_name: str
    auth_id: UUID
    phone: str
    role: str

class UserUpdated(BaseModel):
    