import { useEffect, useMemo, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Load Todos
  const fetchTodos = async () => {
    try {
      const response = await api.get("/todos");
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

// Add Todo
const addTodo = async (title, dueDate, priority, category) => {
  try {
    await api.post("/todos", {
      title,
      dueDate,
      priority,
      category,
    });

    fetchTodos();
    toast.success("Todo added successfully!");
  } catch (error) {
    console.error(error);
  }
};

  // Toggle Complete
  const toggleTodo = async (todo) => {
    try {
      await api.put(`/todos/${todo.id}`, {
        completed: !todo.completed,
      });

      fetchTodos();

        if (!todo.completed) {
        toast.success("Todo completed!");
        } else {
        toast.warning("Todo marked as pending!");
        }
    } catch (error) {
      console.error(error);
    }
  };

  // Delete Todo
  const deleteTodo = async (id) => {
    try {
      await api.delete(`/todos/${id}`);

      fetchTodos();
toast.error("Todo deleted!");
    } catch (error) {
      console.error(error);
    }
  };

  // Edit Todo
  const editTodo = async (id, title) => {
    try {
      await api.put(`/todos/${id}`, {
        title,
      });

      fetchTodos();
toast.info("Todo updated!");
    } catch (error) {
      console.error(error);
    }
  };

  // Clear Completed
  const clearCompleted = async () => {
    try {
      const completedTodos = todos.filter((todo) => todo.completed);

      for (const todo of completedTodos) {
        await api.delete(`/todos/${todo.id}`);
      }

      fetchTodos();
toast.success("Completed todos cleared!");
    } catch (error) {
      console.error(error);
    }
  };

  // Search + Filter
  const filteredTodos = useMemo(() => {
  const filtered = todos.filter((todo) => {
    const matchesSearch = todo.title
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "active") {
      return matchesSearch && !todo.completed;
    }

    if (filter === "completed") {
      return matchesSearch && todo.completed;
    }

    return matchesSearch;
  });

  const priorityOrder = {
    High: 1,
    Medium: 2,
    Low: 3,
  };

  return filtered.sort(
    (a, b) =>
      (priorityOrder[a.priority] || 4) -
      (priorityOrder[b.priority] || 4)
  );
}, [todos, search, filter]);
  // Dashboard Statistics
const completedCount = todos.filter(
  (todo) => todo.completed
).length;

const pendingCount = todos.filter(
  (todo) => !todo.completed
).length;

const highPriorityCount = todos.filter(
  (todo) => todo.priority === "High"
).length;

const progress =
  todos.length === 0
    ? 0
    : Math.round((completedCount / todos.length) * 100);

  return (
    <div className="app">
      <h1>Todo App</h1>

      <h2>Total Todos: {todos.length}</h2>

      <h3>Progress: {progress}%</h3>

<div
  style={{
    width: "100%",
    height: "20px",
    background: "#ddd",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "25px",
  }}
>
  <div
    style={{
      width: `${progress}%`,
      height: "100%",
      background: "#4CAF50",
      transition: "0.4s",
    }}
  />
</div>

      <div
  style={{
    display: "flex",
    gap: "20px",
    marginBottom: "25px",
    flexWrap: "wrap",
  }}
>
  <div
    style={{
      background: "#4CAF50",
      color: "white",
      padding: "20px",
      borderRadius: "10px",
      width: "170px",
      textAlign: "center",
    }}
  >
    <h3>Total</h3>
    <h1>{todos.length}</h1>
  </div>

  <div
    style={{
      background: "#2196F3",
      color: "white",
      padding: "20px",
      borderRadius: "10px",
      width: "170px",
      textAlign: "center",
    }}
  >
    <h3>Completed</h3>
    <h1>{completedCount}</h1>
  </div>

  <div
    style={{
      background: "#FF9800",
      color: "white",
      padding: "20px",
      borderRadius: "10px",
      width: "170px",
      textAlign: "center",
    }}
  >
    <h3>Pending</h3>
    <h1>{pendingCount}</h1>
  </div>

  <div
    style={{
      background: "#E91E63",
      color: "white",
      padding: "20px",
      borderRadius: "10px",
      width: "170px",
      textAlign: "center",
    }}
  >
    <h3>High Priority</h3>
    <h1>{highPriorityCount}</h1>
  </div>
</div>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("all")}>
          All
        </button>

        <button
          onClick={() => setFilter("active")}
          style={{ marginLeft: "10px" }}
        >
          Active
        </button>

        <button
          onClick={() => setFilter("completed")}
          style={{ marginLeft: "10px" }}
        >
          Completed
        </button>

        <button
          onClick={clearCompleted}
          style={{
            marginLeft: "10px",
            background: "crimson",
            color: "white",
          }}
        >
          Clear Completed
        </button>
      </div>

      <input
        type="text"
        placeholder="Search Todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "320px",
          padding: "10px",
          marginBottom: "20px",
        }}
      />

      <TodoForm onAdd={addTodo} />

      <hr />

            {filteredTodos.length === 0 ? (
        <p>No todos found.</p>
      ) : (
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      )}
    </div>
  );
}

export default Todos;