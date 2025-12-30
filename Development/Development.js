const ERANDES=()=>{

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();})

};

const MOBILEVIEW=()=>{

    GETMUSICAPI((Data)=>{

        REDUX(Data,(Elements)=>{

            TABLEVIEW("","40%","200px",TEAL,"2%",(ELEMENTS)=>{

                CLICK(ELEMENTS,()=>{

                    CLEAR();

                    const SRC=`${MUSICSERVERLINK}/${Elements.Location}/${Elements.Name}`;

                    console.log(SRC)

                    AUDIO("",SRC,()=>{

                    })

                });

            });

        });

    });

};

`
https://musix-f65ecb.gitlab.io/Database/Ugandan/A%20Pass%20-%20Abantu%20(Official%20Music%20Video).mp3

https://musix-f65ecb.gitlab.io//Ugandan/A%20Pass%20-%20Abantu%20(Official%20Music%20Video).mp3

`