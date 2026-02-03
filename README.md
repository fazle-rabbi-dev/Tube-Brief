<div align="center">
  <img width="15%" src="/public/logo.png" alt="TubeBrief - Logo" />
  <h1>✂️ TubeBrief</h1>
  <p>
    A modern, elegant YouTube video summarizer — powered by AI.
  </p>
</div>

## 🔭 Overview

**TubeBrief** is a web app that helps users quickly generate summaries of any public YouTube video. It fetches video transcripts using a Transcript API (via RapidAPI) and then uses **Gemini AI** to generate a concise, readable summary. All summaries are saved into the database, so you can browse previous summaries anytime.

The goal is simple: consume valuable video content in less time, with less cognitive load.

## Live Demo 🎉

- Explore the live version of **TubeBrief**:
   - _link goes here_

## Project Created At

- 📅 December 2025

## 🎯 Why I Built This

- To save time by consuming educational YouTube videos without watching the full video
- To improve my overall productivity
- Because I love building software that makes life easier and truly helps people.

This is a tool I personally use on a regular basis.

## Key Features

- 🔐 Secure authentication with **Clerk** — saves summary history in the database
- 🌙 Dark & Light mode support for eye comfort
- 🤖 AI-powered summaries using **Gemini**, presented in a clean and focused UI
- 📊 Dashboard with recent summaries and usage statistics
- ⚙️ Settings to manage API keys (stored only in your browser)
- 🌍 Multi-language support — generate summaries in any language

## 📸 Screenshots

<div align="center">
<img width="48%" src="/public/screenshots/hero.png" />
<img width="48%" src="/public/screenshots/recent.png" />
<img width="48%" src="/public/screenshots/settings.png" />
<img width="48%" src="/public/screenshots/details.png" />
</div>

## 🛠️ Tech Stack

- TypeScript
- Next.js 16 (App Router with CacheComponents ~ PPR)
- Clerk
- Tailwind CSS
- shadcn/ui
- MongoDB
- React Hook Form

## 🏗️ Project Structure

```txt
src
├── app
│   ├── (private)        # Private routes
│   ├── (public)         # Public routes
│   ├── api
│   │   └── webhooks
│   │       └── clerk
│   │           └── register
│   │               └── route.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── not-found.tsx
├── components
│   ├── private          # Components only for private routes
│   ├── shared           # Shared/common components used across the app
│   ├── ui               # shadcn UI components
│   └── core             # Miscellaneous/core components
├── lib                  # Server actions, helpers, and utilities
│   ├── actions
│   │   └── summary.action.ts
│   ├── api
│   │   ├── getSummary.ts
│   │   └── getTranscript.ts
│   ├── constants
│   │   ├── METADATA.ts
│   │   └── index.ts
│   ├── database
│   │   ├── connect-db.ts
│   │   ├── user.model.ts
│   │   └── video-summary.model.ts
│   └── utils
│       └── index.ts
├── mdx-components.tsx
└── proxy.ts
```

## ⚙️ Installation & Setup

```bash
# clone the repository
git clone https://github.com/fazle-rabbi-dev/tube-brief.git

# move into the project directory
cd tube-brief

# install dependencies
npm install

# rename the sample environment file
# .env.local.example -> .env.local
# and fill in your own credentials

# run the app locally
npm run dev
```

## 🤝 Contribution

Contributions are welcome and appreciated!  
If you have ideas to improve this project, feel free to get involved.

### How You Can Contribute

- 🐞 Report bugs or unexpected behavior
- 💡 Suggest new features or improvements
- 🛠️ Submit pull requests for fixes or enhancements

### Contribution Workflow

1. Fork the repository
2. Create a new branch (`feature/your-feature-name`)
3. Make your changes and commit with clear messages
4. Push to your fork
5. Open a pull request with a brief explanation

Please make sure your code follows the existing style and conventions.

---

> Even small contributions matter. If this project helped you, consider giving it a ⭐️
