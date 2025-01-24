



 function calculatebmi(){

const height = parseFloat(document.getElementById("height").value);
const weight = parseFloat(document.getElementById("weight").value);
console.log(height);
    var bmi=(weight/((height*height)/10000)).toFixed(2);//2decimal value tak output dega//
    const result = document.getElementById("result");
    result.innerHTML = `
      <h3>
         Bmi = ${bmi}
      </h3>
    `;
  
  
};
const bmi=document.getElementById("form");
bmi.addEventListener("submit",(Event)=>{
    Event.preventDefault();
    calculatebmi();
});