import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { CATEGORIES, RESTAURANT, RESTAURANTS } from '../utils/urls';
import Layout from '../components/Layout';
import ProductModal from '../components/ProductModal';


export default function RestaurantDetail({ product, count, setRestaurants }) {
    const [restaurants, setRestaurant] = useState()
    const [showModal, setShowModal] = useState({ status: false })
    const [categories, setCategories] = useState([])
    const params = useParams()

    useEffect(() => {
        axios
            .get(RESTAURANT.replace('id', params.id))
            .then(res => setRestaurant(res.data.data))
            .catch(err => console.log(err))

        axios
            .get(CATEGORIES)
            .then(res => setCategories(res.data.data))
            .catch(err => console.log(err))
    }, [])

    const filter = (item) => {
        axios
            .get(RESTAURANTS +
                `&filters[categories][id][$eq]=${item.id}`
            )
            .then((response) => setRestaurants(response.data.data))
            .catch((err) => console.log(err))
    }

    function openModal(product) {
        setShowModal({ status: true, product })
    }

    return (
        <Layout className="hero">
            {showModal.status ? <ProductModal showModal={showModal} onClose={() => setShowModal(false)} /> : null}
            <div className="section m-0 p-0">
                <div className="hero-body p-0">
                    {restaurants && (
                        <div className="container" key={restaurants.id}>
                            <figure className="image is-128x128 is-rounded">
                                <img src={`http://localhost:1337${restaurants.attributes.logo.data[0].attributes.url}`}
                                    alt="404 not found" />
                            </figure>
                            <div className="content" style={{ marginLeft: '150px', marginTop: '-130px' }}>
                                <h1 className="title is-4">{restaurants.attributes.name}</h1>
                                <p className="subtitle is-6">{restaurants.attributes.type_of_products.data[0].attributes.title}</p>
                            </div>
                            <div className="tags are-medium">
                                <span className="tag is-warning">Info</span>
                                <span className="tag is-warning">Info</span>
                            </div>
                            <div className="buttons mt-6 ml-3">
                                {categories.map(category => (
                                    <button key={category.id} className="button is-light" onClick={() => filter(category)}>{category.attributes.title}</button>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="container is-flex mt-6">
                        {restaurants && restaurants.attributes.products.data.map(product => (
                            <div key={product.id} className="card is-clickable" onClick={() => openModal(product)}>
                                <div className="card-image" style={{ width: '320px' }} >
                                    <figure className="image is-256x256" >
                                        <img src={`http://localhost:1337${product.attributes.Image.data.attributes.url}`}
                                            alt="" />
                                    </figure>
                                    <div className="card-content">
                                        <h1 className="title is-4">{product.attributes.Name}</h1>
                                        <br />
                                        <p className="subtitle is-6">{product.attributes.Price}  сум</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
