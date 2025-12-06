export const SWITCHER = (WIDTH, DesktopCallback, PhoneCallback) => {

    const screenWidth = window.screen.width;

    if (screenWidth >= WIDTH || screenWidth >= 800) {

        DesktopCallback();

    } else {

        PhoneCallback();

    };
    
};
