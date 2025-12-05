export const HOSTINGCHECKER=()=>{

    CHECKER(localStorage.getItem("Config") !== "True",()=>{

        CHECKER(localStorage.getItem("SetUp") !== "True",()=>{

            NOSITE();

        });

    });

};

const NOSITE=()=>{

    DISPLAY("",`

        <h1 class="NositeAlert">Alert</h1>

        <p>The Service Your Trying to Access Is No Longer Existing On This NetWork</p>

        <h3 class="NoSiteContactSection">Notice</h3>

        <p>If You Think This is a Mistake Contact The Admin By Clicking On the Button Below</p>

        <button class="NositeContactBox">Contact Us</button>
            
    `);

    const ADMINCONTACTED=()=>{
        
        alert("Admin Contacted");

    };

    CLICKED(".NositeContactBox",ADMINCONTACTED);

};