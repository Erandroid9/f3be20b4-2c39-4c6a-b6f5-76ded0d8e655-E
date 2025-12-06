export const LOGINCHECKER=(callback)=>{

    CONDITION(localStorage.getItem("UserData"),()=>{

        callback();

    },()=>{

        TOAST("Login To Access Feature!");

    });

};