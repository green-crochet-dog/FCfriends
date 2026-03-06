import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Plushies Emporium</h1>
        <p>Find your cuddly companion today!</p>
        <a href="#shop" className="btn-primary">Shop Now</a>
      </div>
    </section>
  );
}
