// authors.ts
import { Hono } from "hono";

const app = new Hono();

app.post("/", (c) => c.json("POST signup", 201));

export default app;
