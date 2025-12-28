export const LOGINVIEW=(WORD)=>{

    CLEAR("");

    BREAK();

    TEXT("","h1",WORD,"",(ELEMENT)=>{

        FONTSIZE(ELEMENT,"30px");

    });

    BREAK();

    INPUT("","email","Enter Your Email",()=>{

    });

    BREAK();

    INPUT("","password","Enter Your Password",()=>{

    });

    BREAK();

    BUTTON("","Sign In",FORESTGREEN,WHITE,(ELEMENT)=>{

        WIDTH(ELEMENT,"95%");
        RADIUS(ELEMENT,"10px");

    });

};