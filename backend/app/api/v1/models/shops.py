from pydantic import BaseModel, ConfigDict
from uuid import UUID
from typing import Optional


class CreateShopModel(BaseModel):
    shop_name: str
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_schema_extra={
            "example":{
                "shop_name": "jane@gmail.com",
                "owner_id":"hdgfu-dg37dh"
            }
        }
    )
