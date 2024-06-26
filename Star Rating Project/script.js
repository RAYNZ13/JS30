const ratingButtons = document.querySelectorAll('.rate');
const submitEl = document.getElementById('submit');  
const box1El = document.querySelector('.box');       
const box2El = document.querySelector('.box2');      
const userEl = document.querySelector('.user-select h6');  
const gobackEl = document.querySelector('.outside-img img');  


ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("Button Clicked")
        const rating = button.dataset.rating;
        console.log(rating)
        userEl.innerHTML = `You rated ${rating} out of 5`;
    })

});

submitEl.addEventListener('click', () => {
    console.log("Submit Clicked")
    box1El.style.display = 'none'; 
    box2El.style.display = 'flex';
});

gobackEl.addEventListener('click',() =>{
    console.log("Go Back Clicked")
    box1El.style.display = 'flex';
    box2El.style.display = 'none';
})