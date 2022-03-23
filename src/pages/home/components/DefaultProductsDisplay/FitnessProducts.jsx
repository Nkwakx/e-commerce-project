import React, { useState, useEffect } from 'react'
import JSON_FILE from '../ProductData'

export default function FitnessProducts() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        loader();
    }, []);

    function loader() {
        let uri = []
        JSON_FILE.map((entry) => {
            uri.push({ title: entry.title, description: entry.description, prodId: entry.prodId, price: entry.price });
            return uri
        });
        setProduct(uri);
    }

    return (
        <>
            {
                product.map((entry) => {
                    return (
                        <div className="card" key={entry.prodId}>
                            <div className="card__body">
                                <img src={entry.img} className="card__image" alt='' />
                                <p className="card__title">{entry.title}</p>
                                <h3 className="card__description">{entry.price}</h3>
                            </div>
                        </div>
                    );
                })
            }
        </>
    )
}
