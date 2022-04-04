import NavBar from '../../components/navigation/NavBar';
import SideBarDisplay from '../../components/navigation/SideBarDisplay';
import { Outlet } from 'react-router-dom';

export default function Fitness() {

    return (
        <>
            <NavBar />
            <main className="body-contect">
                
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
