import LogoBA from './logo_ba.jpg'
import './Footer.css'

export const Footer = () => {
    return <footer>      
        <div className="img">
            <img src={LogoBA} alt="logoBA" />
        </div>
        <div className="curso">
            <p>FRONT END JS - Comisión: 24225 - Año: 2024</p>
            <p>REACT - Comisión: 25232 - Año: 2025</p>
        </div>
        <div className="integrantes">
            <p> María de los Ángeles López</p>
        </div>
    </footer>
}