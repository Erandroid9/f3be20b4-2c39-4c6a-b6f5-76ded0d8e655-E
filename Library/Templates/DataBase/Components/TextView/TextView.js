export const TEXTVIEW=(HOLDER,WORD,callBack)=>{

    TEXT(HOLDER,"h1",WORD,WHITE,(ELEMENTS)=>{

        FONTSIZE(ELEMENTS,""); 
        callBack(ELEMENTS);

    });

};