// front completo, falta el back

📦 CollectorHub

Full Stack Web Application for Collectors

CollectorHub is a full stack web application designed for collectors who want to organize and manage their collectible items in one place. Users can create an account, upload items with images and details, and manage their personal collection through a simple and intuitive interface.

This project was developed as a personal practice to demonstrate full stack fundamentals and the complete flow between frontend, backend, and database.

🚀 Features

User registration and authentication

Secure login using JWT

Personal user profile

Create, read, update, and delete collectible items (CRUD)

Upload images for each item

Organized item listing per user

Basic validations and error handling

🛠️ Tech Stack Frontend

React

JavaScript / TypeScript

React Router

CSS / Bootstrap

Backend

Node.js

Express

JWT Authentication

Multer (for image uploads)

Database

PostgreSQL (or MongoDB, depending on your implementation)

🧩 Project Structure (simplified) /client └── src ├── components ├── pages ├── services └── App.jsx

/server ├── controllers ├── routes ├── models ├── middleware └── index.js

⚙️ Installation & Setup

Clone the repository git clone https://github.com/your-username/collectorhub.git

Install dependencies

Frontend:

cd client npm install

Backend:

cd server npm install

Environment variables
Create a .env file in the /server directory and add:

PORT=3001 JWT_SECRET=your_jwt_secret DATABASE_URL=your_database_url

Run the project
Backend:

npm run dev

Frontend:

npm start

🧠 What I Learned

Building a full stack application from scratch

Implementing authentication and authorization

Managing relational/non-relational databases

Handling file uploads

Connecting frontend and backend services

Structuring a scalable project

📌 Future Improvements

Search and filter items

Categories and tags

Public profiles for sharing collections

Image optimization

Deployment (Vercel / Render / Railway)

👤 Author

Juan Ariel Gallardo Full Stack Developer Trainee 📧 kyron.9@gmail.com

🔗 LinkedIn

About
Proyecto plataforma para coleccionistas

Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 0 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Packages
No packages published
Publish your first package
Languages
HTML
100.0%
Suggested workflows
Based on your tech stack
SLSA Generic generator logo
SLSA Generic generator
Generate SLSA3 provenance for your existing release workflows
Jekyll using Docker image logo
Jekyll using Docker image
Package a Jekyll site using the jekyll/builder Docker image.
More workflows
Footer
