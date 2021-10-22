const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let getSegund = 0
let getMin = 0
let getHor = 0
let timer

function iniciaTimer() {
  timer = setInterval(function () {
    getSegund++
    segundos.innerHTML = getSegund
    if (getSegund < 10) {
      segundos.innerHTML = '0' + getSegund
    }
    if (getSegund >= 60) {
      getSegund = 0
      getMin++
      minutos.innerHTML = getMin
    }
    if (getMin < 10) {
      minutos.innerHTML = '0' + getMin
    }
    if (getMin >= 60) {
      getMin = 0
      getHor++
      horas.innerHTML = getHor
    }
    if (getHor < 10) {
      horas.innerHTML = '0' + getHor
    }
  }, 1000)
}
iniciar.addEventListener('click', function (event) {
  iniciaTimer()
})

pausar.addEventListener('click', function (event) {
  clearInterval(timer)
})

zerar.addEventListener('click', function (event) {
  clearInterval(timer)
  getSegund = 0
  getMin = 0
  getHor = 0
  segundos.innerHTML = '0' + getSegund
  minutos.innerHTML = '0' + getMin
  horas.html = '0' + getHor
})
