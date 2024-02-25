// books.ts
import { Hono } from "hono";

const app = new Hono();

app.post("/", (c) => c.json("POST signin", 201));

export default app;
