# Dewen <br> <sub style="font-size: 0.5em; font-weight: normal;">A subscription-free and private take on productivity software</sub>

[Check out my project here](https://dewen.netlify.app)
## Purpose
Most task and project management websites these days force a subscription on you, obligate you to use AI, and use your data to train models without your consent. 

To learn frontend, backend, full-stack, APIs, and client-side database management, I thought that it would be a good idea to build my own from scratch, completely stripped of these modern problems while delivering a clean interface, local-first privacy, and useful productivity tools.

---
## Materials
- Frontend: HTML, CSS, and TypeScript
- Framework: None (React soon)
- Backend: Python
- Database: LocalStorage
- Version Control: Git and GitHub
---
## Features

### Current
- Task Management - Create, edit, and delete tasks instantly
- Focus Timer - Track your sessions using the Pomodoro method
- Quick Notes - Mini notes to help you jot down ideas quickly
- Calendar - Uses FullCalendar.js to display your tasks in a calendar view
- Activity Panel - Track your activities throughout the app, whether that's task addition or starting a focus session
- Search/Command Bar - Search your tasks and notes or run commands to control your workflow (`:h` in the bar for commands)
### Coming Soon
- AI - Turn this on to help assist you in your workflow, or turn it off if you don't feel like it
- Calendar Tab - Gives the calendar its own section to help you manage your schedules more efficiently
- Automation - If AI is enabled, this lets users create custom automations in a simple interface
---
## Installation

### Prerequisites
- [Python 3.x](https://python.org)
- [Node.js](https://nodejs.org)

### Setup
1. Clone the repo
```bash
git clone https://github.com/JaxTheDevG008/Dewen
cd Dewen
```

2. Start the Python server
```bash
cd src/backend
uvicorn app:app --reload
```

3. Open a new terminal window and use `npm` to start Vite
```bash
npm install
npm run dev
```

4. Copy the link it provides, and paste it into your browser

---
## AI Usage
I used AI as a collaborative learning partner to help me with features, layout, and debugging, while still retaining the information the AI creates. Even though I used AI, this is not a fully "vibe-coded" or AI-generated app.

---
## License
This project utilizes the MIT License for distribution. To learn more, view [LICENSE](LICENSE).
