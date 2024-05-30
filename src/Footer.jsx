import React from 'react';
import './styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Enlaces</h4>
                    <ul>
                        <li><a href="/about">Sobre nosotros</a></li>
                        <li><a href="/services">Servicios</a></li>
                        <li><a href="/contact">Contacto</a></li>
                        <li><a href="/privacy">Política de privacidad</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contacto</h4>
                    <p>Email: info@KilometroCero.com</p>
                    <p>Teléfono: +34 123 456 789</p>
                    <p>Dirección: Calle Falsa 123, Ciudad, Uruguay</p>
                </div>
                <div className="footer-section">
                    <h4>Síguenos</h4>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 KilometroCero. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
