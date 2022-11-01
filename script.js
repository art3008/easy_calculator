const usrInp = document.getElementById('usrInp')
let expression = ''

function press(num) {
    expression += num
    usrInp.value = expression    
}

function equal() {
    usrInp.value.length == 0 ? alert('Пустое значение') : usrInp.value = eval(expression)
}

function clrInp() {
   expression = ''
   usrInp.value = expression
}