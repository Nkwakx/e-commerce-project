import SideBarDisplay from '../../components/navigation/SideBarDisplay';
import { Outlet } from 'react-router-dom';

export default function Fitness() {

    return (
        <>
            <main className="container">

                <div className="row">
                    <SideBarDisplay />
                    <div className="col-md-9 content-wrap">
                        <div className="wrapper">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}
