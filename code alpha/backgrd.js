const colorBox = document.getElementById("color-box");
const generateButton = document.getElementById("generate");
const colorPicker = document.getElementById("color-picker");
const copyButton = document.getElementById("copy");




function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function setBackgroundColor(color) {
    colorBox.style.backgroundColor = color;
}

function copyToClipboard() {
    const colorCode = colorPicker.value;
    navigator.clipboard.writeText(colorCode).then(function() {
        alert(`Copied: ${colorCode}`);
    }).catch(function() {
        alert("Copy failed.");
    });
}

generateButton.addEventListener("click", () => {
    const randomColor = generateRandomColor();
    setBackgroundColor(randomColor);
    colorPicker.value = randomColor;
});

copyButton.addEventListener("click", copyToClipboard);
