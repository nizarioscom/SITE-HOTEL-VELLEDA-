# 🚀 Quick Start Guide - Hôtel Velleda

## Step 1: Frontend Setup (3 minutes)

```bash
cd frontend
npm install
npm run dev
```

✅ Open http://localhost:5173 in your browser

## Step 2: Backend Setup (2 minutes)

Open a new terminal:

```bash
cd backend
npm install
npm start
```

✅ Backend running on http://localhost:5000

## Step 3: Test Everything

- ✅ Navigate through all sections
- ✅ Click "Réserver" buttons (opens WhatsApp)
- ✅ Fill out and submit contact form
- ✅ Check console in backend terminal for booking data

---

## 📋 What You Get

### Homepage Sections (Top to Bottom)
1. **Navbar** - Navigation with booking button
2. **Hero** - Beautiful welcome section
3. **Features** - 4 key benefits with icons
4. **Rooms** - Interactive room carousel
5. **Location** - Map and location info
6. **Contact Form** - Booking request
7. **Footer** - Contact details

### Features Included
✅ Smooth animations  
✅ Responsive design  
✅ Google Maps integration  
✅ WhatsApp booking  
✅ Contact form with API  
✅ Beautiful UI  
✅ French content  

---

## 🎨 Customization

### Change Hotel Info
Edit these files:
- `frontend/src/components/Navbar.jsx` (phone number)
- `frontend/src/components/Hero.jsx` (headline)
- `frontend/src/components/LocationSection.jsx` (address, maps)
- `frontend/src/components/Footer.jsx` (contact)

### Change Colors
Edit `frontend/tailwind.config.js`:
```javascript
'hotel-gold': '#D4AF37',  // Change this to your color
'hotel-dark': '#1A1A1A',
// etc...
```

### Add Images
1. Place images in `frontend/src/assets/`
2. Import and use in components:
```javascript
import heroImage from './assets/hero.jpg'
```

---

## 🔧 Common Issues

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Backend not working?**
- Check if running on port 5000
- Check CORS settings in `backend/server.js`

**Forms not submitting?**
- Make sure backend is running
- Check browser console for errors

---

## 📱 View on Mobile

### Method 1: Device on Same Network
1. Find your computer's IP: `ipconfig` (Windows)
2. On mobile: Visit `http://YOUR_IP:5173`

### Method 2: Browser DevTools
Press `F12` → Device toolbar (top-left)

---

## 🌐 Deploy to Production

### Frontend (Vercel - Free)
```bash
npm install -g vercel
vercel
# Follow prompts
```

### Backend (Railway - Free)
1. Go to railway.app
2. Connect GitHub repo
3. Set environment variables
4. Deploy

---

## 📞 Need Help?

- Check `DOCUMENTATION.md` for detailed info
- Review component files for code examples
- Check frontend/README.md or backend/README.md

---

**Everything is set up and ready to go!** 🎉
