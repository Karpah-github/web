"""
Information: 100–199
Successful: 200–299
Redirect: 300–399
Client errors: 400–499
Server errors: 500–599
"""

from fastapi import FastAPI
from app.routes import products, users


app = FastAPI()

# api.karpah.com

app.include_router(products.router, prefix="/api/v1")
app.include_router(users.router, prefix="/api/v1")


@app.get("/")
async def root():
    return {"message": "Welcome to Karpah"}
