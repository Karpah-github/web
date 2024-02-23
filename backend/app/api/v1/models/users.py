from pydantic import BaseModel, ConfigDict
from uuid import UUID
from typing import Optional

class UserSignInModel(BaseModel):
    email: str
    password: str
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_schema_extra={
            "example":{
                "email": "jane@gmail.com",
                "password":"*******",
                 "shop_name": "bla bla bla",
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

class UserSignupModel(BaseModel):
    email: Optional[str]
    password: Optional[str]
    first_name: str
    last_name: str
    role: str = 'owner'
    store_name: str
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_schema_extra={
            "example":{
                "email": "jane@gmail.com",
                "password":"*******",
            }
        }
    )

class UserModel(UserSignupModel):
    auth_id: UUID
    shop_id: Optional[str]
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_schema_extra={
            "example": {
                "first_name": "Jane Doe",
                "last_name": "jdoe@example.com",
                "auth_id": "4476113f-b202-95b3-a76f-302c6bef64c9",
                "shop_id": "4476113f-b202-95b3-a76f-302c6bef64c9",
                "phone":"4654732986",
                "role":"owner"
            }
        },
    )