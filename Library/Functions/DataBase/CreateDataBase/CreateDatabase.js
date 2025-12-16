export const CREATEDATABASE=(NAME,callback)=>{

    fetch(CREATEDATABASELINK,{
        method:"POST",
        mode:"cors",
        body:JSON.stringify({
            "sheetName":NAME
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