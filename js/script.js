var Joystick, buttonStart, cylinder, i, audio, buttonStop;
buttonStart = document.getElementById('start');
buttonStop = document.getElementById('stop');
Joystick = document.getElementById('Joystick');
cylinder = document.getElementById('cylinder');
audio = document.getElementById('audio');
i = 0;
buttonStart.onclick = function start() {
    Joystick.style.transform = "rotate(0deg)";
    document.getElementsByClassName('text-comment')[0].children[0].style.animationPlayState = "running";
    document.getElementsByClassName('text-comment')[0].children[1].style.animationPlayState = "running";
    document.getElementsByClassName('text-comment')[0].children[2].style.animationPlayState = "running";
    audio.play();
    mytime = setInterval(function() {
        cylinder.style.transform = `translate(0, -50%) rotate(${i++}deg)`;
    }, 1);
    buttonStart.setAttribute("disabled", "disabled");
    buttonStop.removeAttribute("disabled");
}
buttonStop.onclick = function end() {
    Joystick.style.transform = "rotate(-47deg)";
    document.getElementsByClassName('text-comment')[0].children[0].style.animationPlayState = "paused";
    document.getElementsByClassName('text-comment')[0].children[1].style.animationPlayState = "paused";
    document.getElementsByClassName('text-comment')[0].children[2].style.animationPlayState = "paused";
    audio.pause();
    clearInterval(mytime);
    buttonStop.setAttribute("disabled", "disabled");
    buttonStart.removeAttribute("disabled");
}