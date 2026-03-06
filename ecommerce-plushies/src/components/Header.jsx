import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">🧸Fit check <Friends></Friends></div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
