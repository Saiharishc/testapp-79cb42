from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/test")
def test_endpoint():
    return {"message": "This is a test response from the backend."}
