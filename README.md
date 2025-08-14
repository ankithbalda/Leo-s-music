# 🎵 Web Music Player

A simple yet stylish **web-based music player** made with **HTML, CSS, and JavaScript**.  
It dynamically loads MP3 songs from a local folder, displays them in a playlist, and plays tracks directly in the browser.

---

## 📌 Project Overview

This application demonstrates:
- **Dynamic song listing** from a folder.
- HTML5 **Audio API** for playback.
- **Responsive UI** with modern styling.
- A **slide-in playlist panel** for browsing songs.
- Smooth animations and easy song selection.

---

## ✨ Features

- 🎶 Automatic playlist creation from available `.mp3` files.
- ▶️ Play, pause, and select songs from a list.
- 📂 Folder-based song source (easily replace songs).
- 📱 Responsive design for desktop and mobile.
- 🎨 Customized UI using `style.css` & `utility.css`.

---

## 🛠️ Tech Stack

- **HTML5** — Structure of the application.
- **CSS3** — Styling and responsive layout.
- **JavaScript (Vanilla)** — Fetching songs, controlling playback.
- *(Local host for testing song fetching)*

---

## 📂 Project Structure

├──index.html # Main HTML file
├──style.css # Main styling
├── utility.css # Utility & helper classes
├── script.js # JavaScript logic for song fetching & playback
├── Songs/ # Folder containing .mp3 files (not included in repo)
└── README.md # Documentation


---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
git clone https://github.com/ankithbalda/Leo-s-music.git


### 2️⃣ Add Your Songs
Place your `.mp3` files in a folder named **`Songs`** inside the project root.

### 3️⃣ Run Locally
1. You need to serve files locally (since `fetch()` from `file://` won't work in browsers).
2. Use VS Code **Live Server** extension or Python's HTTP server:
Python 3
python -m http.server

Then open:
http://127.0.0.1:5500/index.html


---

## 🌟 Customization

- Swap `Songs/` contents with your own tracks.
- Change layout/colors in `style.css`.
- Modify `script.js` for custom playlist or player features (e.g., shuffle, repeat).
- Add album covers or metadata fetching.

---

## 📄 License

This project is released under the **MIT License** — you may use and modify it freely.

---

## 👤 Author

**Name:** Ankith Balda

**Email:** ankithbalda.wk@gmail.com

**LinkedIn:** https://www.linkedin.com/in/ankith-balda-812177278/

**GitHub:** https://github.com/ankithbalda

---

💡 *A simple music player project to explore DOM manipulation, HTML5 audio, and dynamic UI rendering in JavaScript.*
