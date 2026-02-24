# Task Tracker REST API

A lightweight, fully functional RESTful API built using **Node.js** and **Express**. This project demonstrates core backend development principles, including routing, HTTP methods, and JSON request parsing, without the overhead of a database setup by utilizing an in-memory array.

## Features
* **CRUD Operations:** Supports Create, Read, Update, and Delete operations for managing task items.
* **RESTful Architecture:** Follows standard REST conventions for endpoint structuring and HTTP status codes (200, 201, 400, 404).
* **Zero Database Configuration:** Uses local memory storage, making it instantly deployable and testable.
* **JSON Middleware:** Implements native Express body parsing for handling incoming JSON payloads securely.

## Tech Stack
* **Backend:** Node.js
* **Framework:** Express.js
* **Testing Tool:** Postman / cURL

## API Endpoints

| Method | Endpoint | Description | Request Body Example |
|---|---|---|---|
| `GET` | `/api/tasks` | Fetch all tasks | None |
| `GET` | `/api/tasks/:id` | Fetch a single task by ID | None |
| `POST` | `/api/tasks` | Create a new task | `{"title": "Buy groceries"}` |
| `PUT` | `/api/tasks/:id` | Update an existing task | `{"title": "Updated title", "completed": true}` |
| `DELETE` | `/api/tasks/:id` | Delete a task | None |

## Installation & Setup

1. Clone the repository to your local machine:
   ```bash
   git clone [https://github.com/NikhilBhima-24/task-tracker-api.git](https://github.com/NikhilBhima-24/task-tracker-api.git)
   cd task-tracker-api
   ```

2. Install the required Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   The API will now be running locally on `http://localhost:3000`.

## Example Usage (cURL)

**Create a new task:**
```bash
curl -X POST http://localhost:3000/api/tasks \
-H "Content-Type: application/json" \
-d '{"title":"Prepare for technical interview"}'
```
