from db.supabase import supabase
from models.users import UserSignupModel
from fastapi import Body

def get_current_User():
    data = supabase.auth.get_user()
    return data


def signup(user: UserSignupModel= Body(...)):
    res = supabase.auth.sign_up({
    "email": user.email,
    "password": user.email,
    })

def login(user: UserSignupModel = Body(...)):
    data = supabase.auth.sign_in_with_password(
        {"email": user.email, "password": user.password}
    )
    return data

def signout():
    res = supabase.auth.sign_out()
    return res