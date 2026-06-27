const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "data", "todos.json");

function readTodos() {
  const data = fs.readFileSync(DB_PATH, "utf8");
  return JSON.parse(data);
}

function writeTodos(todos) {
  fs.writeFileSync(DB_PATH, JSON.stringify(todos, null, 2));
}

module.exports = {
  readTodos,
  writeTodos,
};