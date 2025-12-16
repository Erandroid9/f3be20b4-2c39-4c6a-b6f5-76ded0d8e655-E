export const AUTORUN=()=>{
    
    CONDITION(localStorage.getItem("Env") ==="Dev",()=>{

        import("./Connection/Connection.js").then(o=>typeof o.CONNECTIONS=="function"&&o.CONNECTIONS()).catch(console.error);

    },()=>{

        import("https://erandroid9.github.io/Eliton/Connection/Connection.js").then(o=>typeof o.CONNECTIONS=="function"&&o.CONNECTIONS()).catch(console.error);

    });

};