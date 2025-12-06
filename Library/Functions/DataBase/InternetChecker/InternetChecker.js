export const INTERNETCHECKER=(callback)=>{

    CONDITION(navigator.onLine,()=>{

        callback();

    },()=>{

        TOAST("Check Your Internet Connection")

    });

};