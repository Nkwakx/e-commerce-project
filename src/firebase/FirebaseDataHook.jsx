import React, { createContext, useContext, useState, useEffect } from 'react'
import { FIREBASE_REALTIME_DB } from './FirebaseConfig';
import { set, ref, push, onValue } from 'firebase/database';

const PathString = "PRODUCTS";

const DataContext = createContext({})
export const useData = () => useContext(DataContext)

export default function FirebaseDataHookProvider({ children, ...props }) {

    const [Products, setProducts] = useState(null);

    useEffect(() => {
        const REF = ref(FIREBASE_REALTIME_DB, PathString);
        onValue(REF, (snapshot) => {
            const data = snapshot.val();
            console.log("DATA", data);
            if (data !== null) {
                setProducts(data);
            }
        })
    }, [])
    useEffect(() => { }, [Products])

    function CreateProduct(newProduct) {

        let path = `${PathString}/${newProduct.mainCategory}/${newProduct.subCategory}/products`;
        let REF = ref(FIREBASE_REALTIME_DB, `${path}`);
        let Key = push(REF).key;
        let finalREF = ref(FIREBASE_REALTIME_DB, `${path}/${Key}`);

        newProduct.id = Key;

        return set(finalREF, newProduct);
    }

    function UpdateProduct(ProductId, newProduct, oldProduct) {

    }

    function DeleteProduct(ProductId,) {

    }

    const value = {
        Products,
        CreateProduct,
        UpdateProduct,
        DeleteProduct
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
