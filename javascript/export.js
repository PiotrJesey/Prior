

async function sendToPowerAutomate(event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let score = document.getElementById("score").innerText;
    let dropdown = document.querySelectorAll("select");

    // Validate required fields
    if (dropdown.selectedIndex === 0) {
        alert("Please fill in all required fields.");
       // return;
    }

    let selectedText = dropdown1.options[dropdown1.selectedIndex].text;

    let data = {
        Name: name,
        Email: email,
        Score: score,
        Dropdown1: selectedText
    };

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
function dropdown(){
    let dropDownElement = document.querySelectorAll("select");
    dropdownObject = {};
 dropDownElement.forEach(element => {
    if(element.selectedIndex === 0)
    {alert(element.id)}
    } )
}
async function buildObject() {
    let formElements = document.querySelectorAll("input, select, textarea");
    let dataObject = {};

    formElements.forEach(element => {
        if (element.tagName === "SELECT") {
            dataObject[element.id] = element.options[element.selectedIndex].text;
        } else {
            dataObject[element.name] = element.value;
        }
    });

    document.getElementById("ref").innerText = JSON.stringify(dataObject, null, 2);
    console.log(dataObject);
}

    

function attachEventListeners() {
    let formElements = document.querySelectorAll("input, select, ctextarea");

    formElements.forEach(element => {
        element.addEventListener("input", buildObject);  // For text inputs & textarea
        element.addEventListener("change", buildObject); // For dropdowns
    });
}

attachEventListeners(); // Attach event listeners on page load
buildObject(); // Initialize with current values
//dropdown();

