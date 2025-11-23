# ✅ Installation & Verification Checklist

## Pre-Installation
- [ ] Node.js v16+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Git installed (optional but recommended)

---

## Installation Steps

### Step 1: Frontend Installation
```bash
cd frontend
npm install
```
**Expected output**: "up to date, audited X packages"
- [ ] No errors during installation
- [ ] node_modules folder created

### Step 2: Backend Installation
```bash
cd ../backend
npm install
```
**Expected output**: "up to date, audited X packages"
- [ ] No errors during installation
- [ ] node_modules folder created

### Step 3: Environment Setup
```bash
cd backend
copy .env.example .env
```
**Or on Mac/Linux**:
```bash
cp .env.example .env
```
- [ ] `.env` file created in backend folder
- [ ] Contains: PORT=5000, NODE_ENV=development

---

## Running the Project

### Terminal 1: Start Backend
```bash
cd backend
npm start
```
**Expected output**: 
```
🏨 Hôtel Velleda backend running on http://localhost:5000
```
- [ ] No error messages
- [ ] Server shows "running"

### Terminal 2: Start Frontend
```bash
cd frontend
npm run dev
```
**Expected output**:
```
VITE v4.3.9  ready in XXX ms
➜  Local:   http://localhost:5173/
```
- [ ] No error messages
- [ ] Shows local URL

---

## Browser Verification

Open http://localhost:5173 and verify:

### Page Loads
- [ ] Page loads without errors
- [ ] Console shows no errors (F12)
- [ ] No "Cannot GET" or timeout messages

### Navigation
- [ ] Logo "Velleda" visible
- [ ] Navigation links present: Accueil, Chambres, Localisation, Contact
- [ ] "Réserver" button visible
- [ ] Mobile menu works (resize window)

### Hero Section
- [ ] Background image loads
- [ ] Headline visible: "Au Cœur de Rabat, L'Élégance à Prix Doux"
- [ ] Subtitle shows address
- [ ] Buttons present and clickable
- [ ] Scroll indicator animated

### Features Section
- [ ] 4 feature cards display
- [ ] Icons visible: Train, Wi-Fi, Sun, Clock
- [ ] Cards have hover effects
- [ ] Icons rotate on hover

### Rooms Section
- [ ] 3 room types display in carousel
- [ ] Navigation arrows work
- [ ] Indicators show current room
- [ ] Room details display correctly
- [ ] "Réserver cette Chambre" button works

### Location Section
- [ ] Google Maps displays
- [ ] Address card shows correctly
- [ ] Phone number clickable
- [ ] Benefits list displays

### Contact Form
- [ ] Form displays all fields
- [ ] Name field is required
- [ ] Phone field is required
- [ ] Form can be submitted
- [ ] Success/error messages appear

### Footer
- [ ] Footer displays at bottom
- [ ] Dark background visible
- [ ] Contact info present
- [ ] Social icons present

---

## Functionality Testing

### Booking Integration
1. Click "Réserver" button
2. [ ] WhatsApp opens with hotel phone
3. [ ] Message is pre-filled
4. [ ] Works on multiple buttons

### Contact Form
1. Fill form with test data:
   - Name: "Test User"
   - Phone: "+212612345678"
2. [ ] Click "Envoyer la Demande"
3. [ ] Success message appears
4. [ ] Backend console shows booking data
5. [ ] Booking ID generated

### Responsiveness
Resize browser window:
- [ ] Layout adapts properly
- [ ] Mobile menu works
- [ ] Text readable on all sizes
- [ ] No horizontal scrolling
- [ ] Images scale correctly

### Animations
- [ ] Fade-in animations on scroll
- [ ] Parallax effect on hero
- [ ] Smooth scroll to sections
- [ ] Hover effects on cards
- [ ] Button animations

---

## Backend Console Output

Check backend terminal for:

### Server Start
```
🏨 Hôtel Velleda backend running on http://localhost:5000
```

### After Form Submission
```
=== NEW BOOKING REQUEST ===
Name: Test User
Email: test@example.com
Phone: +212612345678
Check-in: 2025-12-01
Check-out: 2025-12-05
Message: test message
Timestamp: 2025-11-23T10:00:00.000Z
===========================
```

- [ ] Booking data logged correctly
- [ ] No errors in console

---

## Common Issues & Fixes

### Issue: "Cannot find module"
**Fix**: Run `npm install` in the affected folder

### Issue: "Port already in use"
**Fix**: 
- Frontend: `npm run dev -- --port 3000`
- Backend: Set `PORT=5001` in `.env`

### Issue: CORS errors
**Fix**: Check CORS settings in backend/server.js

### Issue: WhatsApp doesn't open
**Fix**: Check phone number format in component files

### Issue: Form doesn't submit
**Fix**: 
1. Check backend is running
2. Check console for network errors
3. Check form validation

---

## Performance Check

### Frontend
- [ ] Page loads in <3 seconds
- [ ] No console warnings
- [ ] Animations smooth (60fps)
- [ ] No memory leaks

### Backend
- [ ] Responds to requests <500ms
- [ ] No server errors (5xx)
- [ ] Handles multiple requests

---

## Final Status

- [ ] All steps completed
- [ ] No errors in console
- [ ] All pages load correctly
- [ ] All functionality works
- [ ] Ready for development/deployment

---

## 🎉 Success!

If all checkboxes are complete, your Hôtel Velleda website is:
✅ Installed  
✅ Running  
✅ Functional  
✅ Ready to use  

**Next Steps:**
- Customize content/colors
- Add images
- Deploy to production
- Set up email notifications

---

**Installation Date**: ________________
**Verified By**: ________________________
**Status**: ✅ Ready
