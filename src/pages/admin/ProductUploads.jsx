import React, { useState, useEffect } from 'react'
import { useData } from '../../firebase/FirebaseDataHook';

export default function ProductUploads() {

    const { CreateProduct } = useData();

    let createValues = {
        mainCategory: "",
        subCategory: "",
        productName: "",
        productDescription: "",
        productPrice: "",
        stockLevel: "",
        productImg: [""]
    };

    const [productValues, setProductValues] = useState(createValues);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setProductValues({ ...productValues, [name]: value });
    }

    const submitChange = (event) => {
        event.preventDefault();
        setProductValues("");
        console.log(productValues);
    }

    useEffect(() => {

    }, [productValues])

    const mainCategories = ["fitness", "supplements", "watersport"];
    const fitnessSubCat = ["combact-sport", "dancing", "training", "yoga-pilates-studio"];
    const supplementsSubCat = ["nutrition", "nutrition-bars-drinks", "supplements-shakers", "protein-supplements"];
    const watersportSubCat = ["diving", "fishing", "surfing", "swimming"];

    return (
        <>
            

            <form className='auth-form' onSubmit={submitChange}>

                <div className='form-group'>
                    <label className="focus-label" htmlFor="mainCategory"><span>Select Category</span>
                        <select className="floating-select" name="mainCategory" id="mainCategory" onChange={handleOnChange}>
                            <><option></option>
                                {mainCategories.map((cat, index) => {
                                    return (<option key={index} value={cat}>{cat}</option>)
                                })}
                            </>
                        </select>
                    </label>
                </div>

                <div className='form-group'>
                    <label className="focus-label" htmlFor="subCategory"><span>Select subCategory</span>

                        {productValues.mainCategory === "fitness" && (
                            <select className="floating-select" name="subCategory" id="subCategory" onChange={handleOnChange}>
                                <><option></option>
                                    {fitnessSubCat.map((fitSub, index) => {
                                        return (<option key={index} value={fitSub}>{fitSub}</option>)
                                    })}
                                </>
                            </select>)
                        }
                        {productValues.mainCategory === "supplements" && (
                            <select className="form-control" name="subCategory" id="subCategory" onChange={handleOnChange}>
                                <><option></option>
                                    {supplementsSubCat.map((supplementSub, index) => {
                                        return (<option key={index} value={supplementSub}>{supplementSub}</option>)
                                    })}
                                </>
                            </select>
                        )}

                        {productValues.mainCategory === "watersport" && (
                            <select className="form-control" name="subCategory" id="subCategory" onChange={handleOnChange}>
                                <><option></option>
                                    {watersportSubCat.map((waterSub, index) => {
                                        return (<option key={index} value={waterSub}>{waterSub}</option>)
                                    })}
                                </>
                            </select>
                        )}
                    </label>
                </div>
                
                <div className="form-group mb-3">
                    <label className="focus-label" htmlFor="productName">
                        <input name="productName" type="text" id='productName'
                            placeholder='Product Name'
                            className="form-control"
                            value={productValues.productName}
                            onChange={handleOnChange} />
                        <span>Product Name</span>
                    </label>
                </div>
                <div className="form-group mb-3">
                    <label className="focus-label" htmlFor="productDescription">
                        <input name="productDescription" type="text" id="productDescription"
                            placeholder='Product Description'
                            className="form-control"
                            value={productValues.productDescription}
                            onChange={handleOnChange} />
                        <span>Product Description</span>
                    </label>
                </div>
                <div className="form-group mb-3">
                    <label className="focus-label" htmlFor="productDescription">
                        <input name="productPrice" type="text" id="productPrice"
                            placeholder='Product Price'
                            className="form-control"
                            value={productValues.productPrice}
                            onChange={handleOnChange} />
                        <span>Price</span>
                    </label>
                </div>
                <div className="form-group mb-3">

                    <label className="focus-label" htmlFor="stockLevel">
                        <input name="stockLevel" type="number" id="stockLevel"
                            placeholder='stockLevel'
                            className="form-control"
                            value={productValues.stockLevel}
                            onChange={handleOnChange} />
                        <span>Stock Level</span>
                    </label>
                </div>
                <div className="form-group mb-3">
                    <label className="focus-label" htmlFor="productImg">
                        <input type="text" name="productImg" id="productImg"
                            placeholder='Upload Image'
                            className="form-control"
                            onChange={handleOnChange} />
                        <span>Upload Image(s): </span>
                    </label>
                </div><br/>
                <button className='btn-primary'
                    onClick={() => { CreateProduct(productValues) }}>Add
                </button>
            </form>

        </>
    )
}
