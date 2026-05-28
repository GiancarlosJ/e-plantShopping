import React from "react";
import "./AboutUs.css";

function AboutUs({ navigateTo }) {
  return (
    <div className="about-container">
      <nav className="navbar">
        <div className="navbar-brand">🌿 Paradise Nursery</div>
        <div className="navbar-links">
          <button onClick={() => navigateTo("home")}>Inicio</button>
          <button onClick={() => navigateTo("products")}>Plantas</button>
          <button onClick={() => navigateTo("cart")}>🛒 Carrito</button>
        </div>
      </nav>

      <div className="about-content">
        <div className="about-hero">
          <h1>🌱 Acerca de Paradise Nursery</h1>
          <p className="about-tagline">
            Llevando la naturaleza a tu hogar desde 2015
          </p>
        </div>

        <div className="about-sections">
          <div className="about-card">
            <span className="about-icon">🌍</span>
            <h2>Nuestra Misión</h2>
            <p>
              En Paradise Nursery creemos que cada hogar merece un toque de
              naturaleza. Nuestra misión es hacer que las plantas sean
              accesibles para todos, ayudando a crear espacios más verdes,
              saludables y felices.
            </p>
          </div>

          <div className="about-card">
            <span className="about-icon">🏆</span>
            <h2>Nuestra Historia</h2>
            <p>
              Fundada en 2015 por un grupo de apasionados de la botánica,
              Paradise Nursery nació con el sueño de conectar a las personas con
              el mundo vegetal. Hoy contamos con más de 200 variedades de
              plantas cuidadosamente seleccionadas para ti.
            </p>
          </div>

          <div className="about-card">
            <span className="about-icon">💚</span>
            <h2>Nuestros Valores</h2>
            <p>
              Sostenibilidad, calidad y amor por las plantas guían cada decisión
              que tomamos. Todas nuestras plantas son cultivadas de forma
              responsable, garantizando la mejor calidad y el menor impacto
              ambiental posible.
            </p>
          </div>

          <div className="about-card">
            <span className="about-icon">📦</span>
            <h2>Envío Seguro</h2>
            <p>
              Sabemos lo importante que es que tus plantas lleguen en perfectas
              condiciones. Utilizamos empaques ecológicos especialmente
              diseñados para proteger a tus nuevas compañeras verdes durante el
              transporte.
            </p>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat">
            <h3>200+</h3>
            <p>Variedades de plantas</p>
          </div>
          <div className="stat">
            <h3>10,000+</h3>
            <p>Clientes satisfechos</p>
          </div>
          <div className="stat">
            <h3>9 años</h3>
            <p>De experiencia</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Sostenible</p>
          </div>
        </div>

        <div className="about-cta">
          <h2>¿Lista para llenar tu hogar de verde?</h2>
          <button onClick={() => navigateTo("products")} className="cta-btn">
            Ver Nuestras Plantas
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
