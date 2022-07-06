import { writeFileSync } from "fs";
import * as todos from "./todos.json";
export function add(data) {
  const newTodos = [data, ...todos];
  writeFileSync("./todoReposity", JSON.stringify({ newTodos }));
  return;
}
