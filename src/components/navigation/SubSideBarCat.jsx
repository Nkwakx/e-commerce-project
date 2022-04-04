import React, { useState } from 'react'
import { useData } from '../../firebase/FirebaseDataHook'

export default function SubSideBarCat() {
    const { Products } = useData();
    const [AllProducts, setAllProducts] = useState([]);

    let path = window.location.href;
    let pathSplit = path.split("/");
    let cat = pathSplit[pathSplit.length - 1];
    let subCat = Products[cat];
    let subCatStrings = Object.keys(subCat);

    console.log("URL: ", path, pathSplit, cat, subCat, subCatStrings);

    return (
        <>
            {AllProducts && AllProducts.map((item, index) => {
                
            })}
        </>
    )
}
