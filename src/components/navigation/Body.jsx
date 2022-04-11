import React from "react"
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Slider from "./../slideShow/Slider"
import FitnessProducts from "../../pages/home/components/DefaultProductsDisplay copy/FitnessProducts";
import SupplementsProducts from '../../pages/home/components/DefaultProductsDisplay copy/SupplementsProducts';
import WaterProducts from '../../pages/home/components/DefaultProductsDisplay copy/WaterProducts';
import MainSideBarCat from './MainSideBarCat';


export default function Body() {
    return (
        <>
            <main className="body-contect container">
                {/* <h2>Sport</h2> */}
                <div className="row">
                    <div className="col-md-3 sidebar">
                        <h3 className="categories">Categories</h3>
                        {/* <MainSideBarCat /> */}
                        <ul>
                            <li><NavLink to="/fitness">Fitness<i><BsArrowRight /></i></NavLink></li>
                            <li><NavLink to="/supplements">Supplements<i><BsArrowRight /></i></NavLink></li>
                            <li><NavLink to="/watersport">Watersport<i><BsArrowRight /></i></NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-9 content-wrap">
                       <div className="wrap-slide">
                            {<Slider />}
                       </div>
                        <div className="divider-title">
                            <h2>Fitness</h2>
                            <div className="wrapper">
                                <FitnessProducts />
                            </div>
                        </div>
                        <div className="divider-title">
                            <h2>Supplements</h2>
                            <div className="wrapper">
                                <SupplementsProducts />
                            </div>
                        </div>
                        <div className="divider-title">
                            <h2>Water-Sport</h2>
                            <div className="wrapper">
                                <WaterProducts />
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}
