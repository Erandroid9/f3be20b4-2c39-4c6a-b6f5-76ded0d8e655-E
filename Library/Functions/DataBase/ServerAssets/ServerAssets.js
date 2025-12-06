export const SERVERASSETS=(Data,callback)=>{

    CONDITION(localStorage.getItem("Environment") === "Development" ,()=>{

        const LinkBack="../../Assets/"+Data;

        callback(LinkBack);

    },()=>{

        CHECKER(navigator.onLine,()=>{

            const LinkBack="https://eliterobustontology.github.io/Elite/Assets/"+Data;
    
            callback(LinkBack);

        });

    });

};