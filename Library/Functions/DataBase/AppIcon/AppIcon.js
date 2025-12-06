export const APPICON = (PATH) => {

    const favicon = document.createElement("link");

    favicon.rel = "icon";

    favicon.href = PATH;

    document.head.appendChild(favicon);
    
};
