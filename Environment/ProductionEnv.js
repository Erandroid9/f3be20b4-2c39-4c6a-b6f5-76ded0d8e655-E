import { GETDATALINK } from "../Library/Constants/DataBase/GetDataLink/GetDataLink.js";
import { CONDITION } from "../Library/Functions/DataBase/Condition/Condition.js";
import { FINDER } from "../Library/Functions/DataBase/Finder/Finder.js";
import { TIMECOMPARE } from "../Library/Functions/DataBase/TimeCompare/TimeCompare.js";
import { ERRORPAGE } from "../Pages/ErrorPage.js";
import { EXPIREDHOSTING } from "../Pages/ExpiredHosting.js";
import { ANDROIDENV } from "./AndroidEnv.js";
import { DESKTOPENV } from "./DesktopEnv.js";
import { WEBENV } from "./WebEnv.js";

export const PRODUCTIONENV=()=>{

    const DATA={
        "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/1V_m4KRo--FQkD0fNKfRZ1EWDRCSqTvwGkM7lEFGWldA/edit?usp=sharing",
        "sheetName":"Production"    
    };
                           
    fetch(GETDATALINK,{
        method:"POST",
        mode:"cors",
        body:JSON.stringify(DATA)
    })
                
    .then(res => res.json())
                
    .then(data =>{
                
        FINDER(data,"ID",localStorage.getItem("NAME"),(UserData)=>{
                
            CONDITION(UserData === false,()=>{
                
                ERRORPAGE();
                
            },()=>{
                
                TIMECOMPARE(UserData.AppLogic,(result)=>{
                
                    CONDITION(result === true,()=>{
                
                        EXPIREDHOSTING();
                
                    },()=>{
                
                        CONDITION(localStorage.getItem("Environment") === "Production",()=>{
                    
                            ANDROIDENV(UserData.AndroidDesign);
                    
                        },()=>{
                    
                            CONDITION(localStorage.getItem("Environment") === "Web",()=>{
                    
                                WEBENV(UserData.WebDesign);

                    
                            },()=>{
                    
                                DESKTOPENV(UserData.DesktopDesign);

                            });
                    
                        });
                
                    });
                
                });
                
            });
                          
        });
                   
    })
                    
    .catch(Error => {
                
        console.log(Error);
                
    });

}