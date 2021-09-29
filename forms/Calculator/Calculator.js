
btnAdd.onclick=function(){
  let Num1= Number(inptNum1.value)
  let Num2 = Number(inptNum2.value)
  
  let answer = Num1 + Num2
   lblAnswer.value = answer
 
}
btnMultiply.onclick=function(){
  let Num1= Number(inptNum1.value)
  let Num2 = Number(inptNum2.value)
  
  let answer = Num1 * Num2
   lblAnswer.value = answer
}

btnReset.onclick=function(){
lblAnswer.value = " "
  inptNum1.value = " "
 inptNum2.value = " "
}
