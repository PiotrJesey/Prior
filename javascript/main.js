 // import  options from './options.js';

let newLocal = document.getElementById('test').innerText = "Complete the questionnaire below to indicate if your initiative is a Project, Programme or Business a usual (BAU).  For Projects & Programme, then continue to the Project Sizing tab. ";
let logo = document.getElementById("logo").src = "./img/HCJ_logo-01.png";
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
        { option: "Requires oversight and control", score: 2 },
        { option: "No dedicated oversight, controlled via functional or departmental operational process", score: 4 }
        
    ],
    dropdown6: [
        { option: "Carries risk and requires dedicated management of risks and issues", score: 2 },
        { option: "No specific risks", score: 4 }
       
    ],
    dropdown7: [
        { option: "Benefits of underlying projects support the overarching programme objective", score: 2 },
        { option: "Defined benefits associated with the delivery of the scope set out", score: 4 },
        { option: "No defined benefits", score: 1 }
    ],
    dropdown8: [
        { option: "Red", score: 2 },
        { option: "Blue", score: 4 },
        { option: "Green", score: 1 }
    ]
};

const dropdownItems = Object.keys(dropdownData).length;
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
        function populateDropdownTags() {
            for (let i = 1; i <= dropdownItems; i++) {
                let item = "dropdown" + i;  // Construct the part name (dropdown0, dropdown1, ...)
                populateDropdown(item, dropdownData[item]);  // Access the correct dropdown data
            }
        }
        
        // Populate each dropdown with its specific options
        populateDropdownTags();

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



       

       
        
console.log(Word);