export const MENUNAV=(HOLDER,SIDE,TOP,COLORED,TOPCOLOR,NAMED,callback)=>{

    DIV(HOLDER,TOP||"100%","auto",COLORED,"block","hidden","auto",(ELEMENTIS)=>{

        STYLED(ELEMENTIS,"position","absolute");
        STYLED(ELEMENTIS,"top","0");
        STYLED(ELEMENTIS,"bottom","0");
        STYLED(ELEMENTIS,"border-radius","0");

        CONDITION(SIDE === "L",()=>{

            STYLED(ELEMENTIS,"left","0");

        },()=>{

            STYLED(ELEMENTIS,"right","0");

        });

        HEADER(ELEMENTIS,TOPCOLOR||"transparent",(ELSESE)=>{

            LEFTTEXT(ELSESE,"h1","#FFFFFF","2%","20px",NAMED,()=>{

            });

            RIGHTIMAGE(ELSESE,WHITECLOSEICON,"","20px","20px","2%",(ELES)=>{

                CLICK(ELES,()=>{

                    STYLED(ELEMENTIS,"display","none");

                });

            });

        });

        DIV(ELEMENTIS,"100%","auto","transparent","block","auto","auto",(ELEMENTISA)=>{

            STYLED(ELEMENTISA,"position","absolute");
            STYLED(ELEMENTISA,"top","50px");
            STYLED(ELEMENTISA,"bottom","0");
            STYLED(ELEMENTISA,"border-top","1px solid #cdcdcd");

            callback(ELEMENTISA);

        });
                            
    });

};