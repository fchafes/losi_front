import React from 'react';
import './Footer.css'; // Asegúrate de tener tu archivo CSS para estilos

const Footer = () => {
  return (
    
    <footer className="footer-container">
      <div className="footer-section">
  <div className="footer-icons">
    <div className="icon-container">
      <img src="/public/template.jpg" alt="Pago Seguro" />
      <p> 
 SECURE PAYMENTS</p>
    </div>
    <div className="icon-container">
      <img src="/public/box.png" alt="Envío Seguro" />
      <p>
FREE STANDARD SHIPPING</p>
    </div>
    <div className="icon-container">
      <img src="/public/plane.jpg" alt="Envíos a Todo el Mundo" />
      <p>WORLDWIDE SHIPPING</p>
    </div>
    <div className="icon-container">
      <img src="/public/plane.jpg" alt="Envíos a Todo el Mundo" />
      <p>WORLDWIDE SHIPPING</p>
    </div>
  </div>
</div>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Dirección: 123 Calle Principal, Ciudad</p>
          <p>Email: info@example.com</p>
          <p>Teléfono: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Losi. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
