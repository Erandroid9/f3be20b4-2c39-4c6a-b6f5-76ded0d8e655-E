export const INSERTDATA=(URL,NAME,HEADERS,INFO,callback)=>{

    fetch(INSERTDATALINK,{
        method:"POST",
        mode:"cors",
        body:JSON.stringify({
            "sheetName":NAME,
            "spreadsheetUrl":URL,
            "Headers":HEADERS,
            "Data":INFO
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