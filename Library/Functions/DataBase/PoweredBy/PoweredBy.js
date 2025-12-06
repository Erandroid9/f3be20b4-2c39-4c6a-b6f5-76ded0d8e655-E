export const POWEREDBY=(ELEMENT,COLOR)=>{

    const NAMES=document.createElement("p");

    DISPLAY(NAMES,COMPANYNAME);

    STYLED(NAMES,"text-align","center");
    STYLED(NAMES,"color",COLOR||"#000000");

    CLICK(NAMES,()=>{

        WEBSITE(ELITEWEBLINK);

    });

    ADD(ELEMENT,NAMES);

};