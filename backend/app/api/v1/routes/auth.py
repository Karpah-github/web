from fastapi import APIRouter, Body, Request, HTTPException, status
from models.users import UserSignupModel



router = APIRouter(prefix="/auth")


@router.get("/user", response_model=UserSignupModel)



@router.post("/login")



@router.post("/logout")

