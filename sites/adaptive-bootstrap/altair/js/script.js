$(document).ready(function () {
    newValue = 10;
    $(window).scroll(function () {
        var y = $(window).scrollTop()
        if (y >= 1400 && y <= 2300) {
            $('.planning-people').css('backgroundPosition', newValue + '%');
            newValue += 4;
        } else {
            $('.planning-people').css('backgroundPosition', newValue + '%');
            newValue = newValue;
        }
    });
})