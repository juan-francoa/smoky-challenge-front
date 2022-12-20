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
    const categ = (e) => {
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
        const data = { name: inp, category: y }
        dispatch(vapersActions.getVapers(data))
        console.log(check)
    }
    return (
        <div className="bg-black body-container-products d-flex flex-column flex-wrap gap-3 justify-content-center pb-2">
            <div className='filter-container d-flex flex-wrap gap-5 justify-content-center align-items-center'>
                <div className='box'>
                    <div class="search-box">
                        <input type="text" placeholder='Search' onChange={search} />
                        <label class="icon">
                            <img src="https://cdn-icons-png.flaticon.com/512/8915/8915520.png" alt="" />
                        </label>
                    </div>
                </div>

                <div>
                    <label className='gap-4 d-flex'>
                        {category.map(e => <><input type="checkbox" onClick={e => categ(e.target.value)} value={e} />
                        <span>{e}</span></>)}
                    </label>
                </div>
            </div>
            <h1 className='title-products'>Vapers</h1>
            <div className='d-flex flex-wrap gap-5 justify-content-center pt-4 pb-4'>
                {vapers.length === 0 ? (<> <iframe src="https://giphy.com/embed/j9XoexYMmd7LdntEK4" width="480" height="276" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/404-notfound-under-maintenance-j9XoexYMmd7LdntEK4"></a></p> </>) : (vapers.map(e => <CardVaper name={e.name} description={e.description} price={e.price} img={e.photo} cont={e.amount} />))}
            </div>
        </div>
    )
}
