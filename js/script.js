let selectedRating = 0;

let submitbutton = document.querySelector(".submit");
submitbutton.addEventListener("click", () => {
    if (selectedRating > 0) {
        document.querySelector(".ty-state").style.display = "flex";
        document.querySelector(".rating-state").style.display = "none";
    
        document.querySelector(".your-rating").textContent = selectedRating;
    } else {
        alert("Please select a rating before submitting.");
    }
});

let ratebuttons = document.querySelectorAll(".btn");
ratebuttons.forEach(item => {
    item.addEventListener("click", (e) => {
        ratebuttons.forEach(item => {
            item.style.backgroundColor = "hsl(213, 19%, 18%)";
            item.style.color = "hsl(217, 12%, 63%)";
        });

        item.style.backgroundColor = "white";
        item.style.color = "hsl(213, 19%, 18%)"; 
        
        selectedRating = item.textContent;
    });
});
