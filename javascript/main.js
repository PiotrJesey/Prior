


 let scoreOneCheck =0  ;

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

  

 function MyFunction() {
    let button = document.getElementById("submButton");
    let formRadios = document.querySelectorAll("input[type='radio']");
    let formElements = document.querySelectorAll("input, textarea, select");
    let BAUempty = false;
    let isEmpty = false;
    let arr = [];
    let sumRadioValues = 0;
    let sizingForm = document.getElementById("sizing");
    let BAUform = document.getElementById("BAU");
    let BAUarr = [];


    
        let inputs = BAUform.querySelectorAll("input, textarea, select");
        let BAUradio = BAUform.querySelectorAll("input[type='radio']");
        
        let BAUradioGroup = new Set();
        BAUradio.forEach(radio => BAUradioGroup.add(radio.name));

        BAUradioGroup.forEach(group => {
            let BAUradioChecked = document.querySelector(`input[name='${group}']:checked`);
            if(!BAUradioChecked){
                BAUarr.push(group)
                BAUempty = true;
            } else {
                sumRadioValues += parseInt(BAUradioChecked.value) || 0; // Sum selected radio values
            }
        })

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                BAUarr.push(input.name || input.id);
                BAUempty = true;
            }
        });
        
        
        
    

    let radioGroups = new Set();
    formRadios.forEach(radio => radioGroups.add(radio.name));

    radioGroups.forEach(group => {
        let checkedRadio = document.querySelector(`input[name='${group}']:checked`);
      
        if (!checkedRadio) {
            arr.push(group); // Add group name if no radio is selected
            isEmpty = true;
        } 
    });
        
    
    formElements.forEach(element => {
        if (element.value.trim() === "" || element.selectedIndex === 0) {
            arr.push(element.name || element.id );
            isEmpty = true;
            
        }
    });
    if (BAUempty) {
        document.getElementById("empty").innerHTML = "Please fill these empty fields:<br>"+ BAUarr.join(", ");
    } else if (isEmpty && sumRadioValues > 15) {
        document.getElementById("empty").innerHTML = "Please fill the Initiative Sizing Matrix:<br>"+ arr.join(", ");
    } else {
        document.getElementById("empty").textContent = "Please, submit your form!"; // Clear error message when valid
    }
    
    
    
    if (BAUempty && sumRadioValues < 15  ) {
        button.disabled = true;
       // sizingForm.style.display = "none";   //for testing 
    } else if (sumRadioValues > 15 && isEmpty) {
        button.disabled = true;
        sizingForm.style.display = "block";
    }else {
        button.disabled = false;
        sizingForm.style.display = "none";
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
let logo = document.getElementById("logo").src = "./img/DH_logo_W.png";
let today = new Date().toISOString().split('T')[0];
        // Set the input field value to today's date
        document.getElementById('date').value = today;

window.onload = function () {
    if (!sessionStorage.getItem("alertShown")) {
        alert("To start the process, please fill out this form");
        sessionStorage.setItem("alertShown", "true");
    }
};
const dropdownData = {
    dropdown1: [
        { title: "Timing"},
        { option: "Defined start and end", score: 5 },
        { option: "Defined start and end (dates yet to be confirmed)", score: 5 },
        { option: "No defined start or end", score: 0 }
    ],
    dropdown2: [
        { title: "Scope"},
        { option: "Contains numerous related projects or programme delivery", score: 5 },
        { option: "Made up of numerouse related deliverables and/or tasks", score: 3 },
        { option: "Various unrelated or ungrouped deliverables", score: 0 }
    ],
    dropdown3: [
        { title: "Oversight and Control 1"},
        { option: "Requires Programme Manager", score: 5 },
        { option: "Requires Project Manager", score: 3 },
        { option: "Reports to Line Manager", score: 0 }
    ],
    dropdown4: [
        { title: "Oversight And Control 2"},
        { option: "Requires Sponsoring SRO across multiple related projects", score: 5 },
        { option: "Requires Sponsoring SRO", score: 3 },
        { option: "No dedicated Sponsorship required", score: 0 }
    ],
    dropdown5: [
        { title: "Oversight And Control 3"},
        { option: "Requires oversight and control", score: 5 },
        { option: "No dedicated oversight, controlled via functional or departmental operational process", score: 0 }
        
    ],
    dropdown6: [
        { title: "Risk"},
        { option: "Carries risk and requires dedicated management of risks and issues", score: 5 },
        { option: "No specific risks", score: 0 }
       
    ],
    dropdown7: [
        { title: "Benefits"},
        { option: "Benefits of underlying projects support the overarching programme objective", score: 5 },
        { option: "Defined benefits associated with the delivery of the scope set out", score: 3 },
        { option: "No defined benefits", score: 0 }
    ],
    dropdown8: [
        { title: "Change"},
        { option: "Brings about change", score: 5 },
        { option: "Benefits from change or highlights the need for change", score: 0 }
       
    ],
    dropdown9: [
        { title: "Strategic Priority"},
        { option: "Low - Some limited alignment to strategic priorities", score: 2 },
        { option: "Medium - Project is aligned to strategic priorities but not key to their achievement ", score: 4 },
        { option: "High - Project will deliver transformative outcomes for, or mitigate significant risks to, the Government of Jersey which may directly or indirectly impact outcomes for the Island’s economy or community ", score: 1 },
        { option: "Very High - Project will deliver transformative outcomes for, or mitigate significant risks to, the Island’s economy or community", score: 1 }
    ],
    dropdown10: [
        { title: "Financial 1"},
        { option: "< £25,000", score: 2 },
        { option: ">£25,000 and < £250,000", score: 1 },
        { option: ">£250,000 and <£2,000,000", score: 1 },
        { option: ">£2,000,000", score: 1 },
        { option: ">£5,000,000", score: 1 }

    ],
    dropdown11: [
        { title: "Financial 2"},
        { option: "None - There are no financial benefits", score: 2 },
        { option: "Low - Benefits are estimated to be in excess of £50,000", score: 1 },
        { option: "Medium - Benefits are estimated to be in excess of £500,000", score: 1 },
        { option: "High - Benefits are estimated to be in excess of £1,000,000", score: 1 }
    ],
    dropdown12: [
        { title: "Financial 3"},
        { option: "Low - Some limited alignment to strategic priorities", score: 2 },
        { option: "Medium - Project is aligned to strategic priorities but not key to their achievement ", score: 4 },
        { option: "High - Project will deliver transformative outcomes for, or mitigate significant risks to, the Government of Jersey which may directly or indirectly impact outcomes for the Island’s economy or community ", score: 1 },
        { option: "Very High - Project will deliver transformative outcomes for, or mitigate significant risks to, the Island’s economy or community", score: 1 }
    ],
    dropdown13: [
        { title: "Financial 4"},
        { option: "Low - Some limited alignment to strategic priorities", score: 2 },
        { option: "Medium - Project is aligned to strategic priorities but not key to their achievement ", score: 4 },
        { option: "High - Project will deliver transformative outcomes for, or mitigate significant risks to, the Government of Jersey which may directly or indirectly impact outcomes for the Island’s economy or community ", score: 1 },
        { option: "Very High - Project will deliver transformative outcomes for, or mitigate significant risks to, the Island’s economy or community", score: 1 }
    ],
    dropdown14: [
        { title: "Duration"},
        { option: "Low - Duration < 6 months", score: 2 },
        { option: "Medium - Duration of 6+ months", score: 4 },
        { option: "High - Duration of 12+ months", score: 1 }
        
    ],
    dropdown15: [
        { title: "Complexity 1"},
        { option: "None - Has no technology requirements", score: 2 },
        { option: "Low - Has a low requirement for system change which is localised and affects 1 non core system only", score: 4 },
        { option: "Medium - Involves change to a core system or 2+ non core technologies", score: 1 },
        { option: "High - Requires change to core or critical systems or the handling of highly sensitive data", score: 1 }
    ],
    dropdown16: [
        { title: "Complexity 2"},
        { option: "Low - Limited operational change in one or more departments", score: 2 },
        { option: "Medium - Involves significant operational change for one department", score: 4 },
        { option: "High - Cross-departmental in nature or highly impactful to the operational delivery of a department", score: 1 }
        
    ],
    dropdown17: [
        { title: "Complexity 3"},
        { option: "Low - Includes a low number of stakeholder groups with broadly aligned requirements", score: 2 },
        { option: "Medium - Includes a large number of stakeholder groups with broadly aligned requirements", score: 4 },
        { option: "High - Includes a large number of stakeholder groups with differing or opposing requirements", score: 1 }
        
    ],
    dropdown18: [
        { title: "Complexity 4"},
        { option: "Low - Does not entail contributions from other departments", score: 2 },
        { option: "Medium - Some interdependent key projects ", score: 4 },
        { option: "High - Require unique methods or approaches to be adapted to successfully deliver, some interdependency on strategic or major projects", score: 1 }
        
    ],
    dropdown19: [
        { title: "Resourcing 1"},
        { option: "Low - Project team of <10 people ", score: 2 },
        { option: "Medium - Project team of >10 but less than 20 people ", score: 4 },
        { option: "High - Project team of 20+ people ", score: 1 }
        
    ],
    dropdown20: [
        { title: "Resourcing 2"},
        { option: "Low - Does not entail contributions from other departments", score: 2 },
        { option: "Medium - Minor involvement of other departments", score: 4 },
        { option: "High - Significant impact to other departments", score: 1 }
        
    ],
    dropdown21: [
        { title: "Information Security 1"},
        { option: "Yes", score: 2 },
        { option: "No", score: 4 }
        
    ],
    dropdown22: [
        { title: "Information Security 2"},
        { option: "Low - Public", score: 2 },
        { option: "Medium - Official  ", score: 4 },
        { option: "High/Medium - Official sensitive", score: 1 },
        { option: "High - Top secret/secret", score: 1 }
        
    ],
    dropdown23: [
        { title: "Risk"},
        { option: "Community, Corporate and departmental risk", score: 2 },
        { option: "Departmental - Departmental service delivery risks*", score: 4 },
        { option: "Corporate - Risks that affect the achievement of the objectives of the GoJ business model", score: 1 },
        { option: "Community - National events or emergencies", score: 1 }
        
    ],
    dropdown24: [
        { title: "Customer impact 1"},
        { option: "None - No impact to internal customers", score: 2 },
        { option: "Low impact / Medium or Low volume", score: 4 },
        { option: "Medium impact / High or Medium volume", score: 1 },
        { option: "High impact / High volume", score: 1 }
        
    ],
    dropdown25: [
        { title: "Customer impact 2"},
        { option: "None - No impact to external customers", score: 2 },
        { option: "Low impact / Medium or Low volume", score: 4 },
        { option: "Medium impact / High or Medium volume", score: 1 },
        { option: "High impact / High volume", score: 1 }
        
    ],
    dropdown26: [
        { title: "Commercial"},
        { option: "None - There will be no requirement for external expenditure and there are no deliverables from external parties", score: 2 },
        { option: "Low - Limited external expenditure or delivery by an external party", score: 4 },
        { option: "Medium - Requires some external expenditure or delivery by an external party", score: 1 },
        { option: "High - Requires significant external expenditure or is highly reliant on the delivery of an external party", score: 1 }
        
    ],
};
const ServiceDropdown = [];

const dropdownItems = Object.keys(dropdownData).length;
const radio = document.getElementById("dropdown");


function servicePopulate (){
ServiceDropdown.forEach(element => {
    let ServiceField = document.getElementById("service");
    let option = document.create
})
    

};


function radioPopulate(radioId, options) {
    const radio = document.getElementById(radioId);
    if (!radio) return; // Prevent error if element doesn't exist

    radio.innerHTML = ""; // Clear previous radio buttons

    options.forEach(item => {
        if (!item.option) return; // Skip objects without "option"
        let title = options.length > 0 && options[0].title ? options[0].title : radioId;
        let radioElement = document.createElement("label");
        radioElement.classList.add("question");

        let radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.value = item.score;
        radioButton.name = title; // Ensure all radios in a group share the same name
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



// Function to dynamically populate radio buttons
function populateRadioTag() {
    Object.keys(dropdownData).forEach(item => {
        radioPopulate(item, dropdownData[item]);
    });
}

populateRadioTag();


function score() {
    let ScoreOneArr = [];
    let ScoreTwoArr = [];
    let TypeOne = "";
    let TypeTwo = "";
    let recommendedType = "";

    // Split keys into two groups
    Object.keys(dropdownData).forEach((key, index) => {
        if (index < 8) {
            ScoreOneArr.push(key);
        } else {
            ScoreTwoArr.push(key);
        }
    });

    let scoreOne = 0;
    let scoreTwo = 0;

    // Loop through ScoreOneArr test
    ScoreOneArr.forEach(e => {
        // Get all checked radio buttons within the dropdown element
        let questionGroupOne = document.querySelectorAll(`#${e} input[type='radio']:checked`);

        // Loop through all checked radio buttons in the group
        questionGroupOne.forEach(question => {
            scoreOne += parseInt(question.value) || 0; // Add the value of each checked radio button
        });
    });

    // Loop through ScoreTwoArr
    ScoreTwoArr.forEach(e => {
        let questionGroupTwo = document.querySelectorAll(`#${e} input[type='radio']:checked`);  
        questionGroupTwo.forEach(question => {
            scoreTwo += parseInt(question.value) || 0;
        });
    });

    // Determine TypeOne based on scoreOne
    if (scoreOne > 35){
        TypeOne = "Programme";
    } else if 
        (scoreOne > 15) {
            TypeOne = "Project";
        }else {
            TypeOne = "BAU inititive are not required to follow the CPMO Delivery Framework";
        }
    
    
    switch(true) {
        case scoreTwo > 15:
            TypeTwo = "Project";
            break;
        case scoreTwo > 35:
            TypeTwo = "Programme";
            break;
        default:
            TypeTwo = "BAU inititive are not required to follow the CPMO Delivery Framework";
    }
    switch(true) {
        case scoreTwo > 2:
            recommendedType = "higher than 5";
            break;
        case scoreTwo > 5:
            recommendedType = "value higher than 2";
            break;
        default:
            recommendedType = "default";
    }

    // Display scores and types
    let scoreOneDisplay = document.getElementById("score-one");
    if (scoreOneDisplay) {
        scoreOneDisplay.value = scoreOne;
    }

    let scoreTwoDisplay = document.getElementById("scoreTwo");
    if (scoreTwoDisplay) {
        scoreTwoDisplay.value = scoreTwo;
    }

    let typeOneDisplay = document.getElementById("type-one");
    if (typeOneDisplay) {
        typeOneDisplay.value = TypeOne;
    }

    let typeTwoDisplay = document.getElementById("type-two");
    if (typeTwoDisplay) {
        typeTwoDisplay.value = TypeTwo;
    }
    let recommendedTypeDisplay = document.getElementById("recommendedType");
    if (recommendedType) {
        recommendedTypeDisplay.value = recommendedType;
    }
    scoreOneCheck = scoreOne;
}

// Initial score calculation
score();

// Add event listeners to all radio buttons
document.querySelectorAll("input[type='radio']").forEach(element => {
    element.addEventListener("change", score);
    element.addEventListener("input", score);
});

document.addEventListener("change", function(event) {
    if (event.target.matches("input[type='radio']")) {
        score();
    }
});
function initializeSignaturePad(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    let isDrawing = false;

    // Resize canvas to fit container
    function resizeCanvas() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Event listeners for drawing
    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    });

    canvas.addEventListener("mousemove", (e) => {
        if (isDrawing) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        }
    });

    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("mouseleave", () => isDrawing = false);
}

// Initialize multiple signature pads
initializeSignaturePad("signature-pad-1");
initializeSignaturePad("signature-pad-2");

// Function to clear a specific signature pad
function clearSignature(canvasId, event) {
    if (event) event.preventDefault(); // Prevent scrolling

    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}





