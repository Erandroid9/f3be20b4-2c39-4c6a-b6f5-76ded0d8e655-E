export const WHATSAPP=(NUMBER)=>{

    CHECKER(navigator.onLine,()=>{

        open("https://wa.me/"+NUMBER);

    });

};