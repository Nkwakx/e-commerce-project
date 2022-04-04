import React, { useEffect, useState } from 'react'
import { useData } from '../../firebase/FirebaseDataHook'
import { useNavigate } from 'react-router-dom';
import { RoutesObj } from '../../routers/AllRoutes';
import { BsArrowRight } from 'react-icons/bs';

export default function MainSideBarCat() {

    const { Products } = useData();
    const [AllInventory, setAllInventory] = useState([])
    const navigate = useNavigate();

    useEffect(() => { SetUp() }, []);
    useEffect(() => { SetUp() }, []);

    function SetUp() {
        if (Products) {
            let main = Object.keys(Products);
            console.log("?? ", main);
            setAllInventory(main);
        }
    }

    return (
        <>
            {AllInventory && AllInventory.map((cat, index) => {
                let path = RoutesObj.catsLanding.path;
                let pathCleaned = path.replace(":type", cat);
                console.log("Paths: ", cat, path, pathCleaned);

                return <button key={index} className="nav-cat" onClick={() => navigate(`${pathCleaned}`)} >
                    <ul>
                        <li>{cat}<i><BsArrowRight /></i></li>
                    </ul>
                </button>
            })}
        </>
    )
}
