import Koa from "koa";
import koaBody from "koa-body";
import { add } from "./database/todoReposity.js";

const app = new Koa();

app.use(koaBody());
app.use((ctx) => {
  add({ todo: "first", completed: false });
});

app.listen(5000);
