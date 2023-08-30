//function to calculate bmi 

function calculate_BMI(w,h){
//convert meter and KG
  
var bmi=(w*10)/(Math.pow(h,2)*.001);
return bmi;
}
//check the result of bmi and give description

function interpret_BMI(bmi){
if (bmi <= 18.5){
    alert("Underweight")
}    
else if (bmi >17 && bmi <= 25 ){
     alert("Normal weight")  
}
    
else if (bmi >25 && bmi <= 30 ){
    alert("Over weight")  
}
    
else if (bmi > 35 && bmi <= 40 ){
    alert("Obese")  
}
}

//ask user to enter his/her weight and height

var w=parseFloat(prompt("enter your wight"))
var h=parseFloat(prompt("enter your height"))

//check the result of bmi and give description

var BMI =calculate_BMI(w,h)
var des =interpret_BMI(BMI)


