# 📚 Library Management API

A Library Management System built with Express, TypeScript, and MongoDB (Mongoose).
It allows managing books (CRUD), borrowing books with business rules, and generating borrow summaries using MongoDB’s aggregation pipeline.

## ✨ Features

- Book Management (CRUD)
- Borrow Management
- Aggregation Pipeline
- Mongoose Middleware
- Pre-save hooks for validation
- Error Handling
- Clean Project Structure

# 📂 Project Structure
├── src
│   ├── config/           
│   ├── modules ──├──book/ 
│   └── server.ts ├──borrow/                
├── package.json  └──routes/
├── tsconfig.json
└── README.md

## 🚀 Getting Started

### 1️⃣ Clone the Repository
git clone https://github.com/your-username/library-management-api.git
cd library-management-api

### 2️⃣ Install Dependencies
npm install

### 3️⃣ Setup Environment Variables

Create a .env file in the root with:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/library_db

### 4️⃣ Run the Project

#### Development mode:

npm run dev


#### Build and run production:

npm run build
npm start

## 📖 API Endpoints
[https://library-management-api-psi-rose.vercel.app/]

### Books

POST /api/books → Create a new book
GET /api/books → Get all books (with filtering, sorting, limit)
GET /api/books/:bookId → Get book by ID
PUT /api/books/:bookId → Update a book
DELETE /api/books/:bookId → Delete a book

### Borrow

POST /api/borrow → Borrow a book
GET /api/borrow → Get borrowed books summary (aggregation pipeline)

## 🛠 Technologies Used

Node.js + Express.js
TypeScript
MongoDB + Mongoose 
Nodemon + TS-Node 

#### ✅ Example Response
Book Created
 {
  "success": true,
  "message": "Book created successfully",
  "data": {
    "_id": "64f123abc4567890def12345",
    "title": "The Theory of Everything",
    "author": "Stephen Hawking",
    "genre": "SCIENCE",
    "isbn": "9780553380163",
    "copies": 5,
    "available": true,
    "createdAt": "2025-08-19T10:23:45.123Z",
    "updatedAt": "2025-08-19T10:23:45.123Z"
  }
}

### 👨‍💻 Author
Developed by Naeem ✨