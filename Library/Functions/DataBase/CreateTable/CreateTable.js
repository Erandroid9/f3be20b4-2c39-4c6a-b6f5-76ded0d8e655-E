export const CREATETABLE = (LINK, NAME, callback, callback1) => {

    CHECKER(navigator.onLine,()=>{

        const DATA = { sheetName: NAME, spreadsheetUrl: LINK };
    
        fetch(CREATETABLELINK, { method: "Post", mode: "cors", body: JSON.stringify(DATA) })
            
        .then((res) => res.json())
           
        .then((data) => {
               
            callback(data);
           
        })
            
        .catch((error) => {
                
            callback1(error);
            
        });

    });

};