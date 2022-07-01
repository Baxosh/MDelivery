import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { RESTAURANT } from "../utils/urls";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";


export default function Cart() {
    const params = useParams()
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

    useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)))

    const removeCartItem = (item) => {
        setCart([...cart.filter((i) => i.product.id !== item.product.id)])
    }

    const increase = (cartItem) => {
        setCart(cart.map((item) => {
            if (cartItem.product.id === item.product.id) {
                item.count += 1
                item.price += cartItem.product.attributes.Price
            }
            return item
        }))
    }

    const decrease = (cartItem) => {
        if (cartItem.count === 1) {
            return removeCartItem(cartItem)
        }

        setCart(cart.map((item) => {
            if (cartItem.product.id === item.product.id) {
                item.count -= 1
                item.price -= cartItem.product.attributes.Price
            }
            return item
        }))
    }

    return (
        <Layout>
            <section className="section is-medium">
                <div className="hero-body">
                    {cart.length !== 0 ?
                        < h1 className="title has-text-centered">
                            Корзина
                        </h1> : null
                    }
                    {cart.length !== 0 ?
                        cart.map((cartItem) => (
                            <div className="container my-6" key={cartItem.product.id}>
                                <div className="media is-flex is-align-items-center is-justify-content-space-between">
                                    <figure className="image is-256x256">
                                        <img src={`http://localhost:1337${cartItem.product.attributes.Image.data.attributes.url}`} alt="" />
                                        {/* {console.log(cartItem.product.attributes.Image.data.attributes.url)} */}
                                    </figure>
                                    <div className="media-right m-5 p-2">
                                        <p className="title is-4">{cartItem.product.attributes.Name}</p>
                                        <p className="title is-5">{cartItem.price}</p>
                                    </div>
                                    <div className="buttons">
                                        <button className="button" onClick={() => decrease(cartItem)}>-</button>
                                        <span className='subtitle m-3'>Кол-во: {cartItem.count}</span>
                                        <button className="button" onClick={() => increase(cartItem)}>+</button>
                                    </div>
                                    <button className="delete is-medium" onClick={() => removeCartItem(cartItem)}></button>
                                </div>
                            </div>
                        )) : (
                            <h1 className="title has-text-centered">Ваша корзина пуста</h1>
                        )
                    }
                </div>
            </section >
        </Layout >
    )
}