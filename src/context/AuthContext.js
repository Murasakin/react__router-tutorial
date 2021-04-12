import React from 'react';

export let auth = {
    isLogged: false, 
    userName: "",
    redirected: false,
    logIn: function(name, cb) {
        this.isLogged = true;
        this.userName = name == null ? "admin" : name;
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