export const EMAILSENDER = (EMAIL, SUBJECT, MESSAGE, callback, callback1) => {

    CHECKER(navigator.onLine,()=>{

        const DATA = { recipientEmail: EMAIL, subject: SUBJECT, body: MESSAGE };
    
        fetch(EMAILSENDERLINK, { method: "Post", mode: "cors", body: JSON.stringify(DATA) })
            
        .then((res) => res.json())
            
        .then((data) => {
                
            callback(data);
            
        })
            
        .catch((error) => {
                
            callback1(error);
            
        });

    });

};