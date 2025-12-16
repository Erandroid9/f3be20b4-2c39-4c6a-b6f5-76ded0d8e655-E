export const CREATETABLE=(URL,NAME,callback)=>{

    fetch(CREATETABLELINK,{
        method:"POST",
        mode:"cors",
        body:JSON.stringify({
            "sheetName":NAME,
            "spreadsheetUrl":URL
        })
    })
    .then(res =>res.json())
    .then(data=>{
        callback(data)
    })
    .catch(error =>{
        console.log(error)
    });

};