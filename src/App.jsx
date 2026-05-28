import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

function AppContent() {
  const [showProductList, setShowProductList] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === 'products') setShowProductList(true);
    else setShowProductList(false);
  };

  const handleGetStarted = () => {
    setShowProductList(true);
    setCurrentPage('products');
  };

  return (
    <>
      {currentPage === 'home' && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Welcome to Paradise Nursery</h1>
            <p className="subtitle">Your favorite indoor plant store</p>
            <p className="tagline">"Where every plant finds its home"</p>
            <button className="start-btn" onClick={handleGetStarted}>
              Get Started
            </button>
            <br />
            <button className="about-link" onClick={() => navigateTo('about')}>
              About Us
            </button>
          </div>
        </div>
      )}

      {currentPage === 'products' && showProductList && (
        <ProductList navigateTo={navigateTo} />
      )}

      {currentPage === 'cart' && (
        <CartItem navigateTo={navigateTo} />
      )}

      {currentPage === 'about' && (
        <AboutUs navigateTo={navigateTo} />
      )}
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;