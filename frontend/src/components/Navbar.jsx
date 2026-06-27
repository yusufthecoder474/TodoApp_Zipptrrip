import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      style={{
        background: "#222",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Link
          to="/"
          style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
        >
          Home
        </Link>

        <Link
          to="/todos"
          style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
        >
          Todos
        </Link>

        <Link
          to="/about"
          style={{ color: "white", textDecoration: "none" }}
        >
          About
        </Link>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;