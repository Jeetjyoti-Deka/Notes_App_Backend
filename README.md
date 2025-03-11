# Backend - Node.js + Express + MongoDB

This is the backend API for the project, built using **Node.js, Express, and MongoDB (Mongoose ORM)**.

## 🚀 Live Demo  
[Deploy Link - Notes App Backend](https://notes-app-backend-bad2.onrender.com/)

## Routes

| Method | Endpoint         | Description                      |
|--------|-----------------|----------------------------------|
| **GET**    | `/api/notes`       | Fetch all notes               |
| **POST**   | `/api/notes`       | Create a new note             |
| **PUT**    | `/api/notes/:id`   | Update a note by ID           |
| **DELETE** | `/api/notes/:id`   | Delete a note by ID           |

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Jeetjyoti-Deka/Notes_App_Backend
cd Notes_App_Backend
```

### 2️⃣ Install Dependencies
```sh
pnpm install
```
### 3️⃣ Set Up Environment Variables
Create a .env file in the root folder and add:
```sh
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority // create a new database in Mongodb Atlas
```
4️⃣ Start the Server
```sh
pnpm start
```

The API should now be running at http://localhost:5000/api

5️⃣ Run in Development Mode
```sh
pnpm dev
```

🛠️ Tech Stack
+ Node.js (Express Framework)
+ MongoDB (Mongoose for ORM)
