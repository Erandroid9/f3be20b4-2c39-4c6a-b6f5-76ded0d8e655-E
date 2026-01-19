const ERANDES=()=>{

    ROUTE("",HOMEPAGE,"HOMEPAGE");
   
};

const HOMEPAGE=()=>{

    USSD("*131#");

    USSDDISPLAY("");
     
};