import request from "supertest";
import app from "../server";
describe("Agendamento API", () => {
  it("deve retornar status ok", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe("ok");
  });
});