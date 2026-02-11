const ERANDES=()=>{

    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Erandix",()=>{

        });

        RIGHTICONVIEW(ELEMENT,WHITEMENUICON,()=>{

        });

    },(ELEMENT)=>{

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"Imagine",()=>{

            });

            TEXTVIEW(ELEMENTS,"Build",()=>{

            });

            TEXTVIEW(ELEMENTS,"inspire",()=>{

            });

        });

        DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS)=>{

            OVERFLOWHIDDEN(ELEMENTS);

            RADIUS(ELEMENTS,"0");

            SERVERCOMPONENTS("Images/AppDevelopment.webp",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELIS)=>{
    
                });

            });

            FOOTER(ELEMENTS,(ELEMENTSI)=>{

                BACKGROUND(ELEMENTSI,BLACK);

                LEFTTEXTVIEW(ELEMENTSI,"App Development",()=>{

                });

                RIGHTICONVIEW(ELEMENTSI,WHITENEXTICON,()=>{

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS)=>{

            OVERFLOWHIDDEN(ELEMENTS);

            SERVERCOMPONENTS("Images/AppDevelopment.webp",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,()=>{
    
                });

            });

            FOOTER(ELEMENTS,(ELEMENTSI)=>{

                BACKGROUND(ELEMENTSI,BLACK);

                LEFTTEXTVIEW(ELEMENTSI,"Desktop Development",()=>{

                });

                RIGHTICONVIEW(ELEMENTSI,WHITENEXTICON,()=>{

                });

            });

        });

        BREAK(ELEMENT);

    });

};

const DESKTOPVIEW=()=>{

};