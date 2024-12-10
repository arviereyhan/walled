import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

function DashboardLayout() {
    const navigate = useNavigate();

    // useEffect(() => {
    //   const isLoggedIn = localStorage.getItem("loginForm");
    //   if (!isLoggedIn) {
    //     return navigate("/");
    //   }
    // }, []);

    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default DashboardLayout