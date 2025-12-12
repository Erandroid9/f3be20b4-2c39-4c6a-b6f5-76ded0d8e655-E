const CONDITION=(TERM,CallBack,CallBackOne)=>{

    if (TERM) {

        CallBack();
        
    } else {
        
        CallBackOne();

    };

};

const AUTORUN=()=>{

    CONDITION(localStorage.getItem("Env") === "Dev",()=>{

        import("./Connection/Connection.js").then(o=>typeof o.CONNECTIONS=="function"&&o.CONNECTIONS()).catch(console.error);
   
    },()=>{

        import("https://erandroid9.github.io/Eliton/Connection/Connection.js").then(o=>typeof o.CONNECTIONS=="function"&&o.CONNECTIONS()).catch(console.error);
   
    });

};

const DISPLAY=(ELEMENT,DATA)=>{

    const BODY=document.querySelector("body");

    CONDITION(ELEMENT,()=>{

        ELEMENT.innerHTML=DATA;

    },()=>{

        BODY.innerHTML=DATA;

    });

};

const CHECKER=()=>{

};
