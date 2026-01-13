
---

# 🧠 RAG Chatbot (PDF-based)

A **Retrieval-Augmented Generation (RAG) chatbot** that allows users to **upload PDF documents and ask questions about them**.
The system retrieves relevant context from uploaded PDFs and generates accurate answers using LLMs.

This project is built as a **full-stack application** with a FastAPI backend and a React frontend.

---

## 🚀 Features

* 📄 Upload PDF files from the frontend
* 🔍 Extract, chunk, and embed PDF content
* 🧠 Semantic search using vector embeddings (FAISS)
* 🤖 Answer questions using LLMs with retrieved context
* 🌐 REST API built with FastAPI
* ⚛️ Frontend built using React
* 🔗 CORS-enabled backend for frontend integration

---

## 🏗️ Tech Stack

### Backend

* **FastAPI**
* **LangChain**
* **FAISS** (Vector Store)
* **Hugging Face Embeddings**
* **OpenRouter API** (LLM access)
* **Python**

### Frontend

* **React**
* **JavaScript**
* **CSS**
* **Fetch API**

---

## 📁 Project Structure

### Backend (separate repository)

```
backend/
│── app/
│   ├── api.py
│   ├── main.py
│   ├── config.py
│   └── rag/
│       ├── loader.py
│       ├── vectorstore.py
│       └── chain.py
│── data/
│   └── pdfs/
│── requirements.txt
│── .env
```

### Frontend (this repository)

```
frontend/
│── src/
│   ├── App.jsx
│   ├── App.css
│   └── assets/
│       └── attached-file.png
│── public/
│── package.json
│── .gitignore
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/TS563/RAG-CHATBOT-FRONTEND.git
cd RAG-CHATBOT-FRONTEND
```

---

### 2️⃣ Install Frontend Dependencies

```bash
npm install
```

---

### 3️⃣ Start Frontend Server

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔌 Backend Connection

The frontend communicates with the backend via REST APIs.

### API Endpoints Used

* `POST /upload` → Upload PDF file
* `POST /chat` → Ask a question based on uploaded PDFs

> ⚠️ Make sure the **backend server is running** before using the chatbot.

---

## 🔐 Environment Variables (Recommended)

Although this is a **personal project**, it is recommended to use environment variables.

Example (frontend):

```
VITE_API_BASE_URL=http://127.0.0.1:8000
```

Then use it in code:

```js
fetch(`${import.meta.env.VITE_API_BASE_URL}/chat`)
```

🚫 Do **NOT** commit `.env` files.

---

## 🧪 How It Works (RAG Flow)

1. User uploads a PDF
2. PDF is parsed and split into chunks
3. Chunks are converted into embeddings
4. Embeddings are stored in FAISS vector store
5. User asks a question
6. Relevant chunks are retrieved
7. LLM generates an answer using retrieved context

---

## 📌 Current Limitations

* Only PDF files supported
* Vector store is in-memory (not persistent yet)
* Single-user workflow
* Basic UI (no chat history yet)

---

## 🔮 Future Improvements

* Persistent vector storage
* Chat history
* Multiple document support
* Authentication
* Streaming responses
* Deployment (Docker / Cloud)

---

## 👤 Author

**Tanish Sharma**
B.Tech (AI & ML)
Passionate about Backend, APIs, and Open Source

GitHub: [https://github.com/TS563](https://github.com/TS563)

---

## ⭐ Acknowledgements

* LangChain
* Hugging Face
* FastAPI
* OpenRouter
* Open Source Community

---

