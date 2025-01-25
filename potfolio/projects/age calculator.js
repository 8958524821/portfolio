 function calculateage(){
  
    const today= new Date();
    const birthdateinput=document.getElementById("op").value;
    const birthdateparts=birthdateinput.split("-");
    const birthyear=birthdateparts[0];
    const birthmonth=birthdateparts[1]-1;
    const birthday=birthdateparts[2];
    const birthdate=new Date(birthyear,birthmonth,birthday);

   
    const ageinmilliseconds=today-birthdate;
    const ageinseconds=Math.floor(ageinmilliseconds/1000);
    const ageinminutes=Math.floor(ageinseconds/60);
    const ageinhours=Math.floor(ageinminutes/60);
    const ageindays=Math.floor(ageinhours/24);
    const ageinweeks=Math.floor(ageindays/7);
    const ageinmonths=Math.floor(ageindays/30.436875);
    const ageinyears=Math.floor(ageindays/365.25);
    console.log(ageinmilliseconds);
    const resultcontainer=document.getElementById("resultcontainer");
    const result=document.getElementById("result");
    if(birthdate>today){
      result.innerHTML="Invalid Birthdate";
      return;
    }
    else{
    result.innerHTML=`
     <div class="result-item">
                    <h3>Age:</h3>
                    <p>${ageinyears} years ${ageinmonths%12} month ${ageindays%30} days</p>
                </div>
                 <div class="result-item">
                    <h3>Month passed</h3>
                    <p>${ageinmonths}</p>
                </div>
                  <div class="result-item">
                    <h3>Weeks Passed</h3>
                    <p>${ageinweeks}</p>
                </div>
                  <div class="result-item">
                    <h3>Days passed</h3>
                    <p>${ageindays}</p>
                </div>
                  <div class="result-item">
                    <h3>Hour passed</h3>
                    <p>${ageinhours}</p>
                </div>
                  <div class="result-item">
                    <h3>Minute passed</h3>
                    <p>${ageinminutes}</p>
                </div>
                  <div class="result-item">
                    <h3>Second passed</h3>
                    <p>${ageinseconds}</p>
                </div>
    
    
    `;}
};



 
const agecalculator=document.getElementById("form");




agecalculator.addEventListener("submit",(Event)=>{
    Event.preventDefault();
    calculateage();

});
