import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import arrow from './assets/img/arrowBack.svg'
import cartWhite from './assets/img/cartWhite.svg'
import rating from './assets/img/rating.svg'
import { Reviews } from './Reviews'

export const Product = () => {
    const [product, setProduct] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    const id = params.id
    useEffect(() => {
        axios
            .get(
                `https://masterclass.kimitsu.it-incubator.ru/api/products/${id}`
            )
            .then((res) => setProduct(res.data))
    }, [])
    const [isProductInCart, setIsProductIncart] = useState(false)

    const addProductToCartHandler = () => {
        alert('Товар успешно добавлен в корзину')
        setIsProductIncart(true)
    }
    if (product === null) return <div>Loading...</div>

    return (
        <div>
            <div className='arrowBack'>
                <button to={'/'} onClick={goBack}>
                    <img src={arrow} alt='' />
                    Back to Best Seller
                </button>
            </div>
            <div className='product'>
                <img src={product.image} alt='' />
                <div className='info'>
                    <p className='title'>{product.title}</p>
                    <p className='price'>$ {product.price}</p>
                    <div className='rating'>
                        <p>Rating: {product.rating.rate}</p>
                        <img src={rating} alt='' />
                    </div>
                    <div className='category'>
                        <span>Category:</span>
                        <p>{product.category}</p>
                    </div>
                    <p className='description'>{product.description}</p>
                    <button onClick={addProductToCartHandler} >
                        <img src={cartWhite} alt="" />
                        {isProductInCart ? 'Go to cart' : 'Add to cart'}
                    </button>
                </div>
            </div>
            <Reviews />
        </div>
    )
}