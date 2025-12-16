import { GETDATALINK } from "../../../Constants/DataBase/GetDataLink/GetDataLink.js";
import { DISPLAYLOADER } from "../../../Pages/DataBase/DisplayLoader/DisplayLoader.js";

export const WEBENVIRONMENT=()=>{

    DISPLAYLOADER("75%");

    const MAIN="https://docs.google.com/spreadsheets/d/1V_m4KRo--FQkD0fNKfRZ1EWDRCSqTvwGkM7lEFGWldA/edit?usp=sharing";

    const CLOUD="https://erandroid9.github.io/Eliton/";

    fetch(GETDATALINK,{
        method:"POST",
        mode:"cors",
        body:JSON.stringify({
            "sheetName":"Production",
            "spreadsheetUrl":MAIN
        })
    })
    .then(res =>res.json())
    .then(data=>{

        DISPLAYLOADER("85%");

        data.forEach(element => {

            if (localStorage.getItem("Config") === element.ID ) {

                DISPLAYLOADER("95%");
                
                fetch(CLOUD+Web)
                
                .then(res =>res.text())
                
                .then(data =>{
                
                    DISPLAYLOADER("100%");
                
                    localStorage.setItem("PROJECT",data);
                
                    if (!localStorage.getItem("Packaged")) {
                
                        localStorage.setItem("Packaged",new Date())
                
                        location.reload();
                
                        return;
                
                    };
                
                })
                
                .catch(error=>{console.log(error)})
                
            } else {
                
            }

        });
        
    })
    .catch(error =>{
        console.log(error)
    });

};