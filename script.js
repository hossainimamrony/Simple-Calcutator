
const button7 = document.getElementById('btn7').addEventListener('click', function(){
    grabInput ('btn7');
})

const button8 = document.getElementById('btn8').addEventListener('click', function(){
    grabInput ('btn8');
})
const button9 = document.getElementById('btn9').addEventListener('click', function(){
    grabInput ('btn9');
})
const button6 = document.getElementById('btn6').addEventListener('click', function(){
    grabInput ('btn6');
})
const button5 = document.getElementById('btn5').addEventListener('click', function(){
    grabInput ('btn5');
})
const button4 = document.getElementById('btn4').addEventListener('click', function(){
    grabInput ('btn4');
})
const button3 = document.getElementById('btn3').addEventListener('click', function(){
    grabInput ('btn3');
})
const button2 = document.getElementById('btn2').addEventListener('click', function(){
    grabInput ('btn2');
})
const button1 = document.getElementById('btn1').addEventListener('click', function(){
    grabInput ('btn1');
})
const button0 = document.getElementById('btn0').addEventListener('click', function(){
    grabInput ('btn0');
})
const buttonPlus = document.getElementById('Plus').addEventListener('click', function(){
    grabInput ('Plus');
})
const buttonMinus = document.getElementById('minus').addEventListener('click', function(){
    grabInput ('minus');

})
const buttonMultiply = document.getElementById('multiply').addEventListener('click', function(){
    grabInput ('multiply');
    
})
const buttonDevide = document.getElementById('devide').addEventListener('click', function(){
    grabInput ('devide');
    
})
const buttonequal = document.getElementById('equal').addEventListener('click', function(){
    math ();
})

const buttonClear = document.getElementById('clear').addEventListener('click', function(){
    document.getElementById('display').value = "";
})






             //function secto   
function grabInput (btnName){
    const display = document.getElementById('display').value;
    const butn = document.getElementById(btnName).innerText;
     let btnrepeat = display + butn;
     document.getElementById('display').value = btnrepeat;
}

function math (){
    let result = document.getElementById('display').value;
    let math =  result.value = eval(result);
    document.getElementById('display').value = math;
}
