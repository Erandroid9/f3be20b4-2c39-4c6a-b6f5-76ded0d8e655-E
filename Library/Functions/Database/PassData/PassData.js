export const PASSDATA=(ELEMENT,TERM,DATAONE)=>{

    let ELEMENTS=document.querySelector(ELEMENT);

    CHECKER(TERM,()=>{

        DISPLAY(ELEMENTS,DATAONE);

    });
    
};