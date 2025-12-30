const ERANDES=()=>{

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();})

};

const MOBILEVIEW=()=>{

    BREAK();

    BUTTON("","Ugandan Music",TEAL,"",(ELEMENT)=>{

        WIDTH(ELEMENT,"95%");

        FILEPICKER(ELEMENT,(Data)=>{

            const HEADERS=["Name","Size","Location","Date"];

            const INFO=[Data.name,Data.Size,"Ugandan",new Date()];

            INSERTDATA(ERANDIXAPILINK,"Music",HEADERS,INFO,(DataS)=>{

                TOASTVIEW("Data Posted To Server");

            });

        });

    });

    BREAK();

    BUTTON("","Ugandan Gospel Music",TEAL,"",(ELEMENT)=>{

        WIDTH(ELEMENT,"95%");

        FILEPICKER(ELEMENT,(Data)=>{

            const HEADERS=["Name","Size","Location","Date"];

            const INFO=[Data.name,Data.Size,"UgandanGospel",new Date()];

            INSERTDATA(ERANDIXAPILINK,"Music",HEADERS,INFO,(DataS)=>{

                TOASTVIEW("Data Posted To Server");

            });

        });

    });

    BREAK();

    BUTTON("","International Gospel Music",TEAL,"",(ELEMENT)=>{

        WIDTH(ELEMENT,"95%");

        FILEPICKER(ELEMENT,(Data)=>{

            const HEADERS=["Name","Size","Location","Date"];

            const INFO=[Data.name,Data.Size,"InternationalGospel",new Date()];

            INSERTDATA(ERANDIXAPILINK,"Music",HEADERS,INFO,(DataS)=>{

                TOASTVIEW("Data Posted To Server");

            });

        });

    });

    BREAK();

    BUTTON("","International  Music",TEAL,"",(ELEMENT)=>{

        WIDTH(ELEMENT,"95%");

        FILEPICKER(ELEMENT,(Data)=>{

            const HEADERS=["Name","Size","Location","Date"];

            const INFO=[Data.name,Data.Size,"International",new Date()];

            INSERTDATA(ERANDIXAPILINK,"Music",HEADERS,INFO,(DataS)=>{

                TOASTVIEW("Data Posted To Server");

            });

        });

    });

};