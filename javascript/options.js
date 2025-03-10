const options = [
    { option: "test", score: 0 },
    { option: 2, score: 2 },
    { option: 3, score: 5 }
];



        // Get the dropdown element
        const dropdown = document.getElementById("dropdown");

        // Populate the dropdown with options from the array
        options.forEach(item => {
            const optionElement = document.createElement("option");
            optionElement.value = item.option; // Set value as the option number
            optionElement.textContent = `Option ${item.option}`; // Display only option number
            dropdown.appendChild(optionElement);
        });
export default options;