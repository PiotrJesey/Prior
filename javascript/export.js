
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
   

    // **Display Form Data in JSON Format**
    let objectDisplay = document.getElementById("radioDisplay");
    if (objectDisplay) {
        objectDisplay.innerText = JSON.stringify(formData, null, 2);
    }
}



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
