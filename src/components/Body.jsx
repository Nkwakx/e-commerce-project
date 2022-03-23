import React from "react"
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Slider from "./Slider"
import FitnessProducts from "../pages/home/components/DefaultProductsDisplay/FitnessProducts";
import SupplementsProducts from './../pages/home/components/DefaultProductsDisplay/SupplementsProducts';
import WaterSport from "../pages/home/WaterSport";
import WaterProducts from './../pages/home/components/DefaultProductsDisplay/WaterProducts';

export default function Body() {
    return (
        <>
            <section className="body-contect">
                <h2>Sport</h2>
                <div className="row">
                    <div className="col-md-5 col-lg-4 col-xl-3 sidebar">
                        <h3 className="categories">Categories</h3>
                        <ul>
                            <li><NavLink to="/fitness">Fitness<i><BsArrowRight /></i></NavLink></li>
                            <li><NavLink to="/supplements">Supplements<i><BsArrowRight /></i></NavLink></li>
                            <li><NavLink to="/watersport">Watersport<i><BsArrowRight /></i></NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8 col-xl-9 content">
                        {<Slider />}
                        <div className="divider-title">
                            <h2>Fitness</h2>
                            <div className="wrapper">
                                <FitnessProducts/>
                            </div>
                        </div>
                        <div className="divider-title">
                            <h2>Supplements</h2>
                            <div className="wrapper">
                                <SupplementsProducts/>
                            </div>
                        </div>
                        <div className="divider-title">
                            <h2>Water-Sport</h2>
                            <div className="wrapper">
                                <WaterProducts/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
