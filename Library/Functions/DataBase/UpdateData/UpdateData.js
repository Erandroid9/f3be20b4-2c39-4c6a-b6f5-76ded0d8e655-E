export const UPDATEDATA=(URL,NAME,ID,INFO,callback)=>{

    fetch(UPDATEDATALINK,{
        method:"POST",
        mode:"cors",
        body:JSON.stringify({
            "action":"update",
            "sheetName":NAME,
            "spreadsheetUrl":URL,
            "id":ID,
            "data":INFO
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