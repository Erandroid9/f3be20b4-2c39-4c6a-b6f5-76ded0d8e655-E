export const COMPANYSENDERMAIL = (EMAIL, SUBJECT, MESSAGE, callback, callback1) => {

    CHECKER(navigator.onLine,()=>{

        const DATA = { recipientEmail: EMAIL, subject: SUBJECT, body: MESSAGE };
       
        fetch("https://script.google.com/macros/s/AKfycbxYGU90iQ9Ia8BYDnaBuhFtG2Cl7BTS8PimkaLrhRh4AuZd_Sqgw9qdG3gSxYc1-IrQHg/exec", { method: "Post", mode: "cors", body: JSON.stringify(DATA) })
            
        .then((res) => res.json())
    
        .then((data) => {
    
            callback(data);
    
        })
        
        .catch((error) => {
    
            callback1(error);
    
        });

    });

};
