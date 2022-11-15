;(function () {
  let pcastPlayers = document.querySelectorAll('.pcast-player')
  let speeds = [1, 1.5, 2, 2.5, 3]

  for (i = 0; i < pcastPlayers.length; i++) {
    let player = pcastPlayers[i]
    let audio = player.querySelector('audio')
    let play = player.querySelector('.pcast-play')
    let pause = player.querySelector('.pcast-pause')
    let rewind = player.querySelector('.pcast-rewind')
    let next = player.querySelector('.pcast-next')
    let progress = player.querySelector('.pcast-progress')
    let speed = player.querySelector('.pcast-speed')
    let mute = player.querySelector('.pcast-mute')
    let currentTime = player.querySelector('.pcast-currenttime')
    let duration = player.querySelector('.pcast-duration')

    let item1 = player.querySelector('.list-stemp-1')
    let item2 = player.querySelector('.list-stemp-2')
    let item3 = player.querySelector('.list-stemp-3')

    let currentSpeedIdx = 0

    pause.style.display = 'none'

    let toHHMMSS = function (totalsecs) {
      let sec_num = parseInt(totalsecs, 10) // don't forget the second param
      let hours = Math.floor(sec_num / 3600)
      let minutes = Math.floor((sec_num - hours * 3600) / 60)
      let seconds = sec_num - hours * 3600 - minutes * 60

      if (hours < 10) {
        hours = '0' + hours
      }
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      if (seconds < 10) {
        seconds = '0' + seconds
      }
      // var time = hours + ':' + minutes + ':' + seconds

      let time = minutes + ':' + seconds
      return time
    }

    audio.addEventListener('loadedmetadata', function () {
      progress.setAttribute('max', Math.floor(audio.duration))
      duration.textContent = toHHMMSS(audio.duration)
    })

    audio.addEventListener('timeupdate', function () {
      progress.setAttribute('value', audio.currentTime)
      currentTime.textContent = toHHMMSS(audio.currentTime)
    })

    play.addEventListener(
      'click',
      function () {
        this.style.display = 'none'
        pause.style.display = 'inline-block'
        pause.focus()
        audio.play()
      },
      false
    )

    pause.addEventListener(
      'click',
      function () {
        this.style.display = 'none'
        play.style.display = 'inline-block'
        play.focus()
        audio.pause()
      },
      false
    )

    rewind.addEventListener(
      'click',
      function () {
        audio.currentTime -= 10
      },
      false
    )
    next.addEventListener(
      'click',
      function () {
        audio.currentTime += 10
      },
      false
    )

    progress.addEventListener(
      'click',
      function (e) {
        audio.currentTime = Math.floor(audio.duration) * (e.offsetX / e.target.offsetWidth)
      },
      false
    )

    speed.addEventListener(
      'click',
      function () {
        currentSpeedIdx = currentSpeedIdx + 1 < speeds.length ? currentSpeedIdx + 1 : 0
        audio.playbackRate = speeds[currentSpeedIdx]
        this.textContent = speeds[currentSpeedIdx] + 'x'
        return true
      },
      false
    )

    mute.addEventListener(
      'click',
      function () {
        if (audio.muted) {
          audio.muted = false
          this.querySelector('.fa').classList.remove('fa-volume-off')
          this.querySelector('.fa').classList.add('fa-volume-up')
        } else {
          audio.muted = true
          this.querySelector('.fa').classList.remove('fa-volume-up')
          this.querySelector('.fa').classList.add('fa-volume-off')
        }
      },
      false
    )

    item1.addEventListener(
      'click',
      function () {
        audio.currentTime = 30
      },
      false
    )

    item2.addEventListener(
      'click',
      function () {
        audio.currentTime = 78
      },
      false
    )
    item3.addEventListener(
      'click',
      function () {
        audio.currentTime = 120
      },
      false
    )
  }
})(this)
