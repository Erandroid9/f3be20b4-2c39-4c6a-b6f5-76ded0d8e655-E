import { LOADERPAGE } from "../Library/Pages/Loader.js";
import { CLOUDCONNECTION } from "./CloudConnection.js";

export const CONNECTIONS=()=>{

    const ELITONCONFIG=(t,e)=>{fetch(t).then((t=>t.text())).then((t=>{localStorage.setItem(e,t)})).catch((t=>console.log(t)))};

    const CALLELITONCONFIG=(t,e,c)=>{fetch(t).then((t=>t.text())).then((t=>{localStorage.setItem(e,t),c()})).catch((t=>console.log(t)))};
    
    if (!localStorage.getItem("Packaged")) {

        LOADERPAGE();
            
    };

    if (localStorage.getItem("Env") ==="Dev" ) {

        ELITONCONFIG("../Library/Services/StyleSheet/Eliton.css","ERANDIS");
        ELITONCONFIG("../Library/Services/StyleSheet/ElitonTemp.css","ERANDISTEMP");
        ELITONCONFIG("../Library/Services/StyleSheet/ElitonClasses.css","ERANDISCLASS");
        ELITONCONFIG("../Library/Services/StyleSheet/ElitonElements.css","ERANDISELEMS");

        ELITONCONFIG("../Library/Services/JavaScript/Eliton.js","ERANDS");
        ELITONCONFIG("../Library/Services/JavaScript/ElitonIcons.js","ERANDIA");
        ELITONCONFIG("../Library/Services/JavaScript/ElitonPlugs.js","ERANDIN");
        ELITONCONFIG("../Library/Services/JavaScript/ElitonTemps.js","ERANDTEMP");
        ELITONCONFIG("../Library/Services/JavaScript/Constants.js","ERANDCONSTANTS");

        ELITONCONFIG("../Library/Server/CloudSync.js","ERANDCONFIG");

        CLOUDCONNECTION();
 
    } else {

        ELITONCONFIG("https://erandroid9.github.io/Eliton/Library/Services/StyleSheet/Eliton.css","ERANDIS");
        ELITONCONFIG("https://erandroid9.github.io/Eliton/Library/Services/StyleSheet/ElitonTemp.css","ERANDISTEMP");
        ELITONCONFIG("https://erandroid9.github.io/Eliton/Library/Services/StyleSheet/ElitonClasses.css","ERANDISCLASS");
        ELITONCONFIG("https://erandroid9.github.io/Eliton/Library/Services/StyleSheet/ElitonElements.css","ERANDISELEMS");

        ELITONCONFIG("https://erandroid9.github.io/Eliton/Library/Services/JavaScript/Eliton.js","ERANDS");
        ELITONCONFIG("https://erandroid9.github.io/Eliton/Library/Services/JavaScript/ElitonPlugs.js","ERANDIN");
        ELITONCONFIG("https://erandroid9.github.io/Eliton/Library/Services/JavaScript/ElitonTemps.js","ERANDTEMP");
        ELITONCONFIG("https://erandroid9.github.io/Eliton/Library/Services/JavaScript/Constants.js","ERANDCONSTANTS");

        ELITONCONFIG("https://erandroid9.github.io/Eliton/Library/Server/CloudSync.js","ERANDCONFIG");

        CALLELITONCONFIG("https://erandroid9.github.io/Eliton/Library/Services/JavaScript/ElitonIcons.js","ERANDIA",()=>{
            CLOUDCONNECTION();
        });

    };

};