export const FOOTERVIEW=(HOLDERS,VIEWCOLOR,callback,HEADERCOLOR,callbackTwo)=>{

    CLEAR(HOLDERS);

    DIV(HOLDERS,"100%","auto",HEADERCOLOR,"block","auto","auto",(ELEMENT)=>{

        STYLED(ELEMENT,"position","absolute");
        STYLED(ELEMENT,"top","0px");
        STYLED(ELEMENT,"bottom","50px");

        callback(ELEMENT);

    });

    FOOTER(HOLDERS,VIEWCOLOR,(ELEMENT)=>{

        callbackTwo(ELEMENT);
        
    });

};