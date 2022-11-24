let btn = document.querySelector('#btnModel')
let model = document.querySelector('.model-podcast')
let close = document.querySelector('.close')
let back = document.querySelector('.back-mobile')

btn.addEventListener('click', function () {
  model.style.display = 'block'
  model.style.overflowY = 'scroll'
  document.body.style.overflowY = 'hidden'

  // overflow-y: scroll;
})

close.addEventListener('click', function () {
  model.style.display = 'none'
  document.body.style.overflowY = 'initial'
})

back.addEventListener('click', function () {
  model.style.display = 'none'
  document.body.style.overflowY = 'initial'
})
