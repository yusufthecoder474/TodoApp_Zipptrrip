import { useState } from "react";

function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const priorityColor = {
    High: "#ff4d4f",
    Medium: "#faad14",
    Low: "#52c41a",
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let status = "";
  let statusColor = "";

  if (todo.dueDate) {
    const due = new Date(todo.dueDate);
    due.setHours(0, 0, 0, 0);

    if (due < today) {
      status = "Overdue";
      statusColor = "#ff4d4f";
    } else if (due.getTime() === today.getTime()) {
      status = "Due Today";
      statusColor = "#faad14";
    } else {
      status = "Upcoming";
      statusColor = "#52c41a";
    }
  }

  return (
    <div className="todo-item">
      {editing ? (
        <>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button
            onClick={() => {
              onEdit(todo.id, title);
              setEditing(false);
            }}
          >
            Save
          </button>

          <button
            onClick={() => {
              setEditing(false);
              setTitle(todo.title);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <div
            style={{
              cursor: "pointer",
              color: todo.completed ? "gray" : "inherit",
              opacity: todo.completed ? 0.7 : 1,
            }}
            onClick={() => onToggle(todo)}
          >
            <strong>
              {todo.completed ? "✅" : "⬜"} {todo.title}
            </strong>

            {todo.dueDate && (
              <div
                style={{
                  marginTop: "6px",
                  color: "#888",
                }}
              >
                📅 Due: {todo.dueDate}
              </div>
            )}

            <div style={{ marginTop: "8px" }}>
              {todo.priority && (
                <span
                  style={{
                    display: "inline-block",
                    background: priorityColor[todo.priority],
                    color: "white",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    marginRight: "8px",
                  }}
                >
                  {todo.priority}
                </span>
              )}

              {todo.category && (
                <span
                  style={{
                    display: "inline-block",
                    background: "#1677ff",
                    color: "white",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    marginRight: "8px",
                  }}
                >
                  {todo.category}
                </span>
              )}

              {status && (
                <span
                  style={{
                    display: "inline-block",
                    background: statusColor,
                    color: "white",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  {status}
                </span>
              )}
            </div>
          </div>

          <button
            style={{ float: "right" }}
            onClick={() => {
              if (window.confirm("Delete this todo?")) {
                onDelete(todo.id);
              }
            }}
          >
            Delete
          </button>

          <button
            style={{
              float: "right",
              marginRight: "10px",
            }}
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default TodoItem;