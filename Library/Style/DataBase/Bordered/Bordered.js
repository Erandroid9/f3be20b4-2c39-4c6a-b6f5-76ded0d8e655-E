export const BORDERED=(ELEMENT,COLORS,SIZE)=>{

    STYLED(ELEMENT,"border",`${SIZE||"1px"} solid ${COLORS||"#FFFFFF"}`);

};