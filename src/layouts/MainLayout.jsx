import { Outlet } from "react-router-dom"
import { Header } from "../componentes/Header/Header"
import { Nav } from "../componentes/Nav/Nav"

export const MainLayout = () => {
    return (
        <>
            <Nav />
            <div className="main-content">
                <Outlet />
            </div>
        </>
    )
}