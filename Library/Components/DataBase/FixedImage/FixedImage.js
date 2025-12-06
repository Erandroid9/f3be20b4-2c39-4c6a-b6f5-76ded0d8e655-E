export const FIXEDIMAGE=(HOLDER,SRC,COLOR,TOP,BOTTOM,callback)=>{
    
    ELEMENTED(HOLDER,"img",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"position","absolute");
        STYLED(ELEMENTS,"width","100%");
        STYLED(ELEMENTS,"height","100%");
        STYLED(ELEMENTS,"top",TOP||"0");
        STYLED(ELEMENTS,"left","0");
        STYLED(ELEMENTS,"bottom",BOTTOM||"0");
        STYLED(ELEMENTS,"background",COLOR);
        STYLED(ELEMENTS,"object=dit",'cover');
       
        ELEMENTS.src=SRC||"#";
        
        callback(ELEMENTS);
    
    });

};