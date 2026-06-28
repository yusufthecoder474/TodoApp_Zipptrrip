# Todo App

A full-stack Todo Management Application built using **React**, **Node.js**, and **Express**. The application allows users to create, manage, update, and organize daily tasks through a clean and responsive interface.

## Live Demo

**Frontend:**
https://todo-app-zipptrrip.vercel.app

**Backend API:**
https://todo-backend-6fei.onrender.com/api/todos

---

# Features

### Todo Management

* Add a new todo
* Edit existing todos
* Delete todos
* Mark todos as completed
* Mark completed todos back to pending
* Clear all completed todos

### Search & Filter

* Search todos by title
* View all todos
* View active todos
* View completed todos

### Dashboard

* Total Todos
* Completed Todos
* Pending Todos
* High Priority Todos
* Progress Percentage
* Progress Bar

### Priority Levels

Each todo can have one of the following priorities:

* High
* Medium
* Low

Todos are automatically sorted by priority.

### Due Dates

Each todo supports a due date.

The application displays:

* Upcoming
* Due Today
* Overdue

### Categories

Supported categories include:

* Study
* Work
* Personal
* Shopping

### User Interface

* Responsive layout
* Dark Mode
* Toast notifications
* Clean dashboard cards

---

# Backend Functionalities

The backend is built using **Node.js** and **Express.js**.

Supported REST APIs:

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/todos     | Get all todos   |
| GET    | /api/todos/:id | Get single todo |
| POST   | /api/todos     | Create todo     |
| PUT    | /api/todos/:id | Update todo     |
| DELETE | /api/todos/:id | Delete todo     |

Todos are stored in a local JSON file (`backend/data/todos.json`).

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
│   ├── server.js
│   ├── db.js
│   └── package.json
```

---

# Installation

Clone the repository

```
git clone https://github.com/yusufthecoder474/TodoApp_Zipptrrip.git
```

Install frontend

```
cd frontend
npm install
npm run dev
```

Install backend

```
cd backend
npm install
node server.js
```

---

# Author

Mohammad Yusuf
