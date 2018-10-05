var popupButton = document.querySelector(".form-button");
var popup = document.querySelector(".modal-choice");
var toggled = false;

popupButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!toggled) {
        toggled = true;
        popup.classList.add("test");
        return;
    }
    if (toggled) {
        toggled = false;
        popup.classList.remove("test");
        return;
    }
});