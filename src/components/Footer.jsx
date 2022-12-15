import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-container d-flex flex-column">
        <div className="footer-warning">
            <p className="d-flex justify-content-center">
                These products are intended only for people of legal age. Use not allowed in minors and pregnant women.
            </p>
        </div>
        <div className="d-flex justify-content-around py-4 footer-primary">
            <div className="logo-footer-container text-center">
                <img className="logo-footer" src="img/smoky-logo-png.png" alt="logo Smoky" />
                <h5 className="map-text text-white">Follow us:</h5>
                <div className="socialmedia-container d-flex justify-content-center gap-4">
                    <a href="https://web.whatsapp.com/"><img className="redes-img" src="img/whatsapp.png"
                            alt="whatsapp logo" /></a>
                    <a href="https://www.instagram.com/"><img className="redes-img" src="img/instagram.png"
                            alt="instagram logo" /></a>
                    <a href="https://www.facebook.com/"><img className="redes-img" src="img/facebook.png"
                            alt="facebook logo" /></a>
                </div>
            </div>

            <div className="map-text d-flex flex-column justify-content-center align-items-center">
                <h3 className="text-white">Contact us:</h3>
                <p><img src="img/tienda.png" /> Monday-Friday: 7:00 a.m. a 6:00 p.m.</p>
                <p><img src="img/llamada.png" /> Phone number: +57 321 984 8497</p>
                <p> <img src="img/marcador-de-posicion.png" /> Adress: New York City</p>
                <p><a href="https://mail.google.com/mail/u/0/"><img src="img/email.png" alt="" /> Email:
                        smoky.vaping@gmail.com</a></p>
            </div>

            <div className="text-center map-text">
                <h3 className="text-white">Location:</h3>
                <iframe class="map-img"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987584510595!3d40.69767006338158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNueva%20York%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1670952008954!5m2!1ses!2sco"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

        <div className="footer-container2 text-white d-flex justify-content-center py-2">
            <h6>Smoky Vape Shop® 2022 | By Hugo, Rochi, Pili, Juan, Caro, Andy y Meli ♥</h6>
        </div>

    </footer>

  )
}
