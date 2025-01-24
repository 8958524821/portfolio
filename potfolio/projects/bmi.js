
var calculate = document.querySelector(".calculate");
calculate.addEventListener('',function(e){
    e.preventDefault();
 const height = parseFloat(document.querySelector('.height').value);
 const weight = parseFloat(document.querySelector('.weight').value);
 const result = document.querySelector('#result');

//  if (height===''|| height<0|| isNaN(height)){
//    document.getElementById('bmi').value="height";
//  }
//   else if (weight===''|| weight<0|| isNaN(weight)){
//    document.getElementById('bmi').value="weight";
//  }
//  else{
  var bmi=(weight /((height*height)/10000)).toFixed(2);//2decimal value tak output dega//
result.value=bmi;
  
 

});

