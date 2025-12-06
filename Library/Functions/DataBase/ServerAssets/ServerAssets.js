export const SERVERASSETS=(Data,callback)=>{

    CONDITION(localStorage.getItem("Environment") === "Development" ,()=>{

        const LinkBack="../../Assets/"+Data;

        callback(LinkBack);

    },()=>{

        CHECKER(navigator.onLine,()=>{

            const LinkBack="https://erandroid9.github.io/Eliton/Assets/"+Data;
    
            callback(LinkBack);

        });

    });

};