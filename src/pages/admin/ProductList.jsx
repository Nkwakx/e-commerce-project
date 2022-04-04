import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { useData } from '../../firebase/FirebaseDataHook';
import CartImg from '../../assets/images/img10.jpg';
import { MdModeEditOutline, MdDelete } from 'react-icons/md';
import { IoMdAddCircle } from 'react-icons/io';


export default function ProductList() {

    const [product, setProduct] = useState([]);
    const { Products } = useData();
    const url = useLocation();


    useEffect(() => { loader() }, [Products]);

    function loader() {
        console.log("Getting products ", Products);

        let pathSpilt = url.pathname.split("/")
        let cat = pathSpilt[pathSpilt.length - 2]
        let sub = pathSpilt[pathSpilt.length - 1]

        console.log("URL", url.pathname, cat, sub)

        if (Products != null) {
            console.log("??")
            if (Products[cat]) {
                if (Products[cat][sub]) {
                    if (Products[cat][sub].products) {
                        console.log("we have a product", Products[cat][sub].products)
                        let prod = Products[cat][sub].products;
                        setProduct(prod);
                    }
                }
            }
        }
    }
    return (
        <>
           <div className='add-product'>
                <NavLink to="add-product" class="btn-add bg-success-light"><i className='btn-icon'><IoMdAddCircle/></i>Add Product</NavLink>
           </div>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Sub-Category</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Stock Level</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>Main Cat</td>
                        <td>Sub Cat</td>
                        <td className='avatar-img'>
                            <a href="/" class="avatar avatar-sm">
                                <img class="" src={CartImg} alt="" />
                            </a>
                            <a href="/">Product Name</a>
                        </td>
                        <td>To Be Added</td>
                        <td>To Be Added</td>
                        <td>To Be Added</td>
                        <td>To Be Added</td>
                        <td>
                            <div class="actions">
                                <a class="btn bg-success-light" data-toggle="modal" href="/">
                                    <i class=""><MdModeEditOutline /></i> Edit
                                </a>
                                <a data-toggle="modal" href="/" class="btn bg-danger-light">
                                    <i class=""><MdDelete /></i> Delete
                                </a>
                            </div>
                        </td>
                    </tr>
                    {product && product.map((entry, index) => {
                        return <tr key={index}>
                            <td>{entry.mainCategory}</td>
                            <td>{entry.subCategory}</td>
                            <td className='avatar-img'>
                                <a href="/" class="avatar avatar-sm">
                                    <img class="avatar-img" src={entry.productImg} alt="" />
                                </a>
                                <a href="/">{entry.productName}</a>
                            </td>
                            <td>{entry.productImg}</td>
                            <td>{entry.productImg}</td>
                            <td>{entry.productImg}</td>
                            <td>{entry.productImg}</td>
                            <td>
                                <td>
                                    <div class="actions">
                                        <a class="btn bg-success-light" data-toggle="modal" href="/">
                                            <i class=""><MdModeEditOutline /></i> Edit
                                        </a>
                                        <a data-toggle="modal" href="/" class="btn bg-danger-light">
                                            <i class=""><MdDelete /></i> Delete
                                        </a>
                                    </div>
                                </td>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}
