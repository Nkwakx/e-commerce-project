import React, { useState } from 'react'
import SideBar from './SideBar';
import { AllSubCateg } from '../routers/AllRoutes'

export default function SideBarDisplay() {

    const [inactive, setInactive] = useState(false);

    return (
        <>
            <div className="col-md-5 col-lg-4 col-xl-3 side-menu">
                <h3 className="categories">Refined By Categories</h3>
                <ul className='main-menu'>
                    {AllSubCateg.map((menuItem, index) => (
                        <SideBar
                            key={index}
                            name={menuItem.name}
                            exact={menuItem.exact}
                            path={menuItem.path}
                            subMenus={menuItem.subMenus || []}
                            iconClassName={menuItem.iconClassName}
                            onClick={(e) => {
                                if (inactive) {
                                    setInactive(false);
                                }
                            }}
                        />
                    ))}
                </ul>
            </div>
        </>
    )
}
