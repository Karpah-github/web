from fastapi import APIRouter





router = APIRouter(prefix="/users")


@router.get("/")
async def get_users():
    return [{"name":"Juliet"}, {"name": "John"}]


@router.post("/", )
async def create_user(user: User):
    return user

@router.get("/{user_id}")
async def get_user(user_id: int):
    return {user_id: "Juliet"}

@router.put("/{user_id}")
async def edit_user(user_id: int):
    return user_id

@router.delete("/{user_id}")
async def delete_user(user_id: int):
    return {"message": f"deleted {user_id}"}