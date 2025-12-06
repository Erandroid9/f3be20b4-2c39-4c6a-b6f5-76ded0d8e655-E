export const NONALERTED = (ELEMENT, COLOR) => {

    const borderStyle = COLOR ? `1px solid ${COLOR}` : "none";

    STYLED(ELEMENT, "border", borderStyle);
    
};
