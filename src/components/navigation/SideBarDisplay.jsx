import React, { useState } from 'react'
import SideBar from './SideBar';
import { AllSubCateg } from '../../routers/AllRoutes'

export default function SideBarDisplay() {

    return (
        <>
            <div className="col-md-3 side-menu">
                <h3 className="categories">Refined By Categories</h3>
                <ul className=''>

                    <SideBar all={AllSubCateg} />

                </ul>
            </div>
        </>
    )
}
