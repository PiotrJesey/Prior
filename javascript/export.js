

async function sendToPowerAutomate(event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let score = document.getElementById("score").innerText;
    let dropdown1 = document.getElementById("dropdown1");

    // Validate required fields
    if (!name || !email || dropdown1.selectedIndex === 0) {
        alert("Please fill in all required fields.");
        return;
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

