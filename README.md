# 🎬 OMDB Movie Explorer

A simple full-stack movie search application built with **React (Vite)** on the frontend and **Node.js + Express** on the backend. The backend connects to the public **OMDB API** and provides cached search/movie endpoints.

---

## 🚀 Live Demo

### **Frontend (React)**

[https://omdb-movie-explorer-frontend.onrender.com](https://omdb-movie-explorer-frontend.onrender.com)

### **Backend (Node.js API)**

[https://omdb-movie-explorer-backennd.onrender.com](https://omdb-movie-explorer-backennd.onrender.com)

---

## 📌 Features

* Search movies using the OMDB API
* View detailed movie information
* Add/Remove movies from Favorites (stored in localStorage)
* Backend caching for faster repeated searches
* Responsive UI with Tailwind CSS

---

## 🛠️ Tech Stack

### **Frontend**

* React (Vite)
* Tailwind CSS
* Axios

### **Backend**

* Node.js
* Express
* CORS + Helmet
* Custom In-Memory Cache

---


---

## 📦 Installation

### **Backend**

```bash
cd backend
npm install
node server.js
```

### **Frontend**

```bash
cd frontend
npm install
npm run dev
```

---

## 📁 Project Structure

```
OMDB-Movie-Explorer/
│── backend/
│   ├── routes/
│   ├── lib/
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    ├── public/
    ├── index.html
    └── package.json
```

---

## ❤️ Author

Developed by **Praneket** as a simple full-stack movie explorer application.

---

## 📜 License

This project is for learning and demo purposes only.
