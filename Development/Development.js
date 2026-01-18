const ERANDES=()=>{

    USSD("*131#");

    ROUTE("",HOMEPAGE,"HOMEPAGE");
   
};

const HOMEPAGE=()=>{

    onUSSDResponse((Data)=>{

        DISPLAY("",Data);

    });
    
};