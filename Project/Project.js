const RUN=()=>{

    DISPLAY("",`

        <header>

        <p>?</p>
        
        </header>

        <footer>

            <p>Home</p>

            <p>News</p>

            <p id="User">Login</p>
        
        </footer>

    `);

    PASSDATA("#User",!CONNECTED,"User");

    CLICKED("#User",HELLO);

};

const HELLO=()=>{

    DISPLAY("",`

        <Header>

            <p class="LeftText">Back</p>

            <p class="RightText">Login</p>
        
        </header>

    `);

    PASSDATA(".RightText",!CONNECTED,"User");

    CLICKED(".LeftText",RUN);

};