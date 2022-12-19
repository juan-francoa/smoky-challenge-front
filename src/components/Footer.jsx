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
                    <p className='fs-5'><img src="img/tienda.png" /> Monday-Friday: 7:00 a.m. a 6:00 p.m.</p>
                    <p className='fs-5'><img src="img/llamada.png" /> Phone number: +57 321 984 8497</p>
                    <p className='fs-5'> <img src="img/marcador-de-posicion.png" /> Adress: New York City</p>
                    <p className='fs-5'><a href="https://mail.google.com/mail/u/0/"><img src="img/email.png" alt="" /> Email:
                        smoky.vaping@gmail.com</a></p>
                </div>

                <div className="text-center map-text d-flex flex-column align-items-center">
                    <h3 className="text-white">Location:</h3>
                    <iframe class="map-img"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3977.1004259840356!2d-74.13734962540892!3d4.575979886435537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1671167599751!5m2!1ses!2sco"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <img class="payment-container" src="https://cdn.shopify.com/s/files/1/0166/9493/5652/files/Payment_6ca1a29f-0fb4-4fbe-a624-35dfe7ae119f.png?v=1663159128&width=720" alt="payment photo" />
                </div>
            </div>

            <div className="footer-container2 text-white d-flex justify-content-center py-2">
                <h6>Smoky Vape Shop® 2022 | By Hugo, Rochi, Pili, Juan, Caro, Andy y Meli ♥</h6>
            </div>

        </footer>

    )
}
