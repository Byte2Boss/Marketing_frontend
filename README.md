<div align="center">

# 🍽️ RestroMind AI — Multi-Page Marketing Web Application

**Modern, High-Converting Multi-Page Marketing Website for the RestroMind AI Restaurant Operating System**

<p align="center">
  <img src="https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5+-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Lucide_Icons-Latest-F56565?style=for-the-badge&logo=feather&logoColor=white" alt="Lucide Icons" />
  <img src="https://img.shields.io/badge/CSS3-Luxury_Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Axios-REST_Client-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License" />
</p>

</div>

---

## 📖 Overview

The **RestroMind AI Marketing Frontend** is an ultra-fast, luxury-styled multi-page web application built with **React.js (Vite)** and **React Router v6**. It communicates with the Python FastAPI backend to deliver a seamless, high-converting experience for restaurant owners, hospitality executives, and multi-unit franchise operators.

---

## ✨ Key Features & Experience

- ⚡ **Sub-100ms Instant Multi-Page Navigation**: Powered by `react-router-dom` with zero page reloads and instant route caching.
- 📱 **Interactive In-Browser Live Smartphone Simulator**: Allows visitors to experience the customer QR menu directly on screen, switch restaurant themes (*Artisan Cafe*, *Fine Dining*, *Craft Brewery*, *Cloud Kitchen*), and see AI upsells in action.
- 💡 **Dynamic Profit & Labor ROI Calculator**: Interactive sliders calculate projected monthly and annual revenue uplift and kitchen turnaround improvements.
- 💎 **Luxury Glassmorphic Aesthetic**: Deep dark luxury mode, smooth ambient gradient glows, and refined micro-interactions.
- 📅 **Interactive 15-Minute Demo Scheduler**: Seamless modal and page-level calendar booking connected directly to the backend PostgreSQL engine.
- 👥 **Team & Leadership Showcase**: Displays founders, AI engineers, and hospitality advisors with verified bios and social links.
- 📱 **Fully Responsive**: Pixel-perfect across ultra-wide monitors, laptops, tablets, and mobile devices.

---

## 🗺️ Multi-Page Site Architecture

```
RestroMind AI Web Application
│
├── 🏠 / (Home Page)
│   ├── Sticky Navbar with Quick Action CTAs
│   ├── High-Converting Hero Section (Dynamic previews & dual CTAs)
│   ├── Social Proof & Trust Badges (500+ Restaurants, 99.9% Uptime)
│   ├── Bento Grid Highlights (AI Engine, Table QR, Analytics, Kitchen Sync)
│   ├── Interactive Live Simulator Teaser
│   ├── Customer Testimonials & Verified Metrics
│   └── Bottom High-Impact Conversion Banner
│
├── ⚡ /features (Features & AI Deep-Dive Page)
│   ├── 🤖 AI Menu Engineering (Smart pairings, auto descriptions, margin booster)
│   ├── 📱 Contactless Dynamic QR Engine (Table-specific, zero app installs)
│   ├── 📊 Real-Time Restaurant Owner Dashboard (Analytics, instant price toggles)
│   ├── ⚡ Kitchen & Bar Order Dispatching Workflow
│   └── 🏢 Multi-Location & Franchise Management System
│
├── 📱 /demo (Interactive Live Demo & Simulator Page)
│   ├── Full-Screen Interactive Smartphone & QR Menu Simulator
│   ├── Restaurant Theme Switcher (Cafe, Bistro, Pub, Cloud Kitchen)
│   ├── Live AI Upsell Engine Demonstration (Interactive cart & pairing logic)
│   └── Direct "Schedule Custom 1-on-1 Walkthrough" Lead Capture
│
├── 💰 /pricing (Pricing & ROI Calculator Page)
│   ├── Transparent Pricing Matrix (Starter, Growth AI, Enterprise)
│   ├── Monthly / Annual Billing Toggle (with 20% discount badge)
│   ├── Interactive Profit & Labor ROI Calculator (Custom sliders)
│   ├── Detailed Feature-by-Feature Comparison Matrix
│   └── Pricing & Billing FAQ Accordion
│
├── 👥 /about (About Us & Team Page)
│   ├── Company Mission, Story & "The Problem We Are Solving"
│   ├── Founders & Executive Leadership Profiles
│   ├── AI & Software Engineering Team
│   ├── Culinary & Hospitality Industry Advisory Board
│   └── Company Values & Culture
│
└── 📬 /contact (Contact & Book a Demo Page)
    ├── Interactive 15-Minute Personalized Demo Scheduler
    ├── General Inquiries & Enterprise Franchise Form
    ├── Direct Sales & Partnership Contacts
    └── Support Information & Live Status
```

---

## 📂 Project Structure

```
Marketing_frontend/
├── public/
│   ├── favicon.svg
│   └── mockups/                    # Device mockup assets & preview graphics
│
├── src/
│   ├── pages/                      # Dedicated React Router pages
│   │   ├── HomePage.jsx            # High-converting landing & highlights
│   │   ├── FeaturesPage.jsx        # AI & QR deep-dive
│   │   ├── DemoPage.jsx            # Full interactive QR & Menu simulator
│   │   ├── PricingPage.jsx         # Pricing matrix & ROI calculator
│   │   ├── AboutPage.jsx           # Story, Mission & Team Members
│   │   └── ContactPage.jsx         # Book a Demo & Inquiries
│   │
│   ├── components/                 # Reusable UI components
│   │   ├── Navbar.jsx              # Multi-page sticky header
│   │   ├── HeroSection.jsx         # Hero hook with preview cards
│   │   ├── InteractiveDemo.jsx     # In-browser interactive phone simulator
│   │   ├── BentoFeatures.jsx       # AI & Core Features Grid
│   │   ├── RoiCalculator.jsx       # Dynamic Profit Uplift Calculator
│   │   ├── PricingCards.jsx        # Tier cards with billing toggle
│   │   ├── TeamMembers.jsx         # Founders, AI Engineers & Advisors
│   │   ├── DemoBookingModal.jsx    # Global lead capture & booking popup
│   │   ├── Testimonials.jsx        # Restaurant owner case studies
│   │   ├── FAQSection.jsx          # Categorized FAQs
│   │   └── Footer.jsx              # Multi-page sitemap & newsletter
│   │
│   ├── data/                       # Structured content & mock caches
│   │   ├── teamData.js             # Team profiles, bios & social links
│   │   ├── featuresData.js         # Feature specifications & AI breakdown
│   │   ├── pricingData.js          # Tiers, monthly/annual rates, features
│   │   └── testimonialsData.js     # Verified restaurant reviews & metrics
│   │
│   ├── api/
│   │   └── client.js               # Axios API client for FastAPI backend
│   │
│   ├── index.css                   # Global design tokens, glassmorphism & gradients
│   ├── App.jsx                     # React Router routes setup
│   └── main.jsx                    # React entry point
│
├── .env.example
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `18.0.0+`
- **npm** or **yarn** / **pnpm**

### 1. Clone & Navigate
```bash
cd Marketing_frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL="http://127.0.0.1:8000/api/v1"
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 🔌 Connecting to the Backend

The frontend seamlessly connects to the **RestroMind AI FastAPI backend**:
- Make sure the backend server is running on `http://127.0.0.1:8000`.
- All form submissions (Lead capture, Demo bookings, Contact inquiries, ROI calculation logs) are automatically dispatched to the backend API with built-in fallbacks.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

<div align="center">
  <sub>Built with ❤️ for <b>RestroMind AI</b>.</sub>
</div>
