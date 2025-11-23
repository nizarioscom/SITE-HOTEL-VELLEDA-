# Hôtel Velleda - Complete Website

A modern, high-performance website for Hôtel Velleda in Rabat, Morocco.

## 📂 Project Structure

```
HOTEL VELLDA/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── FeaturesGrid.jsx
│   │   │   ├── RoomsSection.jsx
│   │   │   ├── LocationSection.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   └── Footer.jsx
│   │   ├── assets/          # Images and media
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── tsconfig.json
│   ├── package.json
│   └── README.md
│
├── backend/                  # Node.js + Express backend
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   ├── .gitignore
│   └── README.md
│
└── README.md                 # This file

```

## 🚀 Quick Start

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
npm start
```

Server runs on `http://localhost:5000`

## 🎨 Design

- **Theme:** Urban Chic
- **Colors:** White, Warm Beige, Gold/Brass, Dark Footer
- **Typography:** Playfair Display (headings), Inter (body)
- **Animations:** Framer Motion (smooth scroll, parallax, fade-in effects)
- **Language:** French

## ✨ Features

- ✅ Fully responsive design
- ✅ Smooth animations and transitions
- ✅ Dynamic room carousel
- ✅ Contact/booking form with API integration
- ✅ Google Maps integration
- ✅ WhatsApp booking integration
- ✅ Dark mode footer
- ✅ Transparent navbar with scroll effect
- ✅ SEO optimized

## 📋 Components

1. **Navbar** - Transparent turning solid on scroll with mobile menu
2. **Hero** - Full-screen with parallax background
3. **Features Grid** - 4 icon features (Train, Wi-Fi, Sun, Clock)
4. **Rooms Section** - Interactive carousel with 3 room types
5. **Location Section** - Google Maps + contact info
6. **Contact Form** - Booking request form with API integration
7. **Footer** - Contact info and quick links

## 🔗 Hotel Information

- **Name:** Hôtel Velleda
- **Address:** 106 Avenue Allal Ben Abdellah, Rabat, Morocco
- **Phone:** +212 (537) 769-531
- **Location:** Quartier Hassan, 5 min from Rabat Ville Station

## 📦 Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- Axios

### Backend
- Node.js
- Express.js
- CORS
- Dotenv

## 🔧 API Endpoints

### POST /api/contact
Handles booking requests

### GET /api/health
Server health check

## 📝 License

All rights reserved © Hôtel Velleda

## 👨‍💼 Development

Created as a complete, modern, and high-performance website for Hôtel Velleda.

For questions or issues, contact the development team.
