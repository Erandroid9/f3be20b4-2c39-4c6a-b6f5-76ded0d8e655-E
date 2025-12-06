export const TELEGRAM = (NAME) => {

    var telegramLink = "https://t.me/" + encodeURIComponent(NAME);

    CHECKER(navigator.onLine,()=>{

        window.open(telegramLink);

    });
    
};