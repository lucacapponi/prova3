var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtnpunk");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
modal.style.display = "block";
                }

span.onclick = function() {
modal.style.display = "none";
}
                
 window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const modal = document.getElementById("modalpunk")
            
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
            
function openModal (){
console.log ("apro");
modal.classList.remove ("hidden")
}
function closeModal () {
console.log("chiudo")
modal.classList.add("hidden")
}