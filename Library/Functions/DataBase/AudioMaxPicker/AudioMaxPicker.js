export const AUDIOMAXPICKER = (callback) => {
    const input = document.createElement("input");

    input.type = "file";

    input.style.display = "none";
    
    input.accept = "audio/*";

    document.body.appendChild(input);

    input.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (event) {

            const base64Data = event.target.result;

            callback(base64Data);
        };

        reader.readAsDataURL(file);
    });

    input.click();

    input.remove();

};
