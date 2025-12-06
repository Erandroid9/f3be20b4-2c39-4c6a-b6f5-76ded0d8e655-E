export const WEBSITE = (url) => {

    CHECKER(navigator.onLine,()=>{

        window.open(url);

    });

};