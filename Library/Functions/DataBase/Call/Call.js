export const CALL=(NUMBER)=>{

    CONDITION(localStorage.getItem("Environment") === "Production",()=>{

        Android.runUSSD(NUMBER);

    },()=>{

        window.location.href = "tel:"+NUMBER;

    });

};