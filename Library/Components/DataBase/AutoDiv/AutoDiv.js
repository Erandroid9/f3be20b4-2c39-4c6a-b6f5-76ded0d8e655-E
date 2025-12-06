export const AUTODIV=(HOLDER,COLOR,TOP,BOTTOM,callback)=>{

    DIV(HOLDER,"100%","auto",COLOR||"transparent","block","auto","auto",(ELEMENTS)=>{

        STYLED(ELEMENTS,"position","absolute");
        STYLED(ELEMENTS,"top",TOP||"0");
        STYLED(ELEMENTS,"bottom",BOTTOM||"0");

        callback(ELEMENTS);

    });

};