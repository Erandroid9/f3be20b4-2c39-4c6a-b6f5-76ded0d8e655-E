export const CREATEDATABASE = (NAME, callback, callback1) => {

    CHECKER(navigator.onLine,()=>{

        const DATA = { sheetName: NAME };
    
        fetch(CREATEDATABASELINK, { method: "Post", mode: "cors", body: JSON.stringify(DATA) })
        .then((res) => res.json())
    
        .then((data) => {
    
            callback(data);
    
        })
    
        .catch((error) => {
    
            callback1(error);
    
        });

    });
    
};