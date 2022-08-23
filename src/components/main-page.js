import { Route, Routes } from "react-router-dom";
import ErrorPage from "./error-page.js";
import Sidebar from "./sidebar.js";
import UserPage from "./user-page.js";

function MainPage() {
    return (
        <>
            <Sidebar />
            <Routes>
                <Route path='/main/user/:id' element={<UserPage />}/>
                <Route path='/main/questions/:category-id' element={<MainPage />}/>
                <Route path='/main/user/ask-question' element={<MainPage />}/>
            </Routes>
        </>
    )
}

export default MainPage;