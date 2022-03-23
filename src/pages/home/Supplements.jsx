import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar'
import SideBarDisplay from '../../components/SideBarDisplay';

export default function Supplements() {

    return (
        <>
            <NavBar />
            <section className="body-contect">
                <h2>Sport</h2>
                <div className="row">
                    <SideBarDisplay />
                    <div className="col-md-7 col-lg-8 col-xl-9 content">
                        <div className="wrapper">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
