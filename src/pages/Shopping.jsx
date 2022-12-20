import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import CardShopping from '../components/CardShopping';
import { useState } from 'react';
import eliquidsActions from '../redux/actions/eliquidsAction'
import vapersActions from '../redux/actions/vapersAction';
import shopActions from '../redux/actions/shopAction';
import userAction from '../redux/actions/userAction';

export default function Shopping() {
  let [total, setTotal] = useState(0)
  const dispatch = useDispatch();
  let { shop } = useSelector((store) => store.shopReducer);
  let { eliquids } = useSelector((store) => store.eliquidsReducer);
  let { vapers } = useSelector((store) => store.vapersReducer);
  let { id } = useSelector((store) => store.userReducer);
  let [product, setProduct] = useState(shop)
  useEffect(() => {
    const data = { name: "", category: "" }
    let tot = 0
    dispatch(shopActions.getShops(id))
    if (shop.products) {
      let array = shop.products.map(e => {
        dispatch(eliquidsActions.getEliquids(data))
        let bool = eliquids.filter(a => a._id === Object.keys(e)[0])
        if (bool.length > 0) {
          bool = { ...bool[0] }
          bool.count = e[Object.keys(e)[0]]
          tot += e[Object.keys(e)[0]] * bool.price
          return bool
        }
        else {
          const data = { name: "", category: "" }
          let bool = ""
          dispatch(vapersActions.getVapers(data))
          bool = { ...vapers.filter(a => a._id === Object.keys(e)[0])[0] }
          bool.count = e[Object.keys(e)[0]]
          tot += e[Object.keys(e)[0]] * bool.price
          setTotal(tot)
          return bool
        }
      })
      setProduct(array)
      setTotal(tot)
    }
  }, [dispatch, id, shop])

  return (
    <div>
      <section class="orden__container body-container-shopping">
        <h2 className='title text-white mb-4'>Shopping</h2>
        <div className='orden__completa d-flex flex-column'>
          {product.length > 0 ? (product.map(e => <CardShopping img={e.photo} name={e.name} price={e.price} count={e.count} cardId={e._id} />)) : ("NOT FOUND")}
        </div>
        <div class="shopping__sumatoria">
          <div class="orden__concepto">
            <p>Total</p>
          </div>
          <div class="orden__monto">
            <p>$ {total}</p>
          </div>
        </div>
        <button class="btn-link btn">BUY</button>
      </section>
    </div>
  )
}

/* import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import CardShopping from '../components/CardShopping';
import { useState } from 'react';
import eliquidsActions from '../redux/actions/eliquidsAction'
import vapersActions from '../redux/actions/vapersAction';
import shopActions from '../redux/actions/shopAction';
import userAction from '../redux/actions/userAction';

export default function Shopping() {


  let [total, setTotal] = useState(0)
  const dispatch = useDispatch();
  let { shop } = useSelector((store) => store.shopReducer);
  let { eliquids } = useSelector((store) => store.eliquidsReducer);
  let { vapers } = useSelector((store) => store.vapersReducer);
  let { id } = useSelector((store) => store.userReducer);
  let [product, setProduct] = useState(shop)
  useEffect(() => {
    const data = { name: "", category: "" }
    let tot = 0
    dispatch(shopActions.getShops(id))
    if (shop.products) {
      let array = shop.products.map(e => {
        dispatch(eliquidsActions.getEliquids(data))
        let bool = eliquids.filter(a => a._id === Object.keys(e)[0])
        if (bool.length > 0) {
          bool = { ...bool[0] }
          bool.count = e[Object.keys(e)[0]]
          tot += e[Object.keys(e)[0]] * bool.price
          return bool
        }
        else {
          const data = { name: "", category: "" }
          let bool = ""
          dispatch(vapersActions.getVapers(data))
          bool = { ...vapers.filter(a => a._id === Object.keys(e)[0])[0] }
          bool.count = e[Object.keys(e)[0]]
          tot += e[Object.keys(e)[0]] * bool.price
          setTotal(tot)
          return bool
        }
      })
      setProduct(array)
      setTotal(tot)
    }
  }, [dispatch, id, shop])

  return (
    <main className='bg-shop pb-5'>
      <div className="d-flex justify-content-center mt-3">
        <section class="orden__container body-container-shopping">
          <h2 className='title text-white mb-4'>Shopping</h2>
          <div className='orden__completa d-flex flex-column'>
            {product.length > 0 ? (product.map(e => <CardShopping img={e.photo} name={e.name} price={e.price} count={e.count} cardId={e._id} />)) : ("NOT FOUND")}
          </div>
          <div class="shopping__sumatoria">
            <div class="orden__concepto">
              <p>Total</p>
            </div>
            <div class="shopping__sumatoria">
              <div class="orden__concepto">
                <p>Total</p>
              </div>
              <div class="orden__monto">
                <p>$ {total}</p>
              </div>
            </div>
            <button class="btn-link btn">BUY</button>
          </div>
        </section>
      </div>
    </main>
  )
} */