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
const dropdownCount = Object.keys(dropdownData).length;
console.log(dropdownCount);

function Test() {
    for (let i = 1; i <= dropdownCount; i++) {
        let part = "dropdown" + i;  // Construct the part name (dropdown0, dropdown1, ...)
         console.log(part);  // Access the correct dropdown data
    }
}
Test();