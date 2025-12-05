export const GETDATA=(LINK,callback)=>{

    fetch(LINK,{
        method:"Get"
    })

    .then(res=>res.json())
    
    .then(data =>{

        callback(data);

    })
    
    .catch(error =>{

        console.log(error);

    });

};