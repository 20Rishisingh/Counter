const title = document.getElementById("display");
let currVal = 0;

const increment = document.querySelector('#Inc');
const reset = document.querySelector('#Reset');
const decrement = document.querySelector('#Dec');

increment.addEventListener('click', () => {
   currVal++;
   title.textContent = currVal;
});

reset.addEventListener('click', () => {
   currVal = 0;
   title.textContent = currVal;
});

decrement.addEventListener('click', () =>{
   currVal--;
   title.textContent = currVal;
});
