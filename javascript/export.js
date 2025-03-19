
let exportData = {};


function buildRadioObject() {
    let formTexts = document.querySelectorAll("input[type='text']"); // Select all text inputs
    let formRadios = document.querySelectorAll("input[type='radio']:checked"); // Select checked radios
    let formDate = document.querySelectorAll("input[type='date']");
   
    let formData = {}; 

    formDate.forEach(element => {
        if (element.name) {
            formData[element.name] = element.value; 
        }
    });
    // Add text input values to the object
    formTexts.forEach(element => {
        if (element.name) {
            formData[element.name] = element.value; 
        }
    });

    // Add selected radio button values to the object
    formRadios.forEach(element => {
        if (element.name) {
            formData[element.name] = element.id;
        }
    });
    

    let outputElement = document.getElementById("reff");
    if (outputElement) {
        outputElement.innerText = JSON.stringify(formData, null, 2);
    } else {
        console.error("Element with ID 'reff' not found.");
    }
    exportData = formData;
}




document.addEventListener("change", (event) => {
    if (event.target.matches("input[type='text'], input[type='radio'], input[type='date']")) {
        buildRadioObject();
    }
});


setTimeout(buildRadioObject, 100);

async function sendToPowerAutomate(event) {
    event.preventDefault(); // Prevent default form submission

    
    let data = exportData;

    try {
        let response = await fetch("https://prod-28.westeurope.logic.azure.com:443/workflows/0cf0be27d4504b8aa24c7389183d902c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=8Pj7td5CpvRMxlaDrj1ATtbrywxcvgq_JoqHiJ1kyHo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("Data sent successfully!");
            document.getElementById("contactForm").reset(); // Reset form after submission
        } else {
            alert("Error sending data.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An unexpected error occurred.");
    }
}


//Prefilled link
document.addEventListener("DOMContentLoaded", function () {
    // Function to generate the prefilled form link
    function generatePrefilledFormLink(baseURL, formData) {
        let params = new URLSearchParams(formData);
        return `${baseURL}?${params.toString()}`;
    }

    // Get the base URL (without query params)
    const formURL = window.location.href.split('?')[0];

    // Initialize form fields with empty values
    const formFields = {
        "initiative-name": "", // For radio buttons
        "completed-by": "",
        "date": "",
        "Timing": "",
        "Scope": "",
        "Oversight and Control 1": "",
        "Oversight and Control 2": "",
        "Oversight and Control 3": "",
        "Risk": "",
        "Benefits": "",
        "Change": "",
        "Strategic Priority": "",
        "Financial 1": "",
        "Financial 2": "",
        "Financial 3": "",
        "Financial 4": ""




    };

    // Function to update the prefilled link
    function updatePrefilledLink() {
        // Get the latest values from input fields
        Object.keys(formFields).forEach(fieldID => {
            let inputElement = document.querySelector(`[name="${fieldID}"]`);
            if (inputElement) {
                if (inputElement.type === "radio") {
                    // Check which radio button is selected
                    const selectedRadio = document.querySelector(`[name="${fieldID}"]:checked`);
                    formFields[fieldID] = selectedRadio ? selectedRadio.value : ""; // Get the value of the selected radio
                } else {
                    formFields[fieldID] = inputElement.value;
                }
            }
        });

        // Generate and update the prefilled link
        let prefilledLink = generatePrefilledFormLink(formURL, formFields);
        const linkElement = document.getElementById("link");
        if (linkElement) {
            linkElement.textContent = prefilledLink;
            linkElement.href = prefilledLink;
        }
    }

    // Prefill the form fields based on URL query parameters
    const queryParams = new URLSearchParams(window.location.search);
    Object.keys(formFields).forEach(fieldID => {
        const paramValue = queryParams.get(fieldID);
        let inputElement = document.querySelector(`[name="${fieldID}"]`);
        if (inputElement) {
            if (inputElement.type === "radio" && paramValue) {
                // Select the prefilled radio button
                const radioButton = document.querySelector(`[name="${fieldID}"][value="${paramValue}"]`);
                if (radioButton) {
                    radioButton.checked = true;
                }
            } else if (paramValue) {
                // Prefill text and date fields
                inputElement.value = paramValue;
            }
        }
    });

    // Attach event listeners to form fields to update link when the form changes
    document.querySelectorAll("input, textarea, select").forEach(input => {
        input.addEventListener("input", updatePrefilledLink);
    });

    // Initialize the prefilled link on page load
    updatePrefilledLink();
});
