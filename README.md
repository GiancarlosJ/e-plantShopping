# 🌿 Paradise Nursery

**Paradise Nursery** es una aplicación de comercio electrónico desarrollada con React y Redux Toolkit que permite a los usuarios explorar y comprar plantas de interior.

## 📋 Descripción del Proyecto

Paradise Nursery ofrece una experiencia de compra intuitiva donde los usuarios pueden:
- Explorar un catálogo de plantas organizadas por categorías
- Agregar plantas al carrito de compras
- Gestionar las cantidades y eliminar artículos del carrito
- Ver el costo total de su compra en tiempo real

## 🚀 Tecnologías Utilizadas

- **React** – Biblioteca de UI para construir componentes reutilizables
- **Redux Toolkit** – Gestión del estado global (carrito de compras)
- **React-Redux** – Integración de Redux con React
- **Vite** – Herramienta de desarrollo rápido
- **CSS3** – Estilos y diseño visual

## 🗂️ Estructura del Proyecto

```
paradise-nursery/
├── public/
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx       # Página Acerca de Nosotros
│   │   ├── ProductList.jsx   # Catálogo de plantas
│   │   └── CartItem.jsx      # Página del carrito de compras
│   ├── App.jsx               # Componente principal con navegación
│   ├── App.css               # Estilos globales e imagen de fondo
│   ├── CartSlice.jsx         # Redux slice para el carrito
│   ├── store.js              # Configuración del store de Redux
│   └── main.jsx              # Punto de entrada de la aplicación
├── README.md
└── package.json
```

## 🌱 Categorías de Plantas

1. **Suculentas** – Plantas resistentes y de bajo mantenimiento
2. **Plantas de Interior** – Ideales para decorar el hogar
3. **Plantas Aromáticas** – Aromas naturales para tu espacio

## ⚙️ Instalación y Uso

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/paradise-nursery.git

# Entrar al directorio
cd paradise-nursery

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🛒 Funcionalidades del Carrito

- Agregar productos al carrito
- Desactivación del botón una vez agregado el producto
- Contador dinámico de artículos en el ícono del carrito
- Aumentar y disminuir cantidades
- Eliminar artículos individuales
- Visualización del costo total
- Botón de "Pago" con mensaje "Próximamente"
- Botón para continuar comprando

## 👨‍💻 Autor

Desarrollado como proyecto final del curso de React y Redux.