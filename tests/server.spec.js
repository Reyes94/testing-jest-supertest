import request from "supertest"
import { app } from "../index.js"

describe("Operaciones CRUD de cafes", () => {
    test("Ruta GET /cafes devuelve código 200 y un arreglo con al menos un objeto", async () => {
        const response = await request(app).get("/cafes");

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
    });

    test("Obtener código 404 al intentar eliminar un café con un id que no existe", async () => {
        const jwt = "token";
        const coffeeToRemove = 5;

        const response = await request(app)
            .delete(`/cafes/${coffeeToRemove}`)
            .set("Authorization", jwt);

        expect(response.status).toBe(404);
        expect(response.body).toEqual({
            message: "No se encontró ningún cafe con ese id"
        });
    });

    test("Ruta POST /cafes agrega un nuevo café y devuelve un código 201", async () => {
        const newCoffee = {
            id: 5,
            nombre: "Ristretto"
        };
        const response = await request(app)
            .post("/cafes")
            .send(newCoffee);
        expect(response.body).toContainEqual(newCoffee);
        expect(response.status).toBe(201);
    });

    test("Ruta PUT /cafes devuelve status 400 al intentar actualizar un café cuyo id en los parámetros sea diferente al id dentro del payload", async () => {
        const coffeeToUpdate = 2;

        const response = await request(app)
            .put(`/cafes/${coffeeToUpdate}`)
            .send({
                id: 4,
                nombre: "Lungo"
            });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            message: "El id del parámetro no coincide con el id del café recibido"
        });
    });
});


