from fastapi.encoders import jsonable_encoder
from app.api.v1.db.supabase import supabase

def sign_up(signup):
    try:
        res = supabase.auth.sign_up({
        "email": signup.email,
        "password": signup.password,
        })
        return res
    except Exception as e:
        print(f"Error: {e}")


def create_seller(user, id, role):
    data, count = supabase.table('users').insert({"first_name": user.first_name, "last_name": user.last_name }).execute()
    return data

def create_shop(user, id):
    data, count = supabase.table('shops').insert({'name': user.store_name, 'owner_id':id }).execute()
    return data


def get_user():
    data = supabase.auth.get_user()
    return data


def login(user):
    data = supabase.auth.sign_in_with_password(
        {"email": user.email, "password": user.password}
    )
    return data

def logout():
    res = supabase.auth.sign_out()
    return res