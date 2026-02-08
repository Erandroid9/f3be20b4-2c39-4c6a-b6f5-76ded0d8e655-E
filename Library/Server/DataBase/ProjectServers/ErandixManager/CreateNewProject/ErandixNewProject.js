export const ERANDIXNEWPROJECT=()=>{

    TOASTVIEW("Please Wait");

    const HEADERS=["Name","Android","Desktop","Web","Date","AdminEmail","Approved","ProjectImage","ProjectExpiry","Domain"];

    const INFO=[sessionStorage.getItem("Name"),sessionStorage.getItem("Android"),sessionStorage.getItem("Desktop"),sessionStorage.getItem("Web"),new Date(),sessionStorage.getItem("UserEmail"),"Approved",sessionStorage.getItem("Image"),"",""];
                    
    INSERTDATA(ERANDIXMANAGERLINK,"Production",HEADERS,INFO,(DataS)=>{
                    
        TOASTVIEW("Data Posted To Server");
                    
    });

};