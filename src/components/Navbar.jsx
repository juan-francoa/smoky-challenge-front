import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="d-flex">
                <img className="logo-header" src="img/smoky-logo-png.png" alt="" />
                <div className="container-fluid nav-div-container d-flex justify-content-center text-white">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/"}><p className="nav-link active text-white fs-5 fw-bold" aria-current="page" >Home</p></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <p className="nav-link dropdown-toggle text-white fs-5 fw-bold" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </p>
                                <ul className="dropdown-menu bg-black">
                                    <li><Link to={"/vapers"}><p className="dropdown-item"> Vapers</p></Link></li>
                                    <li><Link to={"/eliquids"}> <p className="dropdown-item"> E-liquids</p></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="user-logo-container d-flex justify-content-end img-fluid nav-div-container text-white">
                <li className="nav-item dropdown">
                    <p className="nav-link dropdown-toggle text-white fs-5 fw-bold" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <Link to={"/signin"}>
                            <img className="user-logo" src="img/usuario.png" alt="user logo" />
                        </Link>
                    </p>
                    <Link to={"/signin"}></Link>
                    <ul className="dropdown-menu bg-black">
                        <li><Link to={"/SignIn"}><p className="dropdown-item"> Sign In</p></Link></li>
                        <li><Link to={"/SignUp"}> <p className="dropdown-item"> Sign Up</p></Link></li>
                    </ul>
                </li>
                <p> <Link to={"/shopping"}><img className="cart-logo" src="img/carrito.png" alt="cart logo" />  </Link></p>
            </div>
        </nav >
    )
}
