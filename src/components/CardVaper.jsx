import React from 'react'

export default function CardVaper(props) {
    let {name, description, price, img, cont} = props
    return (
        <div className="product-card">
            <img src={img} className="card-img-top pt-1" alt="..." />
            <div className="card-body d-flex justify-content-center flex-column align-items-center bg-black gap-1">
                <h5 className="card-title">{name}</h5>
                <p className="card-text mb-0 text-white mi">{description}.</p>
                <div className="price-container d-flex">
                    <p>${price}</p>
                    <input className="input-cart" type="number" min="0" max={cont} placeholder={0} name="quantity" id="quantity" />
                </div>
                <button className="btn btn-cart">Add to cart</button>
            </div>
        </div>
    )
}
