export const AUDIO = (HOLDER, SRC, callBack) => {

    ELEMENTED(HOLDER, "audio", (ELEMENT) => {

        SOURCED(ELEMENT, SRC);
        CONTROLS(ELEMENT);

        POSITIONRELATIVE(ELEMENT);
        WIDTH(ELEMENT, "");
        HEIGHT(ELEMENT, "50px");
        MARGIN(ELEMENT, "");
        DISPLAYBLOCK(ELEMENT);
        BACKGROUND(ELEMENT, WHITE);

        ELEMENT.addEventListener("play", () => {

            document.querySelectorAll("audio").forEach(audio => {

                CHECKER(audio !== ELEMENT,()=>{

                    audio.pause();

                });
            
            });

        });

        callBack(ELEMENT);

    });

};
