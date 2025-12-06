import { CLOUDSTART } from "../Connection/Cloud.js";
import { NOVA } from "../Connection/CloudStart.js";

export const DEVELOPMENTENV=()=>{

    fetch("../Project/Project.js")
        
    .then(res =>res.text())
        
    .then(data =>{
        
    localStorage.setItem('PROJECT',data);
    
        CLOUDSTART();
        
        NOVA();
        
    })
        
    .catch(error=>{console.log(error)});

};