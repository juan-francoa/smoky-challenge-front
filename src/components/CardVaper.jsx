import React from 'react'
import { useState } from 'react'
import shopActions from '../redux/actions/shopAction'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function CardVaper(props) {
    let { name, description, price, img, cont, id } = props
    let [count, setCount] = useState(0)
    let [bool, setBool] = useState(true)
    const dispatch = useDispatch();
    let _id = useSelector((store) => store.userReducer);
    const numb = (e) => {
        setCount(Number(e.target.value))
        console.log(count, typeof count)
    }
    const send = (e) => {
        console.log()
        if (count > 0) {
            if (bool || (e.target.name === "delete")) {
                setBool(!bool)
                if (e.target.name === "delete") {
                    const data1 = {
                        userId: _id.id,
                        products: e.target.value
                    }
                    dispatch(shopActions.deleteShops(data1))
                }
                else {
                    const products = new Object();
                    products[id] = Number(count)
                    const data = {
                        userId: _id.id,
                        products
                    }
                    dispatch(shopActions.addShops(data))
                }
            }
        }
        else if (e.target.name === "delete") {
            setBool(!bool)
            const data1 = {
                userId: _id.id,
                products: e.target.value
            }
            dispatch(shopActions.deleteShops(data1))
        }
    }

    return (
        <div className="product-card">
            <img src={img} className="card-img-top" />
            <div className="card-body d-flex justify-content-evenly flex-column align-items-center bg-black gap-1">
                <h5 className="card-title">{name}</h5>
                <p className="card-text mb-0 text-white mi">{description}.</p>
                <div className="price-container d-flex">
                    <p>${price}</p>
                    <input className="input-cart" onChange={numb} type="number" min="0" max={cont} placeholder={0} name="quantity" id="quantity" />
                </div>
                {bool ? (<button onClick={send} value={id} className="btn btn-cart">Add to cart</button>) : (<><button onClick={send} value={id} className="btn btn-cart">Add to cart</button><button onClick={send} value={id} name={"delete"} className="btn btn-cart bg-danger">Delete from cart</button> </>)}
            </div>
        </div>
    )
}
