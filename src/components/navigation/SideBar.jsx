import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { CategoriesObj } from '../../routers/AllRoutes';
import { useLocation } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { IoFitnessOutline } from 'react-icons/io5';
import { FaNutritionix } from 'react-icons/fa';
import { GiWaterPolo } from 'react-icons/gi';


export default function SideBar(props) {

    const url = useLocation();
    const { all } = props
    // console.log("Check uri", url, path);

    // create 3 static boolean states 
    const [showFitness, setshowFitness] = useState(false)
    const [showSuplements, setshowSuplements] = useState(false)
    const [showWaterSports, setshowWaterSports] = useState(false)


    useEffect(() => {

        let tempPath = url.pathname.split("/")[1]
        console.log("temp PATH", tempPath, all?.fitness?.subMenus)

        if (tempPath === "fitness") {
            setshowFitness(true)
        }
        if (tempPath === "watersport") {
            setshowWaterSports(true)
        }
        if (tempPath === "supplements") {
            setshowSuplements(true)
        }

    }, [url])

    return (
        <>

            {showFitness && <li onClick={() => { }}>

                <NavLink style={({ isActive }) => {
                    return {
                        color: isActive ? "red" : "",
                    };
                }} to="/fitness" className="menu-item" >
                    <div className="menu-icon">
                        <i>{<IoFitnessOutline />}</i>
                        <span>{"Fitness"}</span>
                    </div>
                </NavLink>


                {CategoriesObj?.fitness?.subMenus && CategoriesObj?.fitness?.subMenus?.length > 0 ? (
                    <ul className="sub-menu">
                        {CategoriesObj?.fitness?.subMenus.map((menu, index) => (
                            <li key={index}>
                                <NavLink style={({ isActive }) => {
                                    return {
                                        color: isActive ? "red" : "",
                                    };
                                }} activeclassname="active-nav" to={menu.path}>{menu.name}<i><BsArrowRight /></i></NavLink>
                            </li>
                        ))}
                    </ul>
                ) : null}
            </li>}

            {
                showSuplements && <li onClick={() => { }}>
                    <NavLink style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "",
                        };
                    }} to="/supplements" className="menu-item">
                        <div className="menu-icon">
                            <i>{<FaNutritionix />}</i>
                            <span>{"Supplements"}</span>
                        </div>
                    </NavLink>

                    {CategoriesObj?.supplements?.subMenus && CategoriesObj?.supplements?.subMenus?.length > 0 ? (
                        <ul className="sub-menu">
                            {CategoriesObj?.supplements?.subMenus.map((menu, index) => (
                                <li key={index}>
                                    <NavLink style={({ isActive }) => {
                                        return {
                                            color: isActive ? "red" : "",
                                        };
                                    }} activeclassname="active-nav" to={menu.path}>{menu.name}<i><BsArrowRight /></i></NavLink>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </li>
            }

            {
                showWaterSports && <li onClick={() => { }}>

                    <NavLink style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : "",
                        };
                    }} to="/watersport" className="menu-item">
                        <div className="menu-icon">
                            <i>{<GiWaterPolo />}</i>
                            <span>{"Watersport"}</span>
                        </div>
                    </NavLink>

                    {CategoriesObj?.waterSport?.subMenus && CategoriesObj?.waterSport?.subMenus?.length > 0 ? (
                        <ul className="sub-menu">
                            {CategoriesObj?.waterSport?.subMenus.map((menu, index) => (
                                <li key={index}>
                                    <NavLink style={({ isActive }) => {
                                        return {
                                            color: isActive ? "red" : "",
                                        };
                                    }} activeclassname="active-nav" to={menu.path}>{menu.name}<i><BsArrowRight /></i></NavLink>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </li>
            }

            {/* <button onClick={() => setshowWaterSports(!showWaterSports)} className="menu-item">
                    <div className="menu-icon">
                        <i>{iconClassName}</i>
                        <span>{"Water Sport"}</span>
                    </div>

                </button> */}
        </>
    )
}
