let num = 0 ;
const won = "Number cannot be exceed then 20";
const error2 = "Number cannot be less then 0";
const sum_btn = document.getElementById('plus');
const reset_btn = document.getElementById('reset');
const minus_btn = document.getElementById('minus');
let number = document.getElementById('number');

sum_btn.addEventListener('click' , function(){
    if(num>=20){
        alert(won);
    }else{
        num++; 
        number.textContent = num; 
        console.log(num)
    }
    
})
reset_btn.addEventListener('click' , function(){
    num = 0;
    number.textContent = num;
    console.log(num)
})
minus_btn.addEventListener('click' , function(){
    if(num<=0){
        alert(error2)
    }else{
    num--;
    number.textContent = num;
    console.log(num)
    }
})

