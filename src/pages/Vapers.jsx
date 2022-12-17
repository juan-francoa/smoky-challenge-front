import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import CardVaper from '../components/CardVaper';
import vapersActions from '../redux/actions/vapersAction'

export default function Vapers() {
    const dispatch = useDispatch();
    let { vapers, category } = useSelector((store) => store.vapersReducer);
    let [check, setCheck] = useState([])
    let [inp, setInp] = useState("")
    useEffect(() => {
        const data = { name: "", category: "" }
        dispatch(vapersActions.getVapers(data))
        dispatch(vapersActions.getCategories())
    }, [])

    const search = (e) => {

        setInp(e.target.value)
        const data = { name: e.target.value, category: check.toString() }
        dispatch(vapersActions.getVapers(data))
    }
    const categ = (e)=>{
        if (check.includes(e)) {
            let i = check.indexOf(e)
            check.splice(i, 1)
            setCheck(check)
          }
          else {
            check.push(e)
            setCheck(check)
          }
          const y = check.toString()
          const data = {name:inp, category:y}
          dispatch(vapersActions.getVapers(data))
          console.log(check)
    }
    return (
        <div className="bg-black body-container-products d-flex flex-column flex-wrap gap-5 justify-content-center pt-4 pb-4">
            <div className='d-flex flex-wrap gap-5 justify-content-center pt-4 pb-4'><input placeholder='Search' onChange={search} /> <div>
            {category.map(e => <><input type="checkbox" onClick={e =>categ(e.target.value)} value={e}/>{e}</> )}
            </div> </div>
            <div className='d-flex flex-wrap gap-5 justify-content-center pt-4 pb-4'>
                {vapers.length === 0?("NOT FOUND") : (vapers.map(e => <CardVaper name={e.name} description={e.description} price={e.price} img={e.photo} cont={e.amount} id={e._id} />))}
            </div>
        </div>
    )
}
