# Next.js Blog Website 🚀

A modern **Blog Website** built with **Next.js 13 (App Router)**, **MongoDB**, and **Authentication**.  
This project allows users to **register, login, and manage blog posts** from a dashboard.  

---

## ✨ Features
- 🔐 **User Authentication** (Register & Login with hashed passwords)  
- 📝 **Create, Read, Update, Delete (CRUD)** blog posts  
- 📊 **Dashboard** for managing blogs  
- ⚡ Built with **Next.js 13 App Router**  
- 🗄️ **MongoDB & Mongoose** for database  
- 🎨 Styled with **CSS Modules**  

---

## 📂 Project Structure
/app
/api
/auth → Authentication routes
/posts → Blog CRUD routes
/dashboard → User dashboard
/register → Registration page
/login → Login page
/ → Homepage & blog listing
/models → Mongoose models
/utils → DB connection logic

yaml
Copy code

---

## 🛠️ Tech Stack
- **Frontend:** Next.js 13, React, CSS Modules  
- **Backend:** Next.js API routes  
- **Database:** MongoDB with Mongoose  
- **Auth:** bcryptjs (password hashing)  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install dependencies
bash
Copy code
npm install
3. Setup environment variables
Create a .env.local file and add:

env
Copy code
MONGO_URL=your_mongodb_connection_string
4. Run the development server
bash
Copy code
npm run dev
Now open 👉 http://localhost:3000

