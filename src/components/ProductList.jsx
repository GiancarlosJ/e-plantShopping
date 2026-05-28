import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, selectCartTotalItems } from '../CartSlice';
import './ProductList.css';

const plantsData = [
  // === CATEGORÍA 1: SUCULENTAS ===
  {
    category: 'Suculentas',
    emoji: '🪴',
    plants: [
      {
        name: 'Aloe Vera',
        price: 12.99,
        description: 'Planta medicinal y decorativa, ideal para espacios luminosos.',
        image: 'https://images.unsplash.com/photo-1591615893490-f01cbcbf98ab?w=300&q=80',
      },
      {
        name: 'Echeveria',
        price: 8.99,
        description: 'Suculenta en forma de rosa con hojas gruesas y carnosas.',
        image: 'https://images.unsplash.com/photo-1509587584298-0f3620f0f3d9?w=300&q=80',
      },
      {
        name: 'Cactus Navideño',
        price: 9.99,
        description: 'Florece en invierno con llamativas flores de colores.',
        image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=300&q=80',
      },
      {
        name: 'Haworthia',
        price: 7.99,
        description: 'Pequeña suculenta con hojas puntiagudas y translúcidas.',
        image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=300&q=80',
      },
      {
        name: 'Sedum',
        price: 6.99,
        description: 'Tapizante resistente, perfecta para maceteros y jardines.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80',
      },
      {
        name: 'Kalanchoe',
        price: 10.99,
        description: 'Suculenta con flores vibrantes, muy fácil de cuidar.',
        image: 'https://images.unsplash.com/photo-1453945619913-79ec89a82c51?w=300&q=80',
      },
    ],
  },

  // === CATEGORÍA 2: PLANTAS DE INTERIOR ===
  {
    category: 'Plantas de Interior',
    emoji: '🌿',
    plants: [
      {
        name: 'Pothos',
        price: 14.99,
        description: 'Trepadora colgante ideal para principiantes, muy resistente.',
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=300&q=80',
      },
      {
        name: 'Monstera Deliciosa',
        price: 24.99,
        description: 'La reina de las plantas de interior con sus hojas perforadas.',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&q=80',
      },
      {
        name: 'Ficus Lyrata',
        price: 34.99,
        description: 'Árbol de hoja grande con presencia escultural.',
        image: 'https://images.unsplash.com/photo-1567360425618-1594206637d2?w=300&q=80',
      },
      {
        name: 'Sansevieria',
        price: 16.99,
        description: 'Purifica el aire y sobrevive con muy poca agua.',
        image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=300&q=80',
      },
      {
        name: 'Espatifilo',
        price: 18.99,
        description: 'Florece en sombra y limpia toxinas del ambiente.',
        image: 'https://images.unsplash.com/photo-1520411633047-2abf9a9a49fd?w=300&q=80',
      },
      {
        name: 'ZZ Plant',
        price: 22.99,
        description: 'Extremadamente resistente, tolera el olvido y poca luz.',
        image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=300&q=80',
      },
    ],
  },

  // === CATEGORÍA 3: PLANTAS AROMÁTICAS ===
  {
    category: 'Plantas Aromáticas',
    emoji: '🌸',
    plants: [
      {
        name: 'Lavanda',
        price: 11.99,
        description: 'Aroma relajante, perfecta para dormitorios y baños.',
        image: 'https://images.unsplash.com/photo-1537528943432-3c1a5bf9e5b5?w=300&q=80',
      },
      {
        name: 'Menta',
        price: 5.99,
        description: 'Refrescante y versátil, ideal para cocina y té.',
        image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=300&q=80',
      },
      {
        name: 'Romero',
        price: 7.99,
        description: 'Aromático y culinario, también repele insectos.',
        image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=300&q=80',
      },
      {
        name: 'Albahaca',
        price: 4.99,
        description: 'Esencial en la cocina mediterránea y muy fácil de cultivar.',
        image: 'https://images.unsplash.com/photo-1592150620744-aca64f48394a?w=300&q=80',
      },
      {
        name: 'Jazmín',
        price: 15.99,
        description: 'Flores blancas con un perfume intenso y dulce.',
        image: 'https://images.unsplash.com/photo-1592903297149-37fb25202dfa?w=300&q=80',
      },
      {
        name: 'Eucalipto',
        price: 13.99,
        description: 'Aroma fresco y purificante, excelente para el bienestar.',
        image: 'https://images.unsplash.com/photo-1536882240095-0379873feb4e?w=300&q=80',
      },
    ],
  },
];

function ProductList({ navigateTo }) {
  const dispatch = useDispatch();
  const totalItems = useSelector(selectCartTotalItems);
  const cartItems = useSelector((state) => state.cart.items);

  const [addedItems, setAddedItems] = useState({});

  const isInCart = (plantName) =>
    cartItems.some((item) => item.name === plantName);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-list-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-brand" onClick={() => navigateTo('home')}>
          🌿 Paradise Nursery
        </div>
        <div className="navbar-links">
          <button onClick={() => navigateTo('home')}>Inicio</button>
          <button onClick={() => navigateTo('about')}>Nosotros</button>
          <button className="cart-btn" onClick={() => navigateTo('cart')}>
            🛒 Carrito
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </button>
        </div>
      </nav>

      {/* HEADER */}
      <div className="product-header">
        <h1>Nuestras Plantas</h1>
        <p>Encuentra la planta perfecta para tu hogar 🌱</p>
      </div>

      {/* CATEGORÍAS */}
      {plantsData.map((category) => (
        <div key={category.category} className="category-section">
          <h2 className="category-title">
            {category.emoji} {category.category}
          </h2>
          <div className="plants-grid">
            {category.plants.map((plant) => {
              const added = isInCart(plant.name);
              return (
                <div key={plant.name} className="plant-card">
                  <div className="plant-image-wrapper">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/300x200/e8f5e9/2e7d32?text=${plant.name}`;
                      }}
                    />
                  </div>
                  <div className="plant-info">
                    <h3>{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <div className="plant-footer">
                      <span className="plant-price">S/. {plant.price.toFixed(2)}</span>
                      <button
                        className={`add-btn ${added ? 'added' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={added}
                      >
                        {added ? '✓ Agregado' : '+ Agregar'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;