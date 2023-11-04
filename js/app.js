let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let cart = document.querySelector("#cart");

//Increment
increment.addEventListener("click", () => {
    let cartValue = Number(cart.value);
    cart.value = ++cartValue;
});

//Decrement
decrement.addEventListener("click", () => {
    let cartValue = Number(cart.value);
    if(cartValue > 1){
        cart.value = --cartValue;
    }
});


//Password Toggle
let password_btn = document.querySelector('.password_box .btn');
let password_input = document.querySelector('.password_box .password');

password_btn.addEventListener('click', ()=>{

    password_input.type === 'password' ? password_input.type = 'text':password_input.type = 'password';

})

let range = document.querySelector('#customRange');

range.addEventListener('input', ()=>{
    document.querySelector('h3').innerHTML = range.value;
})




setInterval(()=>{
    let date = new Date();
    document.querySelector('h2').innerHTML = date
},1000)
