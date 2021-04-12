import React from 'react';

export let auth = {
    isLogged: false, 
    userName: "",
    redirected: false,
    logIn: function(cb) {
        this.isLogged = true;
        this.userName = "admin";
        setTimeout(cb, 500);
    },
    logOut: function(cb) {
        this.isLogged = false;
        this.userName = "";
        this.redirected = true;
        setTimeout(cb, 500);
    }
};

export const AuthContext = React.createContext(auth);