export const APPMODE=(COLOR)=>{

    const BODY=document.querySelector('body');

    BODY.style.background=COLOR||"#000000";

    CHECKER(localStorage.getItem("Environment") === "Production",()=>{

    });
    
};