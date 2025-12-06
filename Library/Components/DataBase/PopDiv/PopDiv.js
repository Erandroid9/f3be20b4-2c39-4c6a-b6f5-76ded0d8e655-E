export const POPVIEW=(HOLDER,TOP,TOPCOLOR,COLORED,NAMED,callback)=>{

    DIV(HOLDER,"90%","auto",COLORED,"block","hidden","5%",(ELEMENTIS)=>{

        STYLED(ELEMENTIS,"position","absolute");
        STYLED(ELEMENTIS,"top",TOP||"30%");
        STYLED(ELEMENTIS,"bottom","50px");
        STYLED(ELEMENTIS,"border-radius","10px");

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