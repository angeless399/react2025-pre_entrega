import { Outlet } from "react-router-dom"
import { Header } from "../componentes/Header/Header"
import { Nav } from "../componentes/Nav/Nav"


export const MainLayout = () => {
    return (
        <> 
            <Nav />
             <main>
            <div className="main-content">
                <Outlet />
            </div>
            </main>
        </>
    )
}