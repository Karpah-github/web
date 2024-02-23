"""
Information: 100–199
Successful: 200–299
Redirect: 300–399
Client errors: 400–499
Server errors: 500–599
"""

from fastapi import FastAPI
from app.api.v1.routes import products, users, auth


app = FastAPI(title="Karpah API V1",
              version="0.0.1",
              docs_url="/docs", 
              middleware=None, 
              description="""
                Karpah API

                ## Auth
                You can login and logout users

                ## Users
                You will be able to:
                * **Create users** (_not implemented_).
                * ** Read users** (_not implemented_).
                * ** Get user** (_not implemented_).
                """)

# api.karpah.com

app.include_router(products.router, tags=["products"], prefix="/api/v1")
app.include_router(users.router, tags=["users"], prefix="/api/v1")
app.include_router(auth.router, tags=["auth"], prefix="/api/v1")


@app.get("/")
async def root():
    return {"message": "Welcome to Karpah's API, go to http://127.0.0.1:8000/docs#/"}
