export const LOCALINPUTED = (ELEMENT,NAMES) => {
    
    ELEMENT.addEventListener("input", () => {

        CONDITION(ELEMENT.value,()=>{

            LOCALSTORE(NAMES,ELEMENT.value);

        },()=>{

            LOCALDELETE(NAMES);

        });

    });

};
