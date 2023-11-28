from pydantic import BaseModel, ConfigDict
from uuid import UUID
from typing import Optional


class UserSignupModel(BaseModel):
    email: str
    password: str
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_schema_extra={
            "example":{
                "email": "jane@gmail.com",
                "password":"*******"
            }
        }
    )


class UserUpdatedModel(BaseModel):
    first_name: Optional[str]
    last_name: Optional[str]
    phone: Optional[str]
    role: Optional[str]
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_schema_extra={
            "example": {
                "first_name": "Jane Doe",
                "last_name": "jdoe@example.com",
                "phone":"4654732986",
                "role":"owner"
            }
        },
    )

class UserModel(BaseModel):
    first_name: str
    last_name: str
    auth_id: UUID
    phone: str
    role: str
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_schema_extra={
            "example": {
                "first_name": "Jane Doe",
                "last_name": "jdoe@example.com",
                "auth_id": "4476113f-b202-95b3-a76f-302c6bef64c9",
                "phone":"4654732986",
                "role":"owner"
            }
        },
    )