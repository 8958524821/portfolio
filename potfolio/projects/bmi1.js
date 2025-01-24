let form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const weight=parseInt(document.getElementsByClassName('weight').value);
    const height=parseInt(document.getElementsByClassName('height').value);
    const result=document.querySelector('#result');
    if(height==''||height<0|| isNaN(height)){
        result.innerHTML="please give valid height";
        
    }
     else if(weight==''||weight<0|| isNaN(weight)){
        result.innerHTML="please give valid weight"; 
    }
    else{
        const bmi=  (weight /((height*height)/10000)).toFixed(2);//2decimal value tak output dega//
        result.innerHTML=bmi;
    }
})