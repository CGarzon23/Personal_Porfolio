let button = document.getElementById("test");

function actionButtons(event) {
    event.target.style.backgroundcolor = "blue";
}

button.addEventListener(click, actionButtons);



