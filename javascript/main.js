 // import  options from './options.js';
 const collapsibles = document.querySelectorAll(".collapsible");
 
        collapsibles.forEach(collapsible => {
            collapsible.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent any default behavior (like scrolling)
      
                const content = this.nextElementSibling;
                const icon = this.querySelector(".icon");
                
                // Toggle the display of the content div
                if (content.style.display === "block") {
                    content.style.display = "none"; // Hide the content
                    icon.textContent = "+"; // Change icon to "+"
                } else {
                    content.style.display = "block"; // Show the content
                    icon.textContent = "-"; // Change icon to "-"
                }

                // Optionally change the button text based on visibility
                
            });
        });

 let radioPush = document.getElementById("radioTest").innerText = "radio"  

 function MyFunction() {
    let button = document.getElementById("submButton");
    let formElements = document.querySelectorAll("input, textarea, select, input[type='radio'] ");
    let isEmpty = false;
    let arr = [];

    formElements.forEach(element => {
        if (element.value.trim() === "" || element.selectedIndex === 0) {
            arr.push(element.name || element.id);
            isEmpty = true;
            
        }
    });

    if (isEmpty) {
        //alert("Empty fields: " + arr.join(", ")); // Show empty fields
        document.getElementById("empty").textContent = arr.join(",  ")
        button.disabled = true;
        
    } else {
        button.disabled = false;
    }
}

function attachEventListenersButton() {
    let formElements = document.querySelectorAll("input, textarea, select,input[type='radio']");

    formElements.forEach(element => {
        element.addEventListener("input", MyFunction);  // For text inputs & textarea
        element.addEventListener("change", MyFunction); // For dropdowns
    });
}

// Attach listeners when the page loads
document.addEventListener("DOMContentLoaded", () => {
    attachEventListenersButton();
    MyFunction(); // Run once on load to check initial state
});
    
let newLocal = document.getElementById('test').innerText = "Complete the questionnaire below to indicate if your initiative is a Project, Programme or Business a usual (BAU).  For Projects & Programme, then continue to the Project Sizing tab. ";
let logo = document.getElementById("logo").src = "./img/HCJ_logo.png";
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
        { option: "Brings about change", score: 2 },
        { option: "Benefits from change or highlights the need for change", score: 4 }
       
    ],
    dropdown9: [
        { option: "Low - Some limited alignment to strategic priorities", score: 2 },
        { option: "Medium - Project is aligned to strategic priorities but not key to their achievement ", score: 4 },
        { option: "High - Project will deliver transformative outcomes for, or mitigate significant risks to, the Government of Jersey which may directly or indirectly impact outcomes for the Island’s economy or community ", score: 1 },
        { option: "Very High - Project will deliver transformative outcomes for, or mitigate significant risks to, the Island’s economy or community", score: 1 }
    ],
    dropdown10: [
        { option: "< £25,000", score: 2 },
        { option: ">£25,000 and < £250,000", score: 1 },
        { option: ">£250,000 and <£2,000,000", score: 1 },
        { option: ">£2,000,000", score: 1 },
        { option: ">£5,000,000", score: 1 }

    ],
    dropdown11: [
        { option: "None - There are no financial benefits", score: 2 },
        { option: "Low - Benefits are estimated to be in excess of £50,000", score: 1 },
        { option: "Medium - Benefits are estimated to be in excess of £500,000", score: 1 },
        { option: "High - Benefits are estimated to be in excess of £1,000,000", score: 1 }
    ],
    dropdown12: [
        { option: "Low - Some limited alignment to strategic priorities", score: 2 },
        { option: "Medium - Project is aligned to strategic priorities but not key to their achievement ", score: 4 },
        { option: "High - Project will deliver transformative outcomes for, or mitigate significant risks to, the Government of Jersey which may directly or indirectly impact outcomes for the Island’s economy or community ", score: 1 },
        { option: "Very High - Project will deliver transformative outcomes for, or mitigate significant risks to, the Island’s economy or community", score: 1 }
    ],
    dropdown13: [
        { option: "Low - Some limited alignment to strategic priorities", score: 2 },
        { option: "Medium - Project is aligned to strategic priorities but not key to their achievement ", score: 4 },
        { option: "High - Project will deliver transformative outcomes for, or mitigate significant risks to, the Government of Jersey which may directly or indirectly impact outcomes for the Island’s economy or community ", score: 1 },
        { option: "Very High - Project will deliver transformative outcomes for, or mitigate significant risks to, the Island’s economy or community", score: 1 }
    ],
    dropdown14: [
        { option: "Low - Duration < 6 months", score: 2 },
        { option: "Medium - Duration of 6+ months", score: 4 },
        { option: "High - Duration of 12+ months", score: 1 }
        
    ],
    dropdown15: [
        { option: "None - Has no technology requirements", score: 2 },
        { option: "Low - Has a low requirement for system change which is localised and affects 1 non core system only", score: 4 },
        { option: "Medium - Involves change to a core system or 2+ non core technologies", score: 1 },
        { option: "High - Requires change to core or critical systems or the handling of highly sensitive data", score: 1 }
    ],
    dropdown16: [
        { option: "Low - Limited operational change in one or more departments", score: 2 },
        { option: "Medium - Involves significant operational change for one department", score: 4 },
        { option: "High - Cross-departmental in nature or highly impactful to the operational delivery of a department", score: 1 }
        
    ],
    dropdown17: [
        { option: "Low - Includes a low number of stakeholder groups with broadly aligned requirements", score: 2 },
        { option: "Medium - Includes a large number of stakeholder groups with broadly aligned requirements", score: 4 },
        { option: "High - Includes a large number of stakeholder groups with differing or opposing requirements", score: 1 }
        
    ],
    dropdown18: [
        { option: "Low - Does not entail contributions from other departments", score: 2 },
        { option: "Medium - Some interdependent key projects ", score: 4 },
        { option: "High - Require unique methods or approaches to be adapted to successfully deliver, some interdependency on strategic or major projects", score: 1 }
        
    ],
    dropdown19: [
        { option: "Low - Does not entail contributions from other departments", score: 2 },
        { option: "Medium - Some interdependent key projects ", score: 4 },
        { option: "High - Require unique methods or approaches to be adapted to successfully deliver, some interdependency on strategic or major projects", score: 1 }
        
    ]
};

