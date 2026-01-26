export const LOGINCHECKER=(CALLBACK)=>{

    CONDITION(localStorage.getItem(""),()=>{

        CALLBACK();

    },()=>{

        TOASTVIEW("Login To Access Feature!");

    });

};