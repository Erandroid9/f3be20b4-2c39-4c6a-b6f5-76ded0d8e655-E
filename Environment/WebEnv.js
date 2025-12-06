import { CLOUDSTART } from "../Connection/Cloud.js";
import { NOVA } from "../Connection/CloudStart.js";
import { BUILDLINK } from "../Library/Constants/DataBase/BuildLink/BuildLink.js";

export const WEBENV=(PATH)=>{

    fetch(BUILDLINK+PATH)
    .then(res =>res.text())
    .then(data =>{

        localStorage.setItem("projectPath",PATH);

        localStorage.setItem('PROJECT',data);

        CLOUDSTART();

        NOVA();

    })
    .catch(error=>{console.log(error)}
    );

};