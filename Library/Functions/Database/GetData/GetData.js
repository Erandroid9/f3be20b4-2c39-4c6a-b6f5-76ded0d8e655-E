export const GETDATA=(Url,Name,callback)=>{

    CHECKER(navigator.onLine,()=>{

        const DATA={
            "spreadsheetUrl":Url,
            "sheetName":Name    
        };
       
        fetch(GETDATALINK,{
            method:"POST",
            mode:"cors",
            body:JSON.stringify(DATA)
        })
    
        .then(res => res.json())
    
        .then(data =>{
    
            callback(data);
    
        })
        
        .catch(Error => console.log(Error))

    });

};