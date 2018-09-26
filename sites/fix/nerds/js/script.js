        var link = document.querySelector(".feedback");
        var userName = document.querySelector(".feedback-form input[id='user-name'");
        var popup = document.querySelector(".modal-feedback");
        var close = popup.querySelector(".form-close");


        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");
            
            userName.focus();
   
        });

        close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
        });

        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                evt.preventDefault();
                if (popup.classList.contains("modal-show")) {
                    popup.classList.remove("modal-show");
                }
            }
        });

        $(document).ready(function(){
            $('.slider').bxSlider();
        });