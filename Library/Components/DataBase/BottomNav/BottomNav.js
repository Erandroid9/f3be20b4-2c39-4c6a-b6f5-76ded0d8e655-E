export const BOTTOMNAV=(HOLDER,COLOR,HEIGHT,DISPLAYED,callback)=>{

    DIV(HOLDER,"",HEIGHT,COLOR||"transparent",DISPLAYED||"inline-flex","auto","",(ELEMENT)=>{

        STYLED(ELEMENT,"position","absolute");
        STYLED(ELEMENT,"bottom","0px");
        STYLED(ELEMENT,"left","0px");
        
        callback(ELEMENT);

    });

};