const data = {
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

function length(){
    let arr =[]
    let obj = Object.keys(data).forEach(key => {

        arr.push(key); // Logs: key1, key2, key3
    });
    arr.push(obj);

    return arr;
}
Object.keys(data).forEach(key => {

    console.log(key); // Logs: key1, key2, key3
});

length();

