const ERANDES=()=>{

    VIEWCONTROLLER();

};

const VIEWCONTROLLER=()=>{

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();});

};

const MOBILEVIEW=()=>{

    ACCOUNTEMAILCHECKER("","Erandix Manager",ERANDIXMANAGERLINK,()=>{

        MOBILEHOMEPAGE();

    });

};

const MOBILEHOMEPAGE=()=>{

    HEADERVIEW(()=>{

    },()=>{

    });

};

const DESKTOPVIEW=()=>{

    ACCOUNTEMAILCHECKER("","Erandix Manager",ERANDIXMANAGERLINK,()=>{

        DESKTOPHOMEPAGE();

    });

};

const DESKTOPHOMEPAGE=()=>{

    HEADERVIEW((ELEMENT)=>{

    },(ELEMENT)=>{

    });

};