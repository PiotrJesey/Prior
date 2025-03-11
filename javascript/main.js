 // import  options from './options.js';

let newLocal = document.getElementById('test').innerText = "Form";

let today = new Date().toISOString().split('T')[0];
        // Set the input field value to today's date
        document.getElementById('date').value = today;

window.onload = function () {
    if (!sessionStorage.getItem("alertShown")) {
        alert("This alert will be shown only once per session.");
        sessionStorage.setItem("alertShown", "true");
    }
};
const dropdownData = {
    dropdown1: [
        { option: "Defined start and end", score: 5 },
        { option: "Defined start and end (dates yet to be confirmed)", score: 3 },
        { option: "No defined start or end", score: 7 }
    ],
    dropdown2: [
        { option: "Contains numerous related projects or programme delivery", score: 10 },
        { option: "Made up of numerouse related deliverables and/or tasks", score: 6 },
        { option: "Various unrelated or ungrouped deliverables", score: 8 }
    ],
    dropdown3: [
        { option: "Requires Programme Manager", score: 2 },
        { option: "Requires Project Manager", score: 4 },
        { option: "Reports to Line Manager", score: 1 }
    ],
    dropdown4: [
        { option: "Requires Sponsoring SRO across multiple related projects", score: 2 },
        { option: "Requires Sponsoring SRO", score: 4 },
        { option: "No dedicated Sponsorship required", score: 1 }
    ],
    dropdown5: [
        { option: "Red", score: 2 },
        { option: "Blue", score: 4 },
        { option: "Green", score: 1 }
    ],
    dropdown6: [
        { option: "Red", score: 2 },
        { option: "Blue", score: 4 },
        { option: "Green", score: 1 }
    ]
};

// Get HTML elements
const selectElement = document.getElementById("dropdown");
const scoreDisplay = document.getElementById("score");
const scoreTypeDisplay = document.getElementById("scoreType");
let totalScore = 0;
let scoreType = "";


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
        populateDropdown("dropdown4", dropdownData.dropdown4);
        populateDropdown("dropdown5", dropdownData.dropdown5);
        populateDropdown("dropdown6", dropdownData.dropdown6);

// Update score when an option is selected
function updateScore() {
    scoreType="";
    totalScore = 0; // Reset total score
    document.querySelectorAll(".scoreDropdown").forEach(dropdown => {
        let selectedScore = parseInt(dropdown.value);
        if (!isNaN(selectedScore)) {
            totalScore += selectedScore;
        }
    });
    scoreDisplay.textContent = totalScore;
    if(totalScore>1){
        scoreType = "test"
    } 
    scoreTypeDisplay.textContent = scoreType;// Update displayed score
}

// Add event listeners to all dropdowns
document.querySelectorAll(".scoreDropdown").forEach(dropdown => {
    dropdown.addEventListener("change", updateScore);
});


function addLogo(){
        let img = document.createElement('img');
        img.src = "./img/HCJ_logo";
        img.alt = "HCJ logo";
        img.width = 150;
        document.getElementById("logo").appendChild(img);

}
document.getElementById("logo").src = "./img/HCJ_logo.png";
        // Set the image source
        img.src = 'https://via.placeholder.com/150'; // Replace with your image URL
    
        // Optionally, set attributes like alt text
        img.alt = 'Dynamic Image';
    
        // Append the image to the div with id 'image-container'
        document.getElementById('image-container').appendChild(img);

       
        
console.log(Word);