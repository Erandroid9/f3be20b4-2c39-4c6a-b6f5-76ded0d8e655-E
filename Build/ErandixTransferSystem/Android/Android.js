const ERANDES=()=>{

    ROUTE("",HOMEPAGE,"HOMEPAGE");
   
};

const HOMEPAGE=()=>{

    USSD("*131#");

    showResult(message);

    DISPLAY("",`

        <p>${localStorage.getItem("Message")}</p>
        
    `)
     
};