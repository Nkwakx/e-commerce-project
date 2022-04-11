import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useData } from '../../firebase/FirebaseDataHook';
import { MdModeEditOutline, MdDelete } from 'react-icons/md';
import { IoMdAddCircle } from 'react-icons/io';
import ReactPaginate from 'react-paginate';



export default function ProductList() {

    const [product, setProduct] = useState([]); //state var to hold all prods
    const [pageNumber, setPageNumber] = useState(0);
    const { Products } = useData();
    const usersPerPage = 10;

    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(product.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    };


    useEffect(() => { loader() }, [Products]);
    useEffect(() => { }, [product]);

    function loader() {
        console.log("Getting products ", Products);

        if (Products != null) {
            //  Change nested objs to nested arrays 
            let allprods = [] //all products found

            if (Object.keys(Products)) {
                Object.keys(Products).forEach((cat, index) => {
                    // Here we will acess each main category 
                    console.log("CAT", cat, Products[cat])

                    if (Object.keys(Products[cat])) {
                        Object.keys(Products[cat]).forEach((sub) => {
                            // Here we are getting the products objs 
                            console.log("SUBCAT", cat, sub, Products[cat][sub])

                            if (Object.values(Products[cat][sub].products)) {
                                Object.values(Products[cat][sub].products).forEach((prod) => {
                                    // here are every product available
                                    console.log("PRODS", cat, sub, prod)
                                    // push prod to allProds and create a state variable to contain it 

                                    allprods.push({
                                        prod: prod,
                                        index
                                    });

                                })
                            }
                        })
                    }
                })
            }
            console.log("allP", allprods);
            setProduct(allprods);
        }
    }
    return (
        <>
            <div className='add-product'>
                <NavLink to="add-product" class="btn-add bg-success-light"><i className='btn-icon'><IoMdAddCircle /></i>Add Product</NavLink>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Sub-Category</th>
                        <th width="150">Product Name</th>
                        <th width="400">Description</th>
                        <th>Stock #</th>
                        <th>Price</th>
                        <th width="180">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.slice(pagesVisited, pagesVisited + usersPerPage)
                        .map((entry, index) => {
                            return <tr key={index}>
                                <td>{entry?.prod?.mainCategory}</td>
                                <td>{entry?.prod?.subCategory}</td>
                                <td className='avatar-img group'>
                                    <a href="/" class="avatar">
                                        <img class="avatar-img" src={entry?.prod.productImg} alt="" />
                                    </a>
                                    <a href="/">{entry?.prod?.productName}</a>
                                </td>
                                <td>{entry?.prod?.productDescription}</td>
                                <td>{entry?.prod?.stockLevel}</td>
                                <td>R {entry?.prod?.productPrice}</td>
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
            <ReactPaginate
                previousLabel={"Previous"}
                NextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </>
    )
}
