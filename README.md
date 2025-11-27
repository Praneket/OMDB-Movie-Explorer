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

<img width="1359" height="590" alt="Screenshot 2025-11-27 081154" src="https://github.com/user-attachments/assets/ddea249f-6b1e-485c-8e4e-8380be19c881" />
<img width="1365" height="599" alt="Screenshot 2025-11-27 081211" src="https://github.com/user-attachments/assets/afb09b3a-e27e-4edb-85d7-99c4b6adfc44" />
<img width="1363" height="592" alt="Screenshot 2025-11-27 081232" src="https://github.com/user-attachments/assets/8630c6f3-8f82-44c1-9536-2c7d2b992cc4" />

---

## ❤️ Author

Developed by **Praneket** as a simple full-stack movie explorer application.

---

## 📜 License

This project is for learning and demo purposes only.
