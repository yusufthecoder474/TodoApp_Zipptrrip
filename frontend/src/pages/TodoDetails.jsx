import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import api from "../services/api";

function TodoDetails() {
  const [searchParams] = useSearchParams();
  const [todo, setTodo] = useState(null);

  const id = searchParams.get("id");

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await api.get(`/todos/${id}`);
        setTodo(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchTodo();
    }
  }, [id]);

  if (!todo) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Todo Details</h1>

      <h2>{todo.title}</h2>

      <p>
        <strong>Status:</strong>{" "}
        {todo.completed ? "Completed" : "Pending"}
      </p>

      <p>
        <strong>Priority:</strong> {todo.priority}
      </p>

      <p>
        <strong>Category:</strong> {todo.category}
      </p>

      <p>
        <strong>Due Date:</strong>{" "}
        {todo.dueDate || "Not Set"}
      </p>

      <br />

      <Link to="/todos">
        ← Back to Todos
      </Link>
    </div>
  );
}

export default TodoDetails;