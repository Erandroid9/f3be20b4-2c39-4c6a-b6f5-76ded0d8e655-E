const ERANDES=()=>{

    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    FOOTERVIEW((ELEMENT)=>{

        sendSms("0782625561","The Code is 28209");

        Resulted(ELEMENT);

        HIDER(5000,()=>{

            DISPLAY(ELEMENT,sessionStorage.getItem("AndroidSms"))

        });

        HIDER(5000,()=>{

            readSms();

            Resulted(ELEMENT);
            
        });

        HIDER(10000,()=>{

            runUssd("*165*8*1*12019#");

            Resulted(ELEMENT);
            
        });

    },(ELEMENT)=>{

        ICONVIEW(ELEMENT,WHITEHOMEICON,()=>{

        });

        ICONVIEW(ELEMENT,WHITEHOMEICON,()=>{

        });

        ICONVIEW(ELEMENT,WHITEHOMEICON,()=>{

        });

    });

};

const DESKTOPVIEW=()=>{



};