const dropdownItems = Object.keys(dropdownData).length;
const radio = document.getElementById("dropdown");
const scoreDisplay = document.getElementById("score");
const scoreSizingDisplay = document.getElementById("sizingScore");
const scoreTypeDisplay = document.getElementById("scoreType");
const scoreSizingTypeDisplay = document.getElementById("scoreSizingType");
const recommendedTypeDisplay = document.getElementById("recommendedType");
let totalScore = 0;
let totalSizingScore = 0;
let scoreType = "";
let scoreSizingType ="";
let recommendedType ="";




function radioPopulate(radioId, options) {
    const radio = document.getElementById(radioId);
    
    options.forEach(item => {
        let radioElement = document.createElement("label");
        radioElement.classList.add("question");
        
        let radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.value = item.score;
        radioButton.name = radioId; // Ensure all radios in a group share the same name
        radioButton.id = `${item.option.replace(/\s+/g, "-")}`; // Unique ID
        
        radioElement.appendChild(radioButton);
        radioElement.appendChild(document.createTextNode(item.option));
        radio.appendChild(radioElement);

        // Event listener for selection
        radioButton.addEventListener("change", () => {
            displaySelectedRadioValue(radioId, item.option);
        });
    });
}

function displaySelectedRadioValue(radioId, selectedValue) {
    const displayParagraph = document.getElementById("radioTest");
    if (displayParagraph) {
        displayParagraph.innerText = `Selected value from ${radioId}: ${selectedValue}`;
    }
}

// Function to dynamically populate radio buttons
function populateRadioTag() {
    for (let i = 1; i <= dropdownItems; i++) {
        let item = "dropdown" + i;
        if (dropdownData[item]) {
            radioPopulate(item, dropdownData[item]);
        }
    }
}

populateRadioTag();

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
    scoreDisplay.value = totalScore;
    if(totalScore > 1){
        scoreType = "test"
    } 
    scoreTypeDisplay.value = scoreType;// Update displayed score
}

// Add event listeners to all dropdowns
document.querySelectorAll(".scoreDropdown").forEach(dropdown => {
    dropdown.addEventListener("change", updateScore);
});
function updateSizingScore() {
    scoreType= "";
    recommendedType = "";
    totalSizingScore = 0; // Reset total score
    document.querySelectorAll(".scoreSizingDropdown").forEach(dropdown => {
        let selectedScore = parseInt(dropdown.value);
        if (!isNaN(selectedScore)) {
            totalSizingScore += selectedScore;
        }
    });
    scoreSizingDisplay.value = totalSizingScore;
    if(totalSizingScore > 1){
        scoreSizingType = "test"
    }
    if(totalSizingScore > 1){
        recommendedType = "type1";
    }
   scoreSizingTypeDisplay.value = scoreSizingType;// Update displayed score
   recommendedTypeDisplay.value = recommendedType; 
}

// Add event listeners to all dropdowns
document.querySelectorAll(".scoreSizingDropdown").forEach(dropdown => {
    dropdown.addEventListener("change", updateSizingScore);
});


       
console.log(Word);