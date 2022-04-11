import React from 'react'
import { Outlet } from 'react-router-dom';
import SideBarDisplay from '../../components/navigation/SideBarDisplay';

export default function WaterSport() {
    return (
        <>
            <main className="body-contect">
                <h2>Sport</h2>
                <div className="row">
                    <SideBarDisplay />
                    <div className="col-md-7 col-lg-8 col-xl-9 content">
                        <div className="wrapper">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
