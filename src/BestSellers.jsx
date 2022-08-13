import axios from 'axios'
import { useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'

export const BestSellers = () => {
    const [products, setProducts] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        axios
            .get('https://masterclass.kimitsu.it-incubator.ru/api/products')
            .then((res) => setProducts(res.data))
    }, [])
    return (
        <div className='bestSeller'>
            <div className='cards'>
                {products.map((pr) => {
                    return (
                        <div className="card" key={pr.id}>
                            <img src={pr.image} alt="img" />
                            <h4>{pr.title}</h4>
                            <p className="price">${pr.price}</p>
                            <Link to={`${pr.id}`}>Show more</Link>
                        </div>
                    )
                })}</div>
        </div>
    )
}
