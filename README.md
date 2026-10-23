# Dewen <br> <sub style="font-size: 0.5em; font-weight: normal;">A subscription-free and local-first take on productivity software</sub>

<p align="left">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
  <img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="NPM" />
  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
  <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" alt="Netlify" />
  <img src="https://img.shields.io/badge/tauri-%2324C8DB.svg?style=for-the-badge&logo=tauri&logoColor=%23FFFFFF" alt="Tauri" />
</p>

<img width="3186" height="1998" alt="image" src="https://github.com/user-attachments/assets/79190dd1-4ea7-4b2a-80fb-e5d8fd41b012" />
<h2><a href="https://dewen.netlify.app">Check out my project here</a></h2>

## Purpose
Most task and project management websites these days force a subscription on you, obligate you to use AI, and use your data to train models without your consent. 

To master full-stack development, native browser APIs, and client-side database management, I built my own solution from scratch. Dewen is completely stripped of these modern issues while delivering a clean interface, local-first privacy, and useful productivity tools.

---
## Materials
- Frontend: HTML, CSS, and TypeScript (core web technologies for building the skeleton and skin, and TypeScript for the functionality with extra static typing and labeling)
- Framework: None (deliberately chose none to learn how the website interacts with DOM and browser APIs (and it's also painful to convert to 😂))
- Backend: Python (the obvious and simple choice for building the backend and agentic features)
- Database: IndexedDB (chose this client-side database to keep data on the user's device instead of being sent to a random server)
- Version Control: Git and GitHub
- Desktop Wrapper: Tauri (the lightweight champion for wrapping a website into a functional, fast, and lightweight desktop app, perfect choice for Dewen)
---
## Features

### Current
- Task Management - Create, edit, and delete tasks instantly
- Focus Timer - Track your sessions using the Pomodoro method
- Quick Notes - Mini notes to help you jot down ideas quickly
- Calendar - Uses FullCalendar.js to display your tasks in a calendar view
- Activity Panel - Track your activities throughout the app, whether that's task addition or starting a focus session
- Search/Command Bar - Search your tasks and notes or run commands to control your workflow (`:h` in the bar for commands)
- Agents - Turn this on to help assist you in your workflow, or turn it off if you don't feel like it
### Coming Soon
- [ ] Calendar Tab - Gives the calendar its own section to help you manage your schedules more efficiently
- [ ] Automation - If AI is enabled, this lets users create custom automations in a simple interface
- [X] Desktop App - Gives Dewen a functional desktop version for users (macOS complete so far)
- [ ] Landing Page - A functional landing page to add a Call-To-Action for Dewen
- [ ] Collaboration - Utilizes CRDTs to sync edits and add collaboration to a Dewen vault
- [ ] Security - Speaking of vaults, I want to add a security layer to Dewen (Master Password, Vaults, Encryption, and more)
- [ ] Self-Hosted Version - Gives users the ability to self-host Dewen on a separate device
- [ ] Projects - Gives users the ability to organize and group tasks and notes into a project
- [ ] Congressional App Challenge - Crush the 2026 CAC with this being my submission for PA-15
---
## Architecture
Dewen follows a simple architecture to fully operate locally on your device:
- User UI and Tasks - Handled and rendered by TypeScript and the DOM
- Persistence and Saving - All of your tasks, notes, activities, settings, and more are saved with the browser- or Tauri-native IndexedDB
- Local Server - Uses Python and Uvicorn to run a fast and lightweight server in the background to handle agentic actions and automations without cloud dependencies

---
## Meet the Agents
When turned on in the settings, Dewen lets you use agents to perform specific tasks:
- [X] Planner Agent - Helps you plan and organize your tasks
- [X] Researcher Agent - Uses your Tavily API key to search online for information
- [X] Prioritizer Agent - Helps you prioritize what needs the most attention
- [ ] Organizer Agent - Helps you organize your tasks and notes

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
pip install uvicorn fastapi  # Install server requirements
uvicorn
```

3. Open a new terminal window and use `npm` to start Vite
```bash
npm install
npm run dev
```

4. Vite automatically opens the local site in your browser

---
## Contributing

Contributions are welcome! Whether you want to fix a bug, optimize the custom DOM code, or help implement the CRDT collaboration layer:

1. Fork the project
2. Create your contribution branch (`git checkout -b feature/contribution`)
3. Commit your changes (`git commit -m 'Added some contribution'`)
4. Push to the branch (`git push origin feature/contribution`)
5. Open a pull request

---
## AI Usage Disclosure
I used AI as a collaborative learning partner to help me with features, layout, and debugging, while still retaining the information the AI creates. Even though I used AI, this is not a fully "vibe-coded" or AI-generated app.

---
## Download Desktop App

Get the native desktop experience for **Dewen** with offline-capable support and a dedicated interface window.

| Platform | Download |
| :--- | :--- |
| **macOS** (`.dmg`) | [📥 Download for Mac](https://github.com/JaxTheDevG008/Dewen/releases/download/v1.0.0/Dewen_0.1.0_aarch64.dmg) |
| **Windows** (`.exe`) | _Coming Soon_ |
| **Linux** (`.deb`) | _Coming Soon_ |

### A Quick Heads Up on macOS Installation
Because this is an independent, open-source application bundle, macOS may display a warning stating the app is "damaged" on your first launch. This is standard browser quarantine behavior. To bypass this restriction instantly in one step:

1. Drag **Dewen** into your `/Applications` folder.
2. Open your Terminal and run this single command:
   ```bash
   sudo xattr -cr /Applications/Dewen.app
   ```
3. Type your Mac screen-lock password when prompted, press **Enter**, and launch the app!

---
## License
This project utilizes the MIT License for distribution. To learn more, view [LICENSE](LICENSE).
