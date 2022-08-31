import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar.js";
import MainNavBar from "./main-navbar.js";
import { useSelector } from 'react-redux';

function MainPage() {
    const isOpen = useSelector((state) => state.sidebar.sidebar);
    if(isOpen === true) {
        return (
            <>
                <Sidebar />
                <div style={{marginLeft: '250px'}}>
                    <MainNavBar />
                    <Outlet />
                </div>
            </>
        )
    }
    return (
        <>
            <div>
                <MainNavBar />
                <Outlet />
            </div>
        </>
    )
}

export default MainPage;