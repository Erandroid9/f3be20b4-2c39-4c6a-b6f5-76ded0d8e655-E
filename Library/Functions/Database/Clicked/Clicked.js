export const CLICKED=(ELEMENT,callback)=>{

    let ELEMENTS=document.querySelector(ELEMENT);

    ELEMENTS.addEventListener("click",()=>{callback()});
    
};