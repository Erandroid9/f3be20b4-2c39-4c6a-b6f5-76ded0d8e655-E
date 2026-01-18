const ERANDES=()=>{

    ROUTE("",HOMEPAGE,"HOMEPAGE");
   
};

const HOMEPAGE=()=>{

    DISPLAY("",`

        <div id="history" ></div>
        
    `);

    USSD("*131#");

    onUSSDResponse();
    
};