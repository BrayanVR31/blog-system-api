# 📘 Blog System API – Free & Open Source

Welcome to the **Blog System API**, a fully open-source and beginner-friendly RESTful API built with **NestJS**. 

This project is ideal for:
- 💻 **Junior developers** who want to learn how to consume or build modern APIs
- 🧩 **Frontend devs** looking for a plug-and-play backend for blog platforms
- 🤝 **Contributors** who want to collaborate or explore NestJS in action
- 👀 **Recruiters & hiring teams** reviewing clean code and documentation as part of a technical portfolio

> ⚡ The project includes **modern, interactive documentation** built with **Astro** and **Starlight** – offering a smooth developer experience and clean design, similar in spirit to Swagger, but powered by static site generation.

> 💼 Part of my personal portfolio, this project demonstrates backend architecture, TypeScript practices, and technical writing. You're welcome to **use**, **fork**, or **contribute**!

---

## 🌟 Key Features

- 🚀 **Modern API with NestJS & TypeScript**
- 📚 **Interactive Documentation** using Astro + Starlight
- 📝 **CRUD Operations** for blog posts, users, media, and more
- 🎨 **Responsive Design** with dark mode and mobile-first layout
- 🔐 **JWT Auth & Role Management**
- 🧪 **Beginner-friendly and well-documented**
- 🔧 **Fully customizable and easy to extend**

---

## 🧑‍💻 Quick Start

> ⚙️ You can use the API or docs independently, or integrate them into your own frontend project.

### Prerequisites
- Node.js v18+
- npm, yarn or pnpm

### Installation
```bash
git clone https://github.com/BrayanVR31/blog-api-docs.git
cd blog-api-docs
npm install
npm run dev
```

> Visit `http://localhost:4321` to explore the interactive documentation.

---

## 🔍 What's Inside?

- 🔐 **Authentication** – JWT, roles, API keys
- 📝 **Posts & Tags** – Create, edit, categorize
- 👤 **Users** – Registration, profiles, authors
- 💬 **Comments** – CRUD, nesting, moderation
- 🗂 **Media** – Uploads, optimization, library

---

## 🧑‍💻 Backend API with NestJS

This project provides a fully functional RESTful API built with **[NestJS](https://nestjs.com/)**. It supports blog functionality including authentication, user management, posts, comments, and media uploads — and is structured to follow best practices for scalability and readability.

> ⚙️ You can clone, run, and extend the backend in your own projects, or use it for learning purposes.

### 📂 Project Structure

```
src/
├── auth/            # Auth module (JWT, guards, login/register)
├── blog/            # Blog post CRUD
├── users/           # User profile and role management
├── comments/        # Nested comment system
├── media/           # File upload endpoints
├── common/          # Reusable utils, interceptors, DTOs, filters
├── app.module.ts    # Root module
└── main.ts          # App entry point
```

### 🚀 Getting Started (Backend)

```bash
git clone https://github.com/BrayanVR31/blog-system-api.git
cd blog-system-api
npm install
```

Create a `.env` file:

```env
PORT=3000
JWT_SECRET=your_jwt_secret
DATABASE_URL=mongodb://localhost:27017/blog-system
```

Start the server:

```bash
npm run start:dev
```

API runs at `http://localhost:3000`

### 📬 API Overview

#### 🔐 Authentication
- `POST /auth/register` – Register new user
- `POST /auth/login` – Log in and receive JWT
- `GET /auth/profile` – Get current user (requires token)

#### 📝 Blog Posts
- `GET /posts` – List all posts
- `POST /posts` – Create a new post
- `GET /posts/:id` – Get single post
- `PUT /posts/:id` – Update post
- `DELETE /posts/:id` – Delete post

#### 💬 Comments
- `GET /posts/:id/comments` – Get comments for a post
- `POST /comments` – Add a comment
- `DELETE /comments/:id` – Remove a comment

#### 📦 Media
- `POST /media/upload` – Upload an image or file

### 🧪 Testing

```bash
npm run test
npm run test:e2e
```

### 📚 Swagger (Optional)

If you're using Swagger, visit:

```txt
http://localhost:3000/api
```

---

## 🤝 Contributing

```bash
git checkout -b feature/your-feature
git commit -m "feat: Add something useful"
git push origin feature/your-feature
```

Then, open a pull request 🚀

---

## 🧩 Use It in Your Portfolio or Projects

Feel free to use this API in your frontend apps, bootcamps, portfolios, or learning projects!

---

Made with ❤️ by [Brayan Vázquez Ramírez](https://github.com/BrayanVR31)
