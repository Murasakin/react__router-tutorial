import React from "react";

const auth = {
    isLogged: false,
    userName: "admin"
}

const AuthContext = React.createContext({auth})

export default AuthContext;