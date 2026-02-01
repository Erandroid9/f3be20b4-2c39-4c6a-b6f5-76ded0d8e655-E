export const SERVERCOMPONENTS=(PATH,CALLBACK)=>{

    CONDITION(localStorage.getItem("Env") === "Dev",()=>{

        CALLBACK("https://erandroid9.github.io/Eliton/Library/Assets/DataBase/Raw/Images/"+PATH);

    },()=>{

        CALLBACK("https://erandroid9.github.io/Eliton/Library/Assets/DataBase/Raw/Images/"+PATH);

    });

};