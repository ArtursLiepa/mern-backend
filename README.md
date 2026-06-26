# 🚀 MERN Backend

Node.js and Express backend API for a MERN stack application.

Containerized with **Docker** and connected to **MongoDB Atlas**.

---

## 🛠️ Tech Stack

<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
</p>

---

## 📦 Run with Docker

Build image:

```bash
docker build -t mern-backend .
```

Run container:

```bash
docker run -p 3005:3005 mern-backend
```

---

## 🔐 Environment Variables

Create a `.env` file:

```env
PORT=3005
CDB_URL=mongodb://mongodb:27017/reactapp
```

---

## 🏗️ Architecture

```
Frontend (React)
        |
        v
 Backend API (Node/Express)
        |
        v
 MongoDB Atlas
```

---

## 📁 Project Structure

```
mern-backend/
│
├── src/
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔗 Frontend

Frontend repository: https://github.com/ArtursLiepa/mern-frontend
