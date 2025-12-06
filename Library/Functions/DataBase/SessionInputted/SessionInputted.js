export const SESSIONINPUTED = (ELEMENT,NAMES) => {
    
    ELEMENT.addEventListener("input", () => {

        CONDITION(ELEMENT.value,()=>{

            SESSIONSTORE(NAMES,ELEMENT.value);

        },()=>{

            SESSIONDELETE(NAMES);

        });

    });

};
