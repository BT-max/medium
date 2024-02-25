// index.ts
import { Hono } from "hono";
import signup from "./signup";
import signin from "./signin";
import blog from "./blog";

const app = new Hono().basePath("/api/v1");

app.route("/signup", signup);
app.route("/signin", signin);
app.route("/blog", blog);

export default app;
