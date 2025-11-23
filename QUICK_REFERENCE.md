# 🏨 HÔTEL VELLEDA - QUICK REFERENCE CARD

## 🎯 Start Here (3 Steps)

### Step 1: Terminal 1 (Backend)
```bash
cd backend
npm install
npm start
# Shows: 🏨 Hôtel Velleda backend running on http://localhost:5000
```

### Step 2: Terminal 2 (Frontend)
```bash
cd frontend
npm install
npm run dev
# Shows: ➜ Local: http://localhost:5173/
```

### Step 3: Browser
```
Open: http://localhost:5173
```

✅ **You're live!**

---

## 📋 File Locations

### Need to Edit?

| What | Where |
|------|-------|
| Hotel phone | `frontend/src/components/Navbar.jsx` |
| Hotel address | `frontend/src/components/LocationSection.jsx` |
| Room info | `frontend/src/components/RoomsSection.jsx` |
| Hero text | `frontend/src/components/Hero.jsx` |
| Colors | `frontend/tailwind.config.js` |
| API routes | `backend/server.js` |

### Need to Add?

| What | Where |
|------|-------|
| Images | `frontend/src/assets/` |
| Components | `frontend/src/components/` |
| API routes | `backend/server.js` |
| Pages | `frontend/src/pages/` |

---

## 🚀 Common Commands

```bash
# Frontend
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build

# Backend
npm start          # Start production server
npm run dev        # Start with auto-reload
```

---

## 🎨 Colors (Change These in tailwind.config.js)

```
#FFFFFF    - White (background)
#F5E6D3    - Warm Beige (sections)
#D4AF37    - Gold (accents - CTA)
#1A1A1A    - Dark (text)
#0F0F0F    - Dark Footer
```

---

## 📱 Sections

1. **Navbar** - Navigation + Booking
2. **Hero** - Welcome message
3. **Features** - 4 key benefits
4. **Rooms** - Carousel (3 types)
5. **Location** - Map + info
6. **Contact** - Booking form
7. **Footer** - Links + contact

---

## 🔌 API Endpoints

```javascript
GET  /api/health          // Health check
POST /api/contact         // Booking request
```

### POST /api/contact Request
```json
{
  "name": "string (required)",
  "phone": "string (required)",
  "email": "string",
  "checkIn": "date",
  "checkOut": "date",
  "message": "string"
}
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 5173 in use | `npm run dev -- --port 3000` |
| Port 5000 in use | Change PORT in `.env` |
| Module not found | Run `npm install` |
| CORS error | Check backend is running |
| Form not submitting | Check backend console |

---

## 📚 Documentation Map

- **README.md** - Overview
- **QUICK_START.md** - 5-min setup
- **INSTALLATION_CHECKLIST.md** - Verify everything
- **DOCUMENTATION.md** - Full technical guide
- **VISUAL_OVERVIEW.md** - Design reference
- **INDEX.md** - Navigation guide

---

## 🏨 Hotel Info

```
Name:     Hôtel Velleda
Address:  106 Avenue Allal Ben Abdellah
         Quartier Hassan, Rabat
Phone:    +212 (537) 769-531
Hours:    24/7 Reception

Closest:  5 min to Rabat Ville Station
Special:  Sunny Terrace, Free Wi-Fi
```

---

## ✅ Pre-Deployment Checklist

- [ ] Install both frontend & backend
- [ ] Start both servers
- [ ] Test navigation
- [ ] Fill contact form
- [ ] Click booking buttons
- [ ] Check mobile layout
- [ ] Verify animations
- [ ] Test on different browser

---

## 🚀 Deploy

### Frontend (Vercel)
```bash
npm i -g vercel
vercel
```

### Backend (Railway)
1. Go to railway.app
2. Connect GitHub repo
3. Deploy

---

## 🎯 What's Included

✅ React app (Vite)  
✅ 7 components with animations  
✅ Express backend  
✅ Booking API  
✅ Contact form  
✅ Google Maps  
✅ WhatsApp integration  
✅ Responsive design  
✅ Complete documentation  
✅ Ready to deploy  

---

## 💡 Quick Tips

1. **Hot Reload**: Frontend reloads automatically during dev
2. **API Proxy**: Frontend automatically proxies to backend `/api`
3. **WhatsApp**: Click "Réserver" to open WhatsApp
4. **Mobile Test**: Press F12 → Device toolbar
5. **Colors**: Edit `tailwind.config.js` for theme changes

---

## 📱 Responsive Sizes

- **Mobile**: < 640px (1 column)
- **Tablet**: 640-1023px (2 columns)
- **Desktop**: > 1024px (3+ columns)

---

## 🎓 Component Skills Needed

- React Hooks (useState, useEffect)
- Tailwind CSS classes
- Framer Motion animations
- Express.js routing
- REST APIs (POST/GET)

---

## 🔄 Development Workflow

1. Edit component in `src/components/`
2. Save file
3. Frontend auto-refreshes in browser
4. See changes immediately
5. Test in browser DevTools (F12)

---

## 🌐 Tech Versions

- Node.js: v16+
- React: 18.2.0
- Vite: 4.3.9
- Tailwind: 3.3.0
- Express: 4.18.2

---

## 📞 Need Help?

1. Check **DOCUMENTATION.md** for details
2. Check **QUICK_START.md** for setup help
3. Review component code for examples
4. Check browser console (F12) for errors
5. Check backend console for API issues

---

## ✨ Features Overview

| Feature | Where | Status |
|---------|-------|--------|
| Navigation | Navbar | ✅ |
| Animations | All components | ✅ |
| Responsive | All sections | ✅ |
| Booking | Rooms, Buttons | ✅ |
| Contact Form | Form section | ✅ |
| Google Maps | Location | ✅ |
| WhatsApp | All buttons | ✅ |

---

## 🎉 You're Ready!

Everything is set up. Just:

1. Install dependencies
2. Start both servers
3. Open browser
4. Start developing!

**Good luck! 🚀**

---

**Created**: November 23, 2025  
**Status**: ✅ Ready to Use  
**Version**: 1.0.0  
