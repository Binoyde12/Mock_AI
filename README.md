# Mock_AI 🎤🤖

Mock_AI is an AI-powered mock interview platform that simulates real-world interview experiences. It helps job seekers prepare confidently by generating questions based on job roles and analyzing user responses for improvement.

## 🔥 Live Demo

🚀 [Deployed on Firebase](https://ai-mock-interview-2f5a4.web.app/)  

---

## 🧰 Tech Stack

- **Frontend**: React + TypeScript
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Deployment**: Firebase Hosting

---

## 🚀 Getting Started

To run the project locally:

```bash
git clone https://github.com/Binoyde12/Mock_AI.git
cd Mock_AI
pnpm install
pnpm dev
```

Visit `http://localhost:5173` to view it in your browser.

---

## 🛎️ Firebase Deployment

To deploy the project to Firebase:

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase in your project:
```bash
firebase init
```
Choose **Hosting**, then select your Firebase project and set the `dist` folder as the public directory (update if different). Configure it as a single-page app when prompted.

4. Build your project:
```bash
pnpm build
```

5. Deploy:
```bash
firebase deploy
```

---

## 📁 Project Structure

```
Mock_AI/
├── public/         # Static assets
├── src/
│   ├── components/ # Reusable UI components
│   ├── pages/      # Main pages/screens
│   ├── App.tsx     # App root
│   └── main.tsx    # Entry point
├── tailwind.config.ts
├── index.html
├── vite.config.ts
└── pnpm-lock.yaml
```

---

## 📜 Scripts

| Command           | Description                      |
|------------------|----------------------------------|
| `pnpm dev`       | Start local dev server           |
| `pnpm build`     | Build the app for production     |
| `pnpm preview`   | Preview the production build     |
| `pnpm lint`      | Run ESLint checks                |

---

## 🤝 Contributing

1. Fork the repo
2. Create your branch: `git checkout -b feature/awesome-feature`
3. Commit your changes: `git commit -m "Add awesome feature"`
4. Push it: `git push origin feature/awesome-feature`
5. Open a Pull Request 🚀

---

## 🪪 License

This project is licensed under the MIT License.

