const ERANDES=()=>{

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();})

};

const MOBILEVIEW=()=>{

    GETMUSICAPI((Data)=>{

        REDUX(Data,(Elements)=>{

            console.log(Elements);

        });

    });

};