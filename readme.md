# 🎬 Netflix Clone (React + TMDB)

A sleek and responsive **Netflix-inspired web app** built using **React**, **Axios**, and **TMDB API**. This project replicates the basic layout and functionality of Netflix with dynamic movie rows, a featured banner, and interactive poster displays.

🔗 **[Live Demo](https://anit-george.github.io/netflix_clone_1/)**

---

## 📌 Features

- 🔥 Dynamic banner showing a random trending movie
- 🎞 Scrollable horizontal rows like Netflix (Trending, Originals, Action, etc.)
- 🖼 Movie posters with hover zoom effects
- ⚙️ Axios for API calls
- 📱 Responsive design across devices

---

## 🛠 Tech Stack

- **Frontend:** React.js (via Create React App)
- **Styling:** CSS3
- **API:** TMDB (The Movie Database)
- **HTTP Client:** Axios
- **Deployment:** GitHub Pages

---

## 📂 Project Structure

```
netflix_clone_1/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── Banner.js
│   ├── RowPost.js
│   ├── axios.js
│   ├── Constants/
│   │   └── Constants.js
│   ├── assets/
│   └── styles/
└── package.json
```

---

## ⚙️ Getting Started Locally

### Clone and Run:
```bash
git clone https://github.com/Anit-George/netflix_clone_1.git
cd netflix_clone_1
npm install
npm start
```

---

## 🔑 TMDB API Setup

1. Sign up at [TMDB](https://www.themoviedb.org/)
2. Go to API settings → create an API key
3. Replace the placeholder key in `Constants.js`:
```js
export const API_KEY = "your_api_key_here";
```

---

## 💡 Future Enhancements

- ▶️ Add trailer previews via YouTube API
- 🔍 Implement movie search functionality
- 🔐 Add login functionality with Firebase
- 🧠 Use Redux/Context API for global state management

---

## 🙋‍♂️ Author

- **Anit George**  
🔗 [GitHub](https://github.com/Anit-George)

---
