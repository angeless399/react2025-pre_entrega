import { Outlet } from "react-router-dom"
import { Header } from "../componentes/Header/Header"


export const AdminLayout = () => {
    return (
        <>
            <main>
                <section className="admin-layout">
                    <Outlet />
                </section>
            </main>
        </>
    )
}