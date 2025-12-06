export const FLATNAV=(HOLDER,COLOR,WIDTH,HEIGHT,DISPLAYED,TOP,callback)=>{

    DIV(HOLDER,WIDTH||"",HEIGHT,COLOR||"transparent",DISPLAYED||"inline-flex","auto","",(ELEMENT)=>{

        STYLED(ELEMENT,"bottom","0px");
        STYLED(ELEMENT,"left","0px");
        STYLED(ELEMENT,"top",TOP||"2%");
        
        callback(ELEMENT);

    });

};