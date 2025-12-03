import { Navigate } from "react-router-dom"
import { useAuthcontext } from "../../context/AuthContext/UseAuthContext"
import { Children } from "react"

export const RutaProtegida = ({ children }) => {
    const { user } = useAuthcontext()

    if(!user) {
        return <Navigate to="/" replace />
    }
    
    return children
}