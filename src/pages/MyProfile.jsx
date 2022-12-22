import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import "../profile.css"

export default function MyProfile() {
    let { photo, name, email} = useSelector((store) => store.userReducer);
    console.log( email)
    return (
        <main className='containerprofile'>
                <div class="profile-card text-white ">
                    <div class="profile-img">
                        <img class="profile-im" src={photo} alt=""  />
                        </div>
                    <div class="container-info">
                        <div class="name-container">
                            <img class="edit-img" src="https://cdn-icons-png.flaticon.com/512/1160/1160515.png" />
                                <h1>{name}</h1>
                        </div>
                        <div class="name-container">
                            <img class="edit-img" src="https://cdn-icons-png.flaticon.com/512/1160/1160515.png" />
                                <p>Email: {email}</p>
                        </div>
                        <div class="name-container">
                            <img class="edit-img" src="https://cdn-icons-png.flaticon.com/512/1160/1160515.png" />
                                <p>Contraseña: hola123</p>
                        </div>
                   
                </div>
            </div>
        </main>
    )
}