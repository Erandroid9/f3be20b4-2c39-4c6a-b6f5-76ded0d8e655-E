export const COPY = (text, onSuccess)=> {

    navigator.clipboard

    .writeText(text)

    .then(() => {

        CHECKER(onSuccess,()=>{

            onSuccess();

        });

    }) 
    
    .catch((err) => {

        TOAST("Failed to copy text: ");

    });

};