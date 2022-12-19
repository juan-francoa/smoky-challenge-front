import React from 'react'

export default function CardShopping(props) {
    let { name, price, img, count } = props
    return (

        <div className="orden__productos">
            <div className="producto__item">
                <div className="producto">
                    <img src={img} alt={name} />
                    <p>{name}</p>
                    <div className="producto__monto">
                        <p>${price}x{count}={Number(price)*Number(count)}</p>
                    </div>
                </div>
                <div >
                    <button>Delete</button>
                </div>
            </div>
        </div>

    )
}
