import { useState } from "react";

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Study");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAdd(title, dueDate, priority, category);

    setTitle("");
    setDueDate("");
    setPriority("Medium");
    setCategory("Study");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <br />
      <br />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <br />
      <br />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Study</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Shopping</option>
      </select>

      <br />
      <br />

      <button type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;