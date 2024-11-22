import { createContext } from "react"

// eslint-disable-next-line react/prop-types
const AuthProvider = ({Children}) => {
    const AuthContext = createContext()
    return (
        <AuthContext.Provider>
            {Children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
