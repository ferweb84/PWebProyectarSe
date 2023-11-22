document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('myVideo');
  var playPauseButton = document.getElementById('playPause');

  playPauseButton.addEventListener('click', function() {
    if (video.paused || video.ended) {
      video.play();
      playPauseButton.innerHTML = 'Pause';
    } else {
      video.pause();
      playPauseButton.innerHTML = 'Play';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('myAudio');
  var playPauseButton = document.getElementById('playPause');

  playPauseButton.addEventListener('click', function() {
    if (audio.paused || audio.ended) {
      audio.play();
      playPauseButton.innerHTML = 'Pause';
    } else {
      audio.pause();
      playPauseButton.innerHTML = 'Play';
    }
  });
});