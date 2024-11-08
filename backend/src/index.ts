import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import { z, ZodError } from "zod";

let blogPosts = [
  { id: "1", title: "blog1", content: "content1" },
  { id: "2", title: "blog2", content: "content2" },
  { id: "3", title: "blog3", content: "content3" },
];

const app = new Hono();
app.use("*", prettyJSON());

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/entry/:id", (c) => {
  const id = c.req.param("id");
  return c.json({
    "your id is": id,
  });
});

app.post("/post", async (c) => {
  try {
    const parsedBody = postSchema.parse(await c.req.json());

    const { title, content } = parsedBody;
    const newPost = { id: String(blogPosts.length + 1), title, content };
    blogPosts = [...blogPosts, newPost];

    return c.json(newPost);
  } catch (error) {
    if (error instanceof ZodError) {
      return c.json({ error: error.errors }, 400);
    }
    return c.json({ error: "An unknown error occurred" }, 500);
  }
});

app.put("/post/:id", async (c) => {
  const id = c.req.param("id");
  const index = blogPosts.findIndex((p) => p.id === id);

  if (index === -1) {
    return c.json({ message: "Post not found" }, 400);
  }

  try {
    const parsedBody = postSchema.parse(await c.req.json());

    const { title, content } = parsedBody;
    blogPosts[index] = { ...blogPosts[index], title, content };

    return c.json(blogPosts[index]);
  } catch (error) {
    if (error instanceof ZodError) {
      return c.json({ error: error.errors }, 400);
    }
    return c.json({ error: "An unknown error occurred" }, 500);
  }
});

export default app;
