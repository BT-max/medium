// books.ts
import { Hono } from "hono";

const app = new Hono();

app.get("/:id", (c) => c.json(`GET blog ${c.req.param("id")}`));
app.put("/", (c) => c.json("PUT blog", 201));
app.post("/", (c) => c.json("POST blog", 201));

export default app;
