export const LEFTICONVIEW=(HOLDER,SOURCE,callBack)=>{

    IMAGE(HOLDER,"20px","20px",SOURCE,"",(ELEMENTS)=>{

        MARGINLEFT(ELEMENTS,"2%");

        callBack(ELEMENTS);

    });

};