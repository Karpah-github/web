from fastapi import APIRouter
from pydantic import BaseModel


class Product(BaseModel):
    name: str
    description: str
    price: float


router = APIRouter(prefix="/products")


@router.get("/")
async def get_products():
    return ["apple", "rice"]


@router.post("/")
async def add_product(prod: Product):
    return prod

@router.get("/{prod_id}")
async def get_product(prod_id: int):
    return "apple"

@router.put("/{prod_id}")
async def edit_product(prod_id: int):
    return prod_id

@router.delete("/{prod_id}")
async def delete_product(prod_id: int):
    return {"message": f"deleted {prod_id}"}