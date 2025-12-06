export const BUTTONIMAGE=(HOLDER,WIDTH,HEIGHT,COLOR,WORDCOLOR,RADIUS,WORD,MARGIN,TYPE,WORDMARGIN,SIZE,SRC,IMAGEHEIGHT,IMAGEWIDTH,IMAGEMARGIN,callback)=>{

    ELEMENTED(HOLDER,"button",(ELEMENTS)=>{
    
        STYLED(ELEMENTS,"position","relative");
        STYLED(ELEMENTS,"width",WIDTH||"100%");
        STYLED(ELEMENTS,"height",HEIGHT||"50px");
        STYLED(ELEMENTS,"background",COLOR||"#cdcdcd");
        STYLED(ELEMENTS,"border-radius",RADIUS||"block");
        STYLED(ELEMENTS,"border","none");
        STYLED(ELEMENTS,"outline","none");
        STYLED(ELEMENTS,"display","inline-flex");
        STYLED(ELEMENTS,"margin",MARGIN||"auto");

        LEFTTEXT(ELEMENTS,TYPE,WORDCOLOR,WORDMARGIN,SIZE,WORD,()=>{

        });

        RIGHTIMAGE(ELEMENTS,SRC,"transparent",IMAGEHEIGHT,IMAGEWIDTH,IMAGEMARGIN,()=>{

        });

        callback(ELEMENTS);
        
    });

};