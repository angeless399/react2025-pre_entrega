import { useContext } from "react"
import { AuthContext } from "./AuthContext"

export const useAuthcontext = () => {
    return useContext(AuthContext)
}