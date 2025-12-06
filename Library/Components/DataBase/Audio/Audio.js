export const AUDIO = (HOLDER, SRC, COLOR, HEIGHT, WIDTH, MARGIN, callback) => {

  const background = COLOR || "#FFFFFF";

  if (!document.getElementById("audio-webkit-style")) {
    const style = document.createElement("style");
    style.id = "audio-webkit-style";
    style.textContent = `
      audio::-webkit-media-controls-panel {
        background-color: ${background} !important;
        border: none !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }

      audio::-webkit-media-controls-enclosure {
        background-color: ${background} !important;
        border: none !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }

      audio::-webkit-media-controls-play-button,
      audio::-webkit-media-controls-timeline,
      audio::-webkit-media-controls-current-time-display,
      audio::-webkit-media-controls-time-remaining-display,
      audio::-webkit-media-controls-volume-slider-container,
      audio::-webkit-media-controls-volume-slider,
      audio::-webkit-media-controls-mute-button {
        filter: invert(1); /* Optional: makes controls light on dark bg */
      }
    `;
    document.head.appendChild(style);
  }

  ELEMENTED(HOLDER, "audio", (ELEMENTS) => {
    STYLED(ELEMENTS, "position", "relative");
    STYLED(ELEMENTS, "width", WIDTH || "100%");
    STYLED(ELEMENTS, "height", HEIGHT || "50px");
    STYLED(ELEMENTS, "margin", MARGIN || "auto");
    STYLED(ELEMENTS, "background", background);
    STYLED(ELEMENTS, "border", "none");
    STYLED(ELEMENTS, "borderRadius", "0");

    ELEMENTS.controls = true;
    ELEMENTS.src = SRC || "#";

    if (typeof callback === "function") {
      callback(ELEMENTS);
    }
  });
};
