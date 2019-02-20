function run(interval, frames) {
    var int = 1;

    function func() {
        document.getElementById("landpage").className = "b"+int;
        int++;
        if(int === frames) { int = 1; }
    }

    var swap = window.setInterval(func, interval);
}

run(3000, 3); //milliseconds, frames
