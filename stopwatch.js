var hr = 0;
var min = 0;
var sec = 0;
var timer = false;

function start() {
    timer = true;
    stopwatch();
}
function stop() {
    timer = false;
}
function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('min').innerHTML = min;
    document.getElementById('hr').innerHTML = hr;
}

function stopwatch() {
    if (timer == true) {
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hr++;
            }
        }
        document.getElementById('sec').innerHTML = sec;
        document.getElementById('min').innerHTML = min;
        document.getElementById('hr').innerHTML = hr;

        setTimeout(stopwatch, 1000);
    }
}

document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('reset').addEventListener('click', reset);