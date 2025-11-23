# 💻 COMMAND PALETTE - Copy & Paste Commands

## 🚀 Setup & Installation

### Install Everything
```bash
cd frontend && npm install && cd ../backend && npm install
```

### Setup Backend Environment
```bash
cd backend && copy .env.example .env
```

---

## 🎬 Running the Project

### Start Both (Requires 2 Terminals)

**Terminal 1 - Backend:**
```bash
cd backend && npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend && npm run dev
```

### Start Backend Only
```bash
cd backend && npm start
```

### Start Frontend Only
```bash
cd frontend && npm run dev
```

### Start Frontend with Different Port
```bash
cd frontend && npm run dev -- --port 3000
```

### Start Backend with Different Port
```bash
cd backend && PORT=5001 npm start
```

---

## 🏗️ Build for Production

### Build Frontend
```bash
cd frontend && npm run build
```

### Preview Production Build
```bash
cd frontend && npm run preview
```

---

## 📦 Dependency Management

### Install All Frontend Dependencies
```bash
cd frontend && npm install
```

### Install All Backend Dependencies
```bash
cd backend && npm install
```

### Add New Frontend Package
```bash
cd frontend && npm install package-name
```

### Add New Backend Package
```bash
cd backend && npm install package-name
```

### Update All Dependencies
```bash
cd frontend && npm update && cd ../backend && npm update
```

---

## 🧹 Cleanup Commands

### Clear Node Modules & Reinstall (Frontend)
```bash
cd frontend && rm -r node_modules package-lock.json && npm install
```

### Clear Node Modules & Reinstall (Backend)
```bash
cd backend && rm -r node_modules package-lock.json && npm install
```

### Clear Frontend Build Cache
```bash
cd frontend && rm -r node_modules/.vite
```

---

## 🔍 Debugging Commands

### Check Frontend Port 5173
```bash
netstat -ano | findstr :5173
```

### Check Backend Port 5000
```bash
netstat -ano | findstr :5000
```

### Kill Process Using Port 5173
```bash
taskkill /PID [PID_NUMBER] /F
```

### Kill Process Using Port 5000
```bash
taskkill /PID [PID_NUMBER] /F
```

---

## 📝 Editing Key Files

### View Hotel Phone (Windows)
```bash
type frontend\src\components\Navbar.jsx | findstr "537769531"
```

### View API Routes (Windows)
```bash
type backend\server.js | findstr "app\."
```

### View Colors Config (Windows)
```bash
type frontend\tailwind.config.js
```

---

## 🌐 Web Addresses

### Frontend URL
```
http://localhost:5173
```

### Backend Health Check
```
curl http://localhost:5000/api/health
```

### Mobile Testing (Find IP)
```bash
ipconfig
```

Then visit: `http://YOUR_IP:5173`

---

## 📄 Log & Output Commands

### Check Backend Logs
The console where you ran `npm start` shows logs

### Check Frontend Build Output
```bash
cd frontend && npm run build 2>&1
```

### Test API Endpoint (GET)
```bash
curl http://localhost:5000/api/health
```

### Test API Endpoint (POST)
```bash
curl -X POST http://localhost:5000/api/contact ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Test\",\"phone\":\"+212612345678\"}"
```

---

## 🚀 Deployment Commands

### Deploy Frontend to Vercel
```bash
npm i -g vercel
vercel
```

### Build Frontend for Production
```bash
cd frontend && npm run build
```

### Check Frontend Build Size
```bash
cd frontend && npm run build && echo "Build complete"
```

---

## 🔧 Development Tools

### Format Code with Prettier (if installed)
```bash
cd frontend && npm run format
```

### Lint Code (if installed)
```bash
cd frontend && npm run lint
```

---

## 📊 Project Info Commands

### Frontend Version Info
```bash
cd frontend && npm list
```

### Backend Version Info
```bash
cd backend && npm list
```

### Node & npm Versions
```bash
node --version && npm --version
```

### Check Git Status
```bash
git status
```

---

## 🎯 Quick Navigation

### Go to Frontend
```bash
cd frontend
```

### Go to Backend
```bash
cd backend
```

### Go to Project Root
```bash
cd ..
```

### Go to Components
```bash
cd frontend/src/components
```

---

## 📖 View Documentation

### View README (Windows)
```bash
type README.md | more
```

### View Quick Start (Windows)
```bash
type QUICK_START.md | more
```

### View Documentation (Windows)
```bash
type DOCUMENTATION.md | more
```

---

## 🔌 Environment Setup

### Create Backend .env
```bash
cd backend && copy .env.example .env
```

### View Backend .env
```bash
cd backend && type .env
```

### Edit Backend .env (Notepad)
```bash
cd backend && notepad .env
```

---

## 🎨 Color Theme Commands

### Search for Gold Color
```bash
findstr /r "D4AF37" frontend\tailwind.config.js
```

### Search for All Colors
```bash
findstr "hotel-" frontend\tailwind.config.js
```

---

## 🌍 Network Commands

### Check Internet Connection
```bash
ping google.com
```

### Test Backend Connectivity
```bash
ping localhost
```

### Check Local IP
```bash
ipconfig | findstr IPv4
```

---

## 📱 Mobile Testing

### Access from Mobile on Same Network
1. Get IP: `ipconfig` (look for IPv4)
2. On mobile: Visit `http://YOUR_IP:5173`

### Test Responsive (DevTools)
Press `F12` → Toggle device toolbar (top-left)

---

## 🔐 Security Check

### Check .env is in .gitignore
```bash
type backend\.gitignore | findstr ".env"
```

### Remove Accidental Files from Git
```bash
git rm --cached backend\.env
```

---

## 💾 Backup Commands

### Backup Frontend
```bash
xcopy frontend backup\frontend /E /I
```

### Backup Backend
```bash
xcopy backend backup\backend /E /I
```

### Backup Everything
```bash
xcopy . backup /E /I /EXCLUDE:exclude.txt
```

---

## 🧪 Testing Commands

### Test Contact Form API
```bash
curl -X POST http://localhost:5000/api/contact ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"John\",\"phone\":\"+212612345678\",\"email\":\"test@test.com\",\"checkIn\":\"2025-12-01\",\"checkOut\":\"2025-12-05\",\"message\":\"Test booking\"}"
```

---

## 📦 Final Checklist Commands

### Verify Node Installation
```bash
node --version
```

### Verify npm Installation
```bash
npm --version
```

### Verify Frontend Setup
```bash
cd frontend && npm list react react-dom vite
```

### Verify Backend Setup
```bash
cd backend && npm list express cors
```

---

## 🎉 Ready to Go!

All commands you need are here. Copy & paste as needed!

**Happy development! 🚀**

---

**Last Updated**: November 23, 2025  
**Status**: ✅ Ready to Use
