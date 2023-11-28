from fastapi import APIRouter, Body, Request, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from app.api.v1.models.users import UserModel
from bson import ObjectId




router = APIRouter(prefix="/users")


@router.get("/", response_description="List All Sellers")
async def get_users(request: Request):
    """
    Get a List of all the Users
    """
    users = []
    query = await request.app.mongodb["users"].find().to_list(length=100)
    for doc in query:
        doc["id"] = str(doc["_id"])
        del doc["_id"]
        users.append(doc)
    return users


@router.post(
    "/", response_description="Create A new Seller", status_code=status.HTTP_201_CREATED
)
async def create_user(request: Request, user: UserModel = Body(...)):
    """
    Insert new user document to User Collection
    """
    user_encoded = jsonable_encoder(user)
    new_user = await request.app.mongodb["users"].insert_one(user_encoded)
    print(new_user.inserted_id, "print")
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=new_user.inserted_id)


@router.get("/{user_id}", response_description="Get One Seller")
async def get_user(user_id: str, request: Request):
    """
    Get the record for a specific user with the id
    """
    if user := await request.app.mongodb["users"].find_one({"_id": ObjectId(user_id)}):
        del user["_id"]
        return user
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND, detail=f"User with{user_id} not found"
    )

@router.delete("/{user_id}")
async def delete_one_user(user_id: str, request: Request):
    res = await request.app.mongodb['users'].delete_one({'_id': user_id})
    if res.deleted_count == 1:
        JSONResponse(status_code=status.HTTP_204_NO_CONTENT)
    else:
        HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User with {user_id} not found")