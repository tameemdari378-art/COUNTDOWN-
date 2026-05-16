var eidDate = new Date("May 26, 2026 00:00:00").getTime();

var timer = setInterval(function () {
    var now = new Date().getTime();
    var distance = eidDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Eid Mubarak! 🎉";
    }
}, 1000)



