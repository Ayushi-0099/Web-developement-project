function register() {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let cpassword = document.querySelector("#cpassword").value;

  if(password === cpassword){
    localStorage.setItem(email, password);

    alert("Successfully registered. Please sign to start learning.");
  }
  else{
    alert("Password does not match");
  }
}

function verifySignIn() {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  let storedPassword = localStorage.getItem(email);

  if(storedPassword !== null && storedPassword === password){
    location.replace("algorithms.html");
  }
  else{
    alert("Incorrect credentials or User does not exist");
  }
}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

var id = 0;
function addToCart(variant, image) {
	var cartItem = `<div class="cart-item" id="${id}">
	<span class="fas fa-times" onclick="remove(${id})"></span>
	<img src="${image}" alt="Doppio">
	<div class="content">
	<h3>${variant}</h3>
	<div class="price">$15.99/-</div> 
	</div>
	</div>`;
	id++;
	const cartContainer = document.querySelector('#cart-items-container');
	cartContainer.innerHTML += cartItem;

}

function remove(id) {
	const element = document.getElementById(`${id}`);
	element.remove();
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

exports.build = series(scssTask, jsTask);
