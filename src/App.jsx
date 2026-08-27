import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import DemoBookingModal from './components/DemoBookingModal';
import Toast from './components/Toast';

// Pages
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import DemoPage from './pages/DemoPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [toastInfo, setToastInfo] = useState({ message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToastInfo({ message, type });
    setTimeout(() => {
      setToastInfo({ message: '', type: 'success' });
    }, 4500);
  };

  return (
    <Router>
      <ScrollToTop />
      {/* Global Ambient Glow Background */}
      <div className="bg-ambient-glow" />

      <div className="app-container">
        {/* Sticky Glassmorphic Navbar */}
        <Navbar onOpenDemoModal={() => setDemoModalOpen(true)} />

        {/* Dynamic Route Pages */}
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenDemoModal={() => setDemoModalOpen(true)} onShowToast={showToast} />}
            />
            <Route
              path="/features"
              element={<FeaturesPage onOpenDemoModal={() => setDemoModalOpen(true)} />}
            />
            <Route
              path="/demo"
              element={<DemoPage onOpenDemoModal={() => setDemoModalOpen(true)} />}
            />
            <Route
              path="/pricing"
              element={<PricingPage onOpenDemoModal={() => setDemoModalOpen(true)} onShowToast={showToast} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenDemoModal={() => setDemoModalOpen(true)} />}
            />
            <Route
              path="/contact"
              element={<ContactPage onShowToast={showToast} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onShowToast={showToast} />
      </div>

      {/* Global 1-on-1 Demo Booking & Trial Modal */}
      <DemoBookingModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Global Toast Notification */}
      <Toast
        message={toastInfo.message}
        type={toastInfo.type}
        onClose={() => setToastInfo({ message: '', type: 'success' })}
      />
    </Router>
  );
}
