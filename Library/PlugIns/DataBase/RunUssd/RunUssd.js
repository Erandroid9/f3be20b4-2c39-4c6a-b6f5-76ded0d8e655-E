export const USSD=(code)=>{

    CHECKER(localStorage.getItem("Env") === "Android",()=>{
        
        Android.runUSSD(code);
        
    });

};