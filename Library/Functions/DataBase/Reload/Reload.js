export const RELOAD = () => {

    if (localStorage.getItem("Environment") === "Production" ) {

        AndroidApp.reloadApp();

    } else {
     
        location.reload();
        
    };

};