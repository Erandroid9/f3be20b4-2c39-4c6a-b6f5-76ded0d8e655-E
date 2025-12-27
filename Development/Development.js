const ERANDES=()=>{

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();})

};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Manager",(ELEMENTS)=>{

        });

        RIGHTTEXTVIEW(ELEMENT,"New",(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE(" ",MOBILECREATEPROJECTVIEW,"MOBILEVIEW");

            });

        });

    },(ELEMENT)=>{

    });

};

const MOBILECREATEPROJECTVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE("",MOBILEVIEW,"MOBILEVIEW");

            });

        });

        RIGHTTEXTVIEW(ELEMENT,"Create",(ELEMENTS)=>{

        });

    },(ELEMENT)=>{



    });

};

const DESKTOPVIEW=()=>{

};