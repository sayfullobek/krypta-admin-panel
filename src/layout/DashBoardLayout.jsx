import React from 'react'
import {Outlet} from 'react-router-dom'
import {NotFoundPages} from "../pages/NotFoundPages";
import {SideBar} from "../component/SideBar";
import {Header} from "../component/Header";

export const DashBoardLayout = () => {
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")
    return (
        <>
            {token && role === "ADMIN" ? (
                <div className='container-fluid page-body-wrapper'>
                    <Header/>
                    <SideBar/>
                    <div className='main-panel'>
                        <div className='content-wrapper'>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            ) : (
                <NotFoundPages/>
            )}
        </>

    )
}