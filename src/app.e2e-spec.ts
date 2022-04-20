import request from "supertest";
import { app } from "./app";
import { prisma } from "./prisma";

test("[e2e] CreateLesson", async () => {
  const response = await request(app)
    .post("/lessons")
    .send({ title: "Nova Aula" });

  const lessonInDatabase = await prisma.lesson.findFirst({
    where: {
      title: "Nova Aula",
    },
  });

  expect(response.status).toBe(201);
  expect(response.body.error).toBeFalsy();
  expect(lessonInDatabase).toBeTruthy();
});
