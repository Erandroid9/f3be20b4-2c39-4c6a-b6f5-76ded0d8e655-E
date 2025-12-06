export const BREAK=(ELEMENT)=>{

    let BR=document.createElement("br");

    const BODY=document.querySelector('body');

    CONDITION(ELEMENT,()=>{

        ELEMENT.append(BR);

    },()=>{

        BODY.append(BR);

    });

};