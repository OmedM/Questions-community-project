import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoginPage from "./login-page";


export default function Auth() {
    const token = useSelector((state) => state.user.currentToken);
    let isAuth = false;
    if(token !== undefined) { isAuth = true; }
    else { isAuth = false; }

    return (
        isAuth? <Outlet /> : <LoginPage />
    )
}