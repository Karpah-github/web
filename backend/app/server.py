from fastapi import FastAPI

app = FastAPI()


@app.get("/api/v1/products")
async def root():
    return ["apple", "rice"]