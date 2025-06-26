
# 💬 Chat-App

A real-time chat application built with modern technologies on both the backend and frontend.

---

## 🛠️ Tech Stack

### 🔙 Backend

* **Express.js** – Web framework
* **Mongoose** – MongoDB ODM
* **Dotenv** – Manage environment variables
* **Jsonwebtoken** – Authentication with JWT
* **bcryptjs** – Password hashing
* **cookie-parser** – Cookie management
* **Cloudinary** – Media upload and storage
* **Socket.io** – Real-time communication

### 🔜 Frontend

* **React.js** – UI library
* **Tailwind CSS** – Utility-first CSS framework
* **Zustand** – Global state management
* **DaisyUI** – UI component library for Tailwind

---

## 📒 Developer Notes

A few things I learned or want to remember during development:

* 🧩 **Choosing Tools Takes Time**
  It took a while to finalize the tech stack, but choosing the right tools is key.

* 📦 **CommonJS vs Modules**
  I explored the difference between CommonJS and ES Modules to better structure my code.

* 🧠 **Readable Code is Powerful**
  Prioritize clarity — it makes maintaining and scaling the project easier for yourself and others.

* 🎮 **Git is Like a Game Checkpoint**
  Don’t worry if you mess things up — you can always go back to a previous commit.

* 📁 **.gitignore Reminder**
  ⚠️ Don’t forget to add `node_modules/` to `.gitignore` to avoid pushing unnecessary files to the repo.

---

## ✅ Project To-Do

* [ ] Add user authentication
* [ ] Create chat rooms
* [ ] Integrate file uploads with Cloudinary
* [ ] Implement real-time messaging via Socket.io
* [ ] Polish UI with Daisy UI

---

## 🚀 Project Setup Steps (Progress Log)

* ✅ Initialized Git repository
* ✅ Organized files for clean and scalable code structure
* ✅ Installed required backend and frontend packages
* ✅ Added unnecessary files (like `node_modules`) to `.gitignore`
* ✅ Switched project type from CommonJS to ES Module
* ✅ Set up and tested development environment using `nodemon`

### 🔧 Backend Development

* ✅ Added `.env` file and configured environment variables
* ✅ Created MongoDB account and set up a project
* ✅ Connected to MongoDB through a custom `db.js` inside the `lib/` folder
* ✅ Created initial backend entry point: `index.js`
* ✅ Set up authentication route: `auth.route.js`
* ✅ Built initial authentication controllers
* ✅ Defined Mongoose schemas for:

  * **User**
  * **Message**

---

Let me know if you'd like to add setup instructions, screenshots, or a demo section!
