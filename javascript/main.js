 // import  options from './options.js';

let newLocal = document.getElementById('test').innerText = "Form";


window.onload = function () {
    if (!sessionStorage.getItem("alertShown")) {
        alert("This alert will be shown only once per session.");
        sessionStorage.setItem("alertShown", "true");
    }
};
const dropdownData = {
    dropdown1: [
        { option: "Apple", score: 5 },
        { option: "Banana", score: 3 },
        { option: "Cherry", score: 7 }
    ],
    dropdown2: [
        { option: "Car", score: 10 },
        { option: "Bike", score: 6 },
        { option: "Bus", score: 8 }
    ],
    dropdown3: [
        { option: "Red", score: 2 },
        { option: "Blue", score: 4 },
        { option: "Green", score: 1 }
    ]
};

// Get HTML elements
const selectElement = document.getElementById("dropdown");
const scoreDisplay = document.getElementById("score");
let totalScore = 0;
let q1 = 0;
// Function to update the score display
function updateScoreDisplay() {
    scoreDisplay.textContent = q1;
}
//Function to populate a dropdown
        function populateDropdown(dropdownId, options) {
            const dropdown = document.getElementById(dropdownId);
            options.forEach(item => {
                let optionElement = document.createElement("option");
                optionElement.value = item.score;
                optionElement.textContent = item.option;
                dropdown.appendChild(optionElement);
            });
        }

        // Populate each dropdown with its specific options
        populateDropdown("dropdown1", dropdownData.dropdown1);
        populateDropdown("dropdown2", dropdownData.dropdown2);
        populateDropdown("dropdown3", dropdownData.dropdown3);

// Update score when an option is selected
function updateScore() {
    totalScore = 0; // Reset total score
    document.querySelectorAll(".scoreDropdown").forEach(dropdown => {
        let selectedScore = parseInt(dropdown.value);
        if (!isNaN(selectedScore)) {
            totalScore += selectedScore;
        }
    });
    scoreDisplay.textContent = totalScore; // Update displayed score
}

// Add event listeners to all dropdowns
document.querySelectorAll(".scoreDropdown").forEach(dropdown => {
    dropdown.addEventListener("change", updateScore);
});

        const img = document.createElement('img');
    
        // Set the image source
        img.src = 'https://via.placeholder.com/150'; // Replace with your image URL
    
        // Optionally, set attributes like alt text
        img.alt = 'Dynamic Image';
    
        // Append the image to the div with id 'image-container'
        document.getElementById('image-container').appendChild(img);

       
        
console.log(Word);