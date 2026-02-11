export const LEFTTEXTVIEW=(HOLDER,WORD,callBack)=>{

    TEXT(HOLDER,"h1",WORD,WHITE,(ELEMENTS)=>{

        FONTSIZE(ELEMENTS,""); 
        MARGINLEFT(ELEMENTS,"2%");

        callBack(ELEMENTS);

    });

};