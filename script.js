const form=document.querySelector('form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();

const height=parseInt(document.querySelector('#height').value); // we want height after submit button
const weight=parseInt(document.querySelector('#weight').value); // we want weight after submit button that is given by user
const result=document.querySelector('.result');// we will show BMI here

if(height === '' || height <0 || isNaN(height)){
result.appendChild(document.createTextNode("please, write a valid height"));
}else if(weight === '' || weight <0 || isNaN(weight)){
result.appendChild(document.createTextNode("please, write a valid weight"));
}else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    result.innerHTML=`<span>BMI is ${bmi}</span>`;
}
});