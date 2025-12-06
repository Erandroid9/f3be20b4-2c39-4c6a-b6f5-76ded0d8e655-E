export const TOPNAV=(HOLDER,COLOR,HEIGHT,DISPLAYED,callback)=>{

    DIV(HOLDER,"",HEIGHT,COLOR||"transparent",DISPLAYED||"inline-flex","auto","",(ELEMENT)=>{

        STYLED(ELEMENT,"position","absolute");
        STYLED(ELEMENT,"top","0px");
        STYLED(ELEMENT,"left","0px");
        STYLED(ELEMENT,"border-bottom","1px solid #cdcdcd50");
        
        callback(ELEMENT);

    });

};