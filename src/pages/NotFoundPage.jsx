import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '120px 20px', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <span className="badge-pill">404 Error</span>
      <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '16px' }}>
        Page <span className="gradient-text">Not Found</span>
      </h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 32px' }}>
        The page you are looking for does not exist or has been moved. Return to the RestroMind AI homepage.
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        <Home size={18} />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
