const express = require("express");
const cors = require("cors");
const { readTodos, writeTodos } = require("./db");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// GET All Todos
app.get("/api/todos", (req, res) => {
  res.json(readTodos());
});

// GET Todo By ID
app.get("/api/todos/:id", (req, res) => {
  const todos = readTodos();

  const todo = todos.find((t) => t.id === req.params.id);

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  res.json(todo);
});

// CREATE Todo
app.post("/api/todos", (req, res) => {
  const { title, dueDate, priority, category } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  const todos = readTodos();

  const newTodo = {
    id: uuidv4(),
    title,
    dueDate: dueDate || "",
    priority: priority || "Medium",
    category: category || "Study",
    completed: false,
  };

  todos.push(newTodo);

  writeTodos(todos);

  res.status(201).json(newTodo);
});

// UPDATE Todo
app.put("/api/todos/:id", (req, res) => {
  const {
    title,
    completed,
    dueDate,
    priority,
    category,
  } = req.body;

  const todos = readTodos();

  const index = todos.findIndex(
    (t) => t.id === req.params.id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  if (title !== undefined) {
    todos[index].title = title;
  }

  if (completed !== undefined) {
    todos[index].completed = completed;
  }

  if (dueDate !== undefined) {
    todos[index].dueDate = dueDate;
  }

  if (priority !== undefined) {
    todos[index].priority = priority;
  }

  if (category !== undefined) {
    todos[index].category = category;
  }

  writeTodos(todos);

  res.json(todos[index]);
});

// DELETE Todo
app.delete("/api/todos/:id", (req, res) => {
  const todos = readTodos();

  const updatedTodos = todos.filter(
    (t) => t.id !== req.params.id
  );

  if (updatedTodos.length === todos.length) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  writeTodos(updatedTodos);

  res.json({
    message: "Todo deleted successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});