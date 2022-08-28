import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar.js";
import MainNavBar from "./main-navbar.js";

function MainPage() {
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

export default MainPage;