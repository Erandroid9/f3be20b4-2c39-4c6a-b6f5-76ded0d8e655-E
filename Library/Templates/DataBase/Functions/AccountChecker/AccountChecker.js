export const ACCOUNTEMAILCHECKER=(CALLBACK,CALLBACKTWO)=>{

    CONDITION(localStorage.getItem("UserCode"),()=>{

        CALLBACK();

    },()=>{

        CALLBACKTWO();

    });

};