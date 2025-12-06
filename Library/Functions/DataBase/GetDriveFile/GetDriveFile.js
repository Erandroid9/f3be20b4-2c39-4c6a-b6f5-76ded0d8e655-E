export const GETDRIVEFILE = (DATA, callback, callback1) => {

    CHECKER(navigator.onLine,()=>{

        fetch(GETDRIVELINK, { method: "Post", body: JSON.stringify({ fileId: DATA }) })
            
        .then((res) => res.text())
            
        .then((data) => {
                
            callback(data);
            
        })
           
        .catch((error) => {
    
                
            callback1(error);
            
        });

    });

};