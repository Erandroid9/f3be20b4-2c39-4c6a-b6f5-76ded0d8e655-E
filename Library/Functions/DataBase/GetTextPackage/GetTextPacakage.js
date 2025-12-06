export const GETTEXTPACKAGE = (LINK, POLICY, callback, callback1) => {

    CHECKER(navigator.onLine,()=>{

        fetch(LINK, { method: "Get", mode: POLICY || "no-cors" })
    
        .then((res) => res.text())
    
        .then((data) => {
    
            callback(data);
    
        })
    
        .catch((error) => {
    
            callback1(error);
    
        });

    });

};