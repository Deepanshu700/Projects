 // CODE FOR TRY YOUR LUCK
 const l_number = [0,1,2,3,4,5,6];
 const luck_btn = document.getElementById('luck_button')
 const print_luck = document.getElementById('number')
 const coupan = document.getElementById('coupan')

 luck_btn.addEventListener('click', function(){
     print_luck.textContent = number;
     if(number == 6){
         coupan.style.color = 'green'
         coupan.textContent = "#693900"
     }else{
         coupan.style.color = 'red'
         coupan.textContent = "Better luck next time"
     }
     
     
 })

 const number = Math.floor(Math.random()*l_number.length);


//  CODE FOR MODAL
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function

// open modal event
openModalBtn.addEventListener("click", function(){
    modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});