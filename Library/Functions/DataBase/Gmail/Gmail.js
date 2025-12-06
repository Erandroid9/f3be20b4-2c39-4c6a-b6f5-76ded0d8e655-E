export const GMAIL = (EMAIL) => {

    var mailtoLink = "mailto:" + encodeURIComponent(EMAIL);

    CHECKER(navigator.onLine,()=>{

        window.open(mailtoLink);

    });

};