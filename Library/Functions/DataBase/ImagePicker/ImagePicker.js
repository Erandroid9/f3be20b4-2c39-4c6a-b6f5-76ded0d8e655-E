export const IMAGEPICKER = (callback) => {
    const input = document.createElement("input");
    input.type = "file";
    input.style.display = "none";
    input.accept = "image/*";

    document.body.appendChild(input);

    input.addEventListener("change", function () {
        const file = this.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (event) {
            const image = new Image();
            image.src = event.target.result;

            image.onload = function () {
                const maxWidth = 800;
                const maxHeight = 600;
                let width = image.width;
                let height = image.height;

                if (width > height) {
                    if (width > maxWidth) {
                        height = height * (maxWidth / width);
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width = width * (maxHeight / height);
                        height = maxHeight;
                    }
                }

                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");

                ctx.clearRect(0, 0, width, height);
                ctx.drawImage(image, 0, 0, width, height);

                let base64Data;

                if (file.type === "image/png") {
                    base64Data = canvas.toDataURL("image/png");
                } else {
                    let quality = 0.7;
                    base64Data = canvas.toDataURL("image/jpeg", quality);

                    while (base64Data.length > 49800 && quality > 0) {
                        quality -= 0.1;
                        base64Data = canvas.toDataURL("image/jpeg", quality);
                    }
                }

                if (base64Data.length < 49800) {
                    callback(base64Data);
                } else {
                    TOAST("Image Format Error");
                }
            };
        };

        reader.readAsDataURL(file);
    });

    input.click();
    input.remove();
};
