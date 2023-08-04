let button = document.getElementById("test").click();
let image = document.getElementById("first-page");

function actionButtons(event) {
    image.style.display = "none";
}

button.addEventListener(click, actionButtons);



