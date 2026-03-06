import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProductCard from './components/ProductCard.jsx';

// placeholder data for the home page
const featuredProducts = [
  {
    id: 1,
    name: 'Cuddly Bunny',
    price: '$24.99',
    image: 'https://via.placeholder.com/150?text=Bunny',
  },
  {
    id: 2,
    name: 'Happy Bear',
    price: '$29.99',
    image: 'https://via.placeholder.com/150?text=Bear',
  },
  {
    id: 3,
    name: 'Sleepy Kitten',
    price: '$19.99',
    image: 'https://via.placeholder.com/150?text=Kitten',
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <main>
        <section id="shop" className="featured">
          <h2>Featured Plushies</h2>
          <div className="product-grid">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
