export const DOWNLOADIMAGE = (base64String, filename) => {

    CHECKER(navigator.onLine,()=>{

        const link = document.createElement("a");
    
        link.href = base64String;
    
        link.download = filename;
    
        link.click();

    });
  
};