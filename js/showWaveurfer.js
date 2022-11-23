const playBtn = document.getElementById('playBtn')
const stopBtn = document.getElementById('stopBtn')
const volume = document.getElementById('volumeBtn')

const wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: '#dde5ec',
  progressColor: '#2a2a2a',
  barWidth: 4,
  height: 90,
  responsive: true,
  hideScrollbar: true,
  barRadius: 4,
})
wavesurfer.load('audio/track1.mp3')

playBtn.onclick = function () {
  wavesurfer.playPause()
  if (playBtn.src.includes('play.png')) {
    playBtn.src = 'img/pause.png'
  } else {
    playBtn.src = 'img/play.png'
  }
}

stopBtn.onclick = function () {
  wavesurfer.stop()
  playBtn.src = 'img/play.png'
}

volume.onclick = function () {
  wavesurfer.toggleMute()
  if (volume.src.includes('volume.png')) {
    volume.src = 'img/mute.png'
  } else {
    volume.src = 'img/volume.png'
  }
}

const wavesurfer1 = WaveSurfer.create({
  container: '#waveform1',
  waveColor: '#dde5ec',
  progressColor: '#2a2a2a',
  barWidth: 4,
  height: 90,
  responsive: true,
  hideScrollbar: true,
  barRadius: 4,
})
wavesurfer1.load('audio/track1.mp3')

const wavesurfer2 = WaveSurfer.create({
  container: '#waveform2',
  waveColor: '#dde5ec',
  progressColor: '#03cebf',
  barWidth: 4,
  height: 90,
  responsive: true,
  hideScrollbar: true,
  barRadius: 4,
})
wavesurfer2.load('audio/track1.mp3')
