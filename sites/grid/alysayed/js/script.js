// $(document).ready(function () {
//     slider();

//     window.setInterval(function () {
//         var date = new Date();
//         var toNight = (new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 0, 0, 0));
        
//         var diff = Math.floor((toNight - date) / 1000);
//         var daysToNight = Math.floor(diff / (60 * 60 * 24));
//         var hoursToNight = Math.floor(diff / (60 * 60));
//         var minutesToNight = Math.floor((diff - hoursToNight * 60 * 60) / 60);
//         var secondToNight = Math.floor(diff % 60);
//         $('#dayEl').text(daysToNight);
//         $('#hoursEl').text(hoursToNight);
//         $('#minEl').text(minutesToNight);
//         $('#secEl').text(secondToNight);
//     });


//   function slider(){
//     $('.slider').bxSlider();
//   }

// });