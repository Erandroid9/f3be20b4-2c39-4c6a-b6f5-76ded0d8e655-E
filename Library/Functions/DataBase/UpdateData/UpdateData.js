export const UPDATEDATA=(Url,Name,headers,Info,callback)=>{

    CHECKER(navigator.onLine,()=>{

        const DATA={
            "action":"update",
            "spreadsheetUrl":Url,
            "sheetName":Name,
            "id":headers,
            "data":Info
        };
    
        fetch(UPDATEDATALINK,{
            method:"Post",
            mode:"cors",
            body:JSON.stringify(DATA)
        })
    
        .then(res => res.json())
    
        .then(data =>{
    
            callback(data);
    
        })
        
        .catch(Error => console.log(Error)
        )

    });

};