let total = 0;
let sizingTotal = 0;
let type ="";
let sizingType ="";
let recommendationType="";
let exportData = {};
function calculateTotalScore() {
    total = 0;
    type = "";
    let dropdowns = document.querySelectorAll(".scoreDropdown");
    
    dropdowns.forEach(dropdown => {
        total += parseInt(dropdown.value);
    });
    if(total > 2){
         type ="test"
    }else{
         type ="null";
    }
   
    document.getElementById("totalScore").innerText = total;
    document.querySelectorAll(".scoreDropdown").forEach(dropdown => {
    dropdown.addEventListener("change", calculateTotalScore);
   return total;
   
    });
    
    
    
}
function calculateTotalSizingScore(){
    sizingTotal = 0;
    sizingType = "";
    recommendationType ="";

    let sizingDropdown = document.querySelectorAll(".scoreSizingDropdown");
    sizingDropdown.forEach(dropdown => {
        sizingTotal += parseInt(dropdown.value);
    });
    if( sizingTotal > 2){
        sizingType = "sizing Type Test";   
    }else{
        sizingType = "null";
    }
    if(sizingTotal > 3){
        recommendationType = "rec";
    }else{
        recommendationType ="rec null"
    }

    document.getElementById("totalSizingScore").innerText = sizingTotal;
    document.querySelectorAll(".scoreSizingDropdown").forEach(dropdown =>{
        dropdown.addEventListener("change", calculateTotalSizingScore);
    return sizingTotal;
    });
} 
calculateTotalScore();
calculateTotalSizingScore();

 
async function buildObject() {
    let formElements = document.querySelectorAll("input, select, textarea, input[type='radio'], label");
    dataObject = {};
    formElements.forEach(element => {
        if (element.tagName === "SELECT") {
            dataObject[element.id] = element.options[element.selectedIndex].text;
        } else {
            dataObject[element.name] = element.value;
        } 
        if (element.id === "score"){
            dataObject[element.id] = total.toString();
        }
        if(element.id ==="scoreType"){
            dataObject[element.name] = type;
        }
        if(element.id === "sizingScore"){
            dataObject[element.id] = sizingTotal.toString();
        }
        if(element.id === "scoreSizingType"){
            dataObject[element.id] = sizingType;
        }
        if(element.id === "recommendedType"){
            dataObject[element.id] = recommendationType;
        }
      
       
           
    })
    
    exportData  = dataObject;
    document.getElementById("ref").innerText = JSON.stringify(dataObject, null, 2);
    console.log(dataObject);
}
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





function attachEventListeners() {
    let formElements = document.querySelectorAll("input, select, textarea, a, input[type='radio']");

    formElements.forEach(element => {
        element.addEventListener("input", buildObject);  // For text inputs & textarea
        element.addEventListener("change", buildObject); // For dropdowns
        element.addEventListener("input", buildRadioObject);  // For text inputs & textarea
        element.addEventListener("change", buildRadioObject); // For dropdowns
    });
}

attachEventListeners(); // Attach event listeners on page load
buildObject(); // Initialize with current values
//dropdown();
setTimeout(buildRadioObject, 500);

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
//for testing purpose, display alert with all empty fields
function dropdown(){
    let dropDownElement = document.querySelectorAll("select");
    dropdownObject = {};
 dropDownElement.forEach(element => {
    if(element.selectedIndex === 0)
    {alert(element.id)}
    } )
}

//Prefilled link
document.addEventListener("DOMContentLoaded", function () {
    function generatePrefilledFormLink(baseURL, formData) {
        let params = new URLSearchParams(formData);
        return `${baseURL}?${params.toString()}`;
    }
 
    const formURL = window.location.href
    const formFields = exportData;

    function updatePrefilledLink() {
        // Get the latest values from input fields
        Object.keys(formFields).forEach(fieldID => {
            let inputElement = document.querySelector(`[name="${fieldID}"]`);
            if (inputElement) {
                formFields[fieldID] = inputElement.value;
            }
        });

        // Generate and update the prefilled link
        let prefilledLink = generatePrefilledFormLink(formURL, formFields);
        console.log(prefilledLink); // Debugging

        const linkElement = document.getElementById("link");
        if (linkElement) {
            linkElement.textContent = prefilledLink;
            linkElement.href = prefilledLink;
        }
    }

    // Attach event listeners to form fields
    document.querySelectorAll("input, textarea, select").forEach(input => {
        input.addEventListener("input", updatePrefilledLink);
    });

    // Initialize link on page load
    updatePrefilledLink();
});