export const POSTTEXTPACKAGE = (LINK, POLICY, DATA, callback, callback1) => {

    CHECKER(navigator.onLine,()=>{

        fetch(LINK, { method: "Post", mode: POLICY || "no-cors", body: JSON.stringify(DATA) })
        
        .then((res) => res.text())
        
        .then((data) => {
          
            callback(data);
    
        })
    
        .catch((error) => {
    
            callback1(error);
    
        });

    });
    
};