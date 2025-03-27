
let exportData = {};
let exportLinkData = {}; // Global object to hold form data
const baseURL = window.location.href.split('?')[0]; // Get the base URL without query parameters
let link = ""; //global link


function buildRadioObject() {
    let formTexts = document.querySelectorAll("input[type='text']");
    let formRadios = document.querySelectorAll("input[type='radio']:checked");
    let formDate = document.querySelectorAll("input[type='date']");
    let formEmail = document.querySelectorAll("input[type='email']");
    let signatureCanvases = document.querySelectorAll("canvas");

    let formData = {}; 
    let exportLink = {}; 

    // Loop through date inputs and add to formData
    formDate.forEach(element => {
        if (element.name) {
            formData[element.name] = element.value; 
            exportLink[element.name] = element.value;
        }
    });

    // Loop through text inputs and add to formData
    formTexts.forEach(element => {
        if (element.name) {
            formData[element.name] = element.value; 
            exportLink[element.name] = element.value;
        }
    });

    formEmail.forEach(element => {
        if (element.name) {
            formData[element.name] = element.value; 
            exportLink[element.name] = element.value;
        }
    });

    formRadios.forEach(element => {
        if (element.name) {
            formData[element.name] = element.id; 
            exportLink[element.name] = element.value;
        }
    });
    

    // **Convert Signature Canvas to Base64 and Store**
    signatureCanvases.forEach(canvas => {
        if (canvas.id) {
            let signatureBase64 = canvas.toDataURL(); // Convert canvas to Base64 PNG
            formData[canvas.id] = signatureBase64; // Store in formData
            exportLink[canvas.id] = signatureBase64; // Optionally, you can add to exportLink as well
        }
    });

    // **Create Query Parameters for URL**
    const queryParams = Object.keys(exportLink).map(key => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(exportLink[key]); // Added "=" to ensure proper query format
    });
   
            
    // **Generate URL**
    const queryString = queryParams.join('&');
    const url = baseURL + '?' + queryString;
    link = url;

    // **Update the DOM with the Generated Link**
    let refiElement = document.getElementById("reff");
    if (refiElement) {
        refiElement.innerText = link;
    }

    // **Display Form Data in JSON Format**
    let objectDisplay = document.getElementById("radioDisplay");
    if (objectDisplay) {
        objectDisplay.innerText = JSON.stringify(formData, null, 2);
    }
}


// Function to download an HTML file with a button linking to the generated URL
function downloadFile() {
    let content = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Centered Button</title>
<style>
.container {
    background-color: rgba(0,134,203,0.8);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
#inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    width: 50%;
    height: 20%;
    padding-bottom: 10px;
    margin-bottom: 10px;
    
}
.button {
    margin: auto;
    align-self: center;
    background-color: rgba(0,134,203,0.8);;
    color: white;
    padding: 15px 30px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}

.button:hover {
    background-color: lightgray;
}
p {
    text-justify: auto;
    margin: auto;
    text-wrap: true;
}
</style>
</head>
<body>

<div class="container">
    <div id="inner">
        <p>Please click on the button to continue to your form</p>
<a href="${link}" class='button'>continue</a>
</div>
</div>

</body>
</html>`;

    // Create a Blob from the HTML content
    const blob = new Blob([content], { type: "text/html" });
    
    // Create a link to download the Blob as a file
    const downloadLink = document.createElement("a"); // Renamed to avoid conflict
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "myForm.html";
    
    // Append the link to the body, click it to start download, then remove it
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

// Set up event listeners to update form data on change or input
document.addEventListener("change", (event) => {
    if (event.target.matches("input[type='text'], input[type='radio'], input[type='date']")) {
        buildRadioObject();
    }
});

document.addEventListener("input", (event) => {
    if (event.target.matches("input[type='text'], input[type='radio'], input[type='date']")) {
        buildRadioObject();
    }
});

// Initial execution after a slight delay to ensure elements are loaded
window.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(buildRadioObject, 100);
});

// Example of calling the downloadFile function (e.g., on a button click)
document.getElementById("downloadButton").addEventListener("click", () => {
    downloadFile(); // This will trigger the download of the HTML file with the link
});


async function sendToPowerAutomate(event) {
    event.preventDefault(); // Prevent default form submission
    const canvas = document.getElementById("signature-pad");
    const signatureDataURL = canvas.toDataURL();
    
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
document.addEventListener("DOMContentLoaded", function () {
    function generatePrefilledFormLink(baseURL, formData) {
        let params = new URLSearchParams(formData);
        return `${baseURL}?${params.toString()}`;
    }

    const formURL = window.location.href.split('?')[0];

    const formFields = {
        "initiative-name": "",
        "completed-by": "",
        "date": "",
        "email": "",
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
        "Financial 4": "",
        "Commercial": "",
        "Duration": "",
        "Complexity 1": "",
        "Complexity 2": "",
        "Complexity 3": "",
        "Complexity 4": "",
        "Resourcing 1": "",
        "Resourcing 2": "",
        "Information Security 1": "",
        "Information Security 2": "",
        "Customer impact 1": "",
        "Customer impact 2": "",
        "ratification": "",
        "ratification-2": "",
        "sponsor": "",
        "project-name": "",
        "score-one": "",
        "scoreTwo": "",
        "type-two": "",
        "recommendedType": "",
        "type-one": "",
        "signature1": "" // Add a placeholder for the signature
    };

    function updatePrefilledLink() {
        Object.keys(formFields).forEach(fieldID => {
            let inputElement = document.querySelector(`[name="${fieldID}"]`);
            if (inputElement) {
                if (inputElement.type === "radio") {
                    const selectedRadio = document.querySelector(`[name="${fieldID}"]:checked`);
                    formFields[fieldID] = selectedRadio ? selectedRadio.value : "";
                } else if (inputElement.type === "file" || inputElement.tagName === "CANVAS") {
                    // Handle signature or file inputs
                    if (inputElement.tagName === "CANVAS") {
                        formFields[fieldID] = inputElement.toDataURL(); // Serialize canvas to base64
                    }
                    // For file input, you would need special handling based on how you wish to display the file (link to the uploaded file, etc.)
                } else {
                    formFields[fieldID] = inputElement.value;
                }
            }
        });

        let prefilledLink = generatePrefilledFormLink(formURL, formFields);
        const linkElement = document.getElementById("tag name");
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
                const radioButton = document.querySelector(`[name="${fieldID}"][value="${paramValue}"]`);
                if (radioButton) {
                    radioButton.checked = true;
                }
            } else if (paramValue) {
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


console.log(link);
