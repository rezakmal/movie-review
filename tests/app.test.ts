import request from "supertest";
import app from "../src/app";

describe("app integration test", () => { 
  it("should return 404 for unknown route", async () => {
    const res = await request(app).get("/unknown");
    expect(res.statusCode).toBe(404);
  });
  
  it("should load home route", async () => {
    const res = await request(app).get("/api/movies");
    expect(res.statusCode).toBe(200);
  });
});