import { Outlet, Route, Routes } from "react-router-dom";
import ErrorPage from "./error-page.js";
import Sidebar from "./sidebar.js";
import UserPage from "./user-page.js";

function MainPage() {
    return (
        <>
            <Sidebar />
            <div style={{marginLeft: '250px'}}>
                <Outlet />
            </div>
        </>
    )
}

export default MainPage;