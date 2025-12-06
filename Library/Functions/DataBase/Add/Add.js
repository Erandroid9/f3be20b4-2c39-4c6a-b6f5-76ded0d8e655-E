export const ADD=(ELEMENT,DATA)=>{

    const BODY=document.querySelector('body');

    CONDITION(ELEMENT,()=>{

        ELEMENT.append(DATA);

    },()=>{

        BODY.append(DATA);

    });

};