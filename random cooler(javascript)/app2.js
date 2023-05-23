let color = ['yellow','blue','grey' ,'pink','dark blue','purple'];
const btn = document.getElementById('btn');
const colors = document.getElementById('color')
btn.addEventListener('click', function () { 
   const randNumber = getRandom();
   document.body.style.backgroundColor = color[randNumber];
   colors.textContent = color[randNumber]
   
});

function getRandom() {
    return Math.floor(Math.random() * color.length);
}