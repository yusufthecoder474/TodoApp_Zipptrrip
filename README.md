# Todo App

A full-stack Todo Management Application built using **React**, **Node.js**, and **Express.js**. The application allows users to create, manage, update, and organize daily tasks through a clean and responsive interface.

---

# Live Demo

### Frontend

https://todo-app-zipptrrip.vercel.app

### Backend API

https://todo-backend-6fei.onrender.com/api/todos

---

# Installation

## Prerequisites

Before running the project, make sure the following software is installed:

* ✅ Node.js (v18 or later)
* ✅ npm (comes with Node.js)
* ✅ Git

Verify the installation by running:

```bash
node -v
npm -v
git --version
```

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/yusufthecoder474/TodoApp_Zipptrrip.git
```

Move into the project folder:

```bash
cd TodoApp_Zipptrrip
```

---

## Step 2: Start the Backend Server

Open a terminal and run:

```bash
cd backend
npm install
node server.js
```

If everything is working correctly, you should see:

```
Server is running at http://localhost:4000
```

Keep this terminal running.

---

## Step 3: Start the Frontend

Open a **new terminal** and run:

```bash
cd frontend
npm install
npm run dev
```

You should see:

```
Local: http://localhost:5173
```

Open this URL in your browser.

---

## Step 4: Use the Application

You can now:

* ➕ Add a new todo
* ✏️ Edit existing todos
* ✅ Mark todos as completed
* ❌ Delete todos
* 🔍 Search todos
* 🎯 Filter todos
* 📅 Set due dates
* 🏷️ Assign priorities and categories
* 📊 View dashboard statistics
* 🌙 Switch between Light and Dark Mode
* 📄 Open the Todo Details page by clicking any todo title

---

# Features

## Todo Management

* Add a new todo
* Edit existing todos
* Delete todos
* Mark todos as completed
* Mark completed todos back to pending
* Clear all completed todos

## Search & Filter

* Search todos by title
* View all todos
* View active todos
* View completed todos

## Dashboard

* Total Todos
* Completed Todos
* Pending Todos
* High Priority Todos
* Progress Percentage
* Progress Bar

## Priority Levels

Each todo supports one of the following priority levels:

* High
* Medium
* Low

Todos are automatically sorted based on priority.

## Due Dates

Each todo supports a due date.

The application automatically displays:

* Upcoming
* Due Today
* Overdue

## Categories

Supported categories:

* Study
* Work
* Personal
* Shopping

## User Interface

* Responsive layout
* Dark Mode
* Toast notifications
* Dashboard cards
* Multi-page navigation using React Router

---

# Pages

| Route           | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| `/`             | Home page with project overview and navigation                |
| `/todos`        | View, add, edit, delete, search, filter, and manage todos     |
| `/todo?id=<id>` | View complete information for a single todo using the todo ID |
| `/about`        | About page describing the application                         |

> This application is built as a multi-page React application using React Router.

---

# Backend Functionalities

The backend is built using **Node.js** and **Express.js**.

Supported REST APIs:

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/todos`     | Get all todos           |
| GET    | `/api/todos/:id` | Get a single todo       |
| POST   | `/api/todos`     | Create a new todo       |
| PUT    | `/api/todos/:id` | Update an existing todo |
| DELETE | `/api/todos/:id` | Delete a todo           |

Todos are stored in a local JSON file:

```
backend/data/todos.json
```

---

# Tech Stack

## Frontend

* React
* React Router
* Axios
* React Toastify

## Backend

* Node.js
* Express.js
* UUID

## Deployment

* Vercel
* Render

---

# Project Structure

```
todo-app
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── data
│   │   └── todos.json
│   ├── db.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# Author

**Mohammad Yusuf**
