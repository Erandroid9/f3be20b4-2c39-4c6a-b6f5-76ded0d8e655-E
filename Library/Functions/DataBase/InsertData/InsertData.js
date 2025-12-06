export const INSERTDATA=(Url,Name,headers,Info,callback)=>{

    CHECKER(navigator.onLine,()=>{

        const DATA={
            "spreadsheetUrl":Url,
            "sheetName":Name,
            "Headers":headers,
            "Data":Info
        };
    
        fetch(INSERTDATALINK,{
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
