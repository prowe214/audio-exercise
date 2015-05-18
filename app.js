var playButtonA = document.getElementById("playA");
var audioA = document.getElementById("audioA");
var playButtonB = document.getElementById("playB");
var audioB = document.getElementById("audioB");
playButtonA.addEventListener('click', function() {
  audioA.play();
});

playButtonB.addEventListener('click', function() {
  audioB.play();
});
