# 🎓 HÔTEL VELLEDA - MASTER SETUP GUIDE

## 📚 Your Complete Roadmap

This guide will take you from zero to a fully functional hotel website in **10 minutes**.

---

## 🎯 What You're Getting

✅ Complete React website  
✅ Express.js backend API  
✅ Booking system  
✅ Contact forms  
✅ Google Maps  
✅ WhatsApp integration  
✅ Responsive design  
✅ Beautiful animations  
✅ Production-ready code  
✅ Complete documentation  

---

## ⏱️ 10-Minute Quick Start

### Minute 1: Prerequisites
```bash
# Verify you have Node.js installed
node --version      # Should show v16 or higher
npm --version       # Should show v8 or higher
```

If not installed, get Node.js from: https://nodejs.org

### Minutes 2-3: Install Dependencies
```bash
# Terminal 1
cd frontend
npm install

# Terminal 2 (new terminal window)
cd backend
npm install
```

### Minute 4: Setup Backend
```bash
cd backend
copy .env.example .env
```

### Minutes 5-6: Start Servers
```bash
# Terminal 1 - Keep open
cd backend
npm start

# Terminal 2 - Keep open
cd frontend
npm run dev
```

### Minutes 7-10: Open & Test
```
1. Open browser
2. Visit: http://localhost:5173
3. Test each section
4. Fill contact form
5. Click "Réserver" button
6. Check backend console for logs
```

✅ **Done! You're live!**

---

## 📖 Next: Read Documentation

After setup, read in this order:

### 1. **README.md** (5 min)
- Project overview
- What's included
- Basic information

### 2. **PROJECT_COMPLETION_SUMMARY.md** (5 min)
- What was created
- Current status
- Next steps

### 3. **VISUAL_OVERVIEW.md** (10 min)
- Design system
- Layout breakdown
- Component structure

### 4. **DOCUMENTATION.md** (20 min)
- Detailed component info
- API documentation
- Advanced features

### 5. **INDEX.md** (Anytime)
- Quick navigation
- File locations
- When you need something

---

## 🎨 Customizing Your Site

### Change Hotel Information

**1. Phone Number**
```
File: frontend/src/components/Navbar.jsx
Search for: +212537769531
Replace with: your number
```

**2. Address**
```
File: frontend/src/components/LocationSection.jsx
Update: Address in the location card
```

**3. Room Details**
```
File: frontend/src/components/RoomsSection.jsx
Update: Room names, prices, descriptions
```

**4. Colors**
```
File: frontend/tailwind.config.js
Update: Color values in the colors section
```

### Add Images

1. Create image files (JPG, PNG)
2. Put in: `frontend/src/assets/`
3. Import in component:
   ```javascript
   import heroImage from './assets/hotel.jpg'
   ```
4. Use in JSX:
   ```javascript
   <img src={heroImage} alt="Hotel" />
   ```

---

## 🔧 Common Customizations

### Change Button Colors
Edit `frontend/tailwind.config.js`:
```javascript
'hotel-gold': '#D4AF37'  // Change to your color
```

### Change Font
Edit `frontend/tailwind.config.js`:
```javascript
fontFamily: {
  'serif': ['Your Font', 'serif'],
  'sans': ['Your Font', 'sans-serif'],
}
```

### Add New Section
1. Create file: `frontend/src/components/NewSection.jsx`
2. Import in `frontend/src/App.jsx`
3. Add to render
4. Update navbar links

### Add Room Type
Edit `frontend/src/components/RoomsSection.jsx`:
```javascript
const rooms = [
  // Existing rooms...
  {
    id: 4,
    name: 'Your New Room',
    // ... add other properties
  }
]
```

---

## 🚀 Deploy Your Site

### Option 1: Vercel (Frontend - Easiest)

1. Go to: https://vercel.com
2. Click "New Project"
3. Select your GitHub repo
4. Click "Deploy"
5. Done! (Auto-deploys on every push)

### Option 2: Railway (Backend)

1. Go to: https://railway.app
2. Create new project
3. Connect GitHub
4. Add environment variables from `.env`
5. Deploy
6. Copy the public URL

### Update Frontend API URL
After deploying backend, update in `frontend/src/components/ContactForm.jsx`:
```javascript
const response = await axios.post(
  'https://your-railway-url/api/contact',  // Change this
  formData
)
```

---

## 🎓 File Structure Explained

```
HOTEL VELLDA/
│
├── 📁 frontend/                 ← Your main website
│   ├── src/
│   │   ├── components/          ← 7 React components
│   │   ├── assets/              ← Images go here
│   │   ├── App.jsx              ← Main app component
│   │   ├── main.jsx             ← Entry point
│   │   └── index.css            ← Global styles
│   │
│   ├── Configuration files      ← Don't touch unless you know what you're doing
│   └── package.json             ← Your dependencies
│
├── 📁 backend/                  ← Your API server
│   ├── server.js                ← API routes
│   ├── .env                     ← Secret configuration (DO NOT COMMIT)
│   └── package.json             ← Dependencies
│
└── 📁 Documentation/            ← Guides (you are here)
```

---

## 🐛 Troubleshooting

### Problem: "Port 5173 already in use"
```bash
# Use a different port
cd frontend
npm run dev -- --port 3000
```

### Problem: "Cannot find module"
```bash
# Reinstall dependencies
npm install
```

### Problem: "Backend not responding"
```bash
# Make sure backend is running in another terminal
cd backend
npm start
```

### Problem: "Form not submitting"
1. Check backend console for errors
2. Check browser console (F12) for errors
3. Make sure both servers are running

### Problem: "CORS error"
Make sure backend is running. CORS is already configured.

---

## ✅ Verification Checklist

After setup, verify everything:

- [ ] Backend runs without errors
- [ ] Frontend runs without errors
- [ ] All pages load
- [ ] Navbar links work
- [ ] Contact form submits
- [ ] WhatsApp buttons open WhatsApp
- [ ] Google Maps displays
- [ ] Animations work
- [ ] Mobile layout works
- [ ] No console errors

---

## 📊 Component Overview

| Component | Purpose | Location |
|-----------|---------|----------|
| **Navbar** | Navigation | `components/Navbar.jsx` |
| **Hero** | Welcome section | `components/Hero.jsx` |
| **Features** | 4 benefits | `components/FeaturesGrid.jsx` |
| **Rooms** | Room showcase | `components/RoomsSection.jsx` |
| **Location** | Maps & info | `components/LocationSection.jsx` |
| **Contact** | Booking form | `components/ContactForm.jsx` |
| **Footer** | Site footer | `components/Footer.jsx` |

---

## 🔌 API Quick Reference

### Backend Routes

```
GET  /api/health
     Response: { message: 'Server is running' }

POST /api/contact
     Body: {
       name: "string (required)",
       phone: "string (required)",
       email: "string",
       checkIn: "date",
       checkOut: "date",
       message: "string"
     }
     Response: {
       success: true,
       message: "Votre demande a été reçue...",
       bookingId: "VELLEDA-..."
     }
```

---

## 💡 Pro Tips

1. **Use VS Code** - Free editor from microsoft.com
2. **Install React DevTools extension** - Debug React components
3. **Use browser DevTools** (F12) - Check console for errors
4. **Test on mobile** - Press F12 → Device toolbar
5. **Use Git** - Save your changes: `git commit -m "message"`
6. **Read error messages carefully** - They tell you what's wrong

---

## 🎯 Next Steps

### Today
- [ ] Complete 10-minute setup
- [ ] Test all functionality
- [ ] Customize hotel info

### This Week
- [ ] Add your hotel images
- [ ] Update room descriptions
- [ ] Test on mobile devices

### This Month
- [ ] Deploy to production
- [ ] Monitor with analytics
- [ ] Collect feedback

### Future
- [ ] Add database
- [ ] Email notifications
- [ ] Payment processing
- [ ] Admin dashboard

---

## 📞 Support Resources

### Built-in Documentation
- `README.md` - Overview
- `QUICK_START.md` - Fast setup
- `DOCUMENTATION.md` - Detailed guide
- `VISUAL_OVERVIEW.md` - Design reference
- `COMMAND_PALETTE.md` - Copy-paste commands
- `INDEX.md` - Navigation

### External Help
- React docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Express.js: https://expressjs.com
- Vite: https://vitejs.dev

### In Code
- Every component has comments
- Error messages are helpful
- Browser console shows issues

---

## 🎉 You're Ready!

Everything is set up and documented. You have:

✅ Complete website code  
✅ Working API  
✅ Professional design  
✅ Comprehensive documentation  
✅ Ready to customize  
✅ Ready to deploy  

---

## 📋 Your Tools

You have everything to:
- ✅ Modify website
- ✅ Add features
- ✅ Deploy online
- ✅ Manage bookings
- ✅ Update content

---

## 🚀 Start Developing!

```bash
# One-time setup (already done)
cd frontend && npm install
cd ../backend && npm install

# Every development session
# Terminal 1
cd backend && npm start

# Terminal 2
cd frontend && npm run dev

# Then open: http://localhost:5173
```

---

## ❓ Common Questions

**Q: Where do I add my images?**
A: `frontend/src/assets/` - Then import in components

**Q: How do I change the phone number?**
A: Edit `frontend/src/components/Navbar.jsx`

**Q: How do I add a new page?**
A: Create component in `src/components/`, import in App.jsx

**Q: How do I deploy?**
A: Frontend to Vercel, Backend to Railway (see Deployment section)

**Q: Will it work on my phone?**
A: Yes! Fully responsive - test with F12 Device Toolbar

**Q: Can I add more rooms?**
A: Yes! Edit the rooms array in `RoomsSection.jsx`

---

## 🎊 Final Words

This is a **production-ready** website. Every component is tested, documented, and ready to use.

Start with the 10-minute setup, then explore the documentation when you need help.

**You've got this! 🚀**

---

**Created**: November 23, 2025  
**Status**: ✅ Complete & Ready  
**Next Step**: Run `npm install` in both folders  

**Let's go! 🏨**
