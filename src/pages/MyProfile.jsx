import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function MyProfile() {
    let { photo, name, email} = useSelector((store) => store.userReducer);
    console.log( email)
    return (
        <main className='pb-4'>
            <div class="d-flex justify-content-center mt-4">
                <div class="profile-card text-white d-flex justify-content-center">
                    <div class="profile-img-container">
                        <img class="profile-img" src={photo} alt="" />
                    </div>
                    <div class="d-flex gap-3 flex-column">
                        <div class="name-container d-flex align-items-center gap-3">
                            <img class="edit-img" src="https://cdn-icons-png.flaticon.com/512/1160/1160515.png" />
                                <h1>{name}</h1>
                        </div>
                        <div class="d-flex align-items-center gap-3 fs-5">
                            <img class="edit-img" src="https://cdn-icons-png.flaticon.com/512/1160/1160515.png" />
                                <p>Email: {email}</p>
                        </div>
                        <div class="d-flex align-items-center gap-3 fs-5">
                            <img class="edit-img" src="https://cdn-icons-png.flaticon.com/512/1160/1160515.png" />
                                <p>Contraseña: hola123</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}