export const USSD=(code)=>{

    CHECKER(localStorage.getItem("Env") === "Android",()=>{
        
        if (window.AndroidInterface && AndroidInterface.runUSSD) {
            AndroidInterface.runUSSD(code);
        } else {
            alert("AndroidInterface not available!");
        }
        
    });

};