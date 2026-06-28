let patients = [
  { name: "Ahmed", severity: 3, hasData: true, condition: "normal" },
  { name: "Sara", severity: 5, hasData: true, condition: "critical" },
  { name: "Omar", severity: 2, hasData: false, condition: "normal" },
  { name: "Mariam", severity: 4, hasData: true, condition: "critical" },
  { name: "Youssef", severity: 1, hasData: false, condition: "normal" }
];

function hospital(patients) {
    let missing_data = [];
    let treatedImmediately = [];
    let normalTreated = [];
    for(let patient of patients){
        if(patient.hasData == false) {
            missing_data.push(patient);
            continue;
        }
        if(patient.condition == "normal")  treatedImmediately.push(patient);
        
        else normalTreated.push(patient);
    }

    console.table(treatedImmediately);
    console.table(normalTreated.sort((a, b) => a.severity - b.severity));
    console.table(missing_data);

}
hospital(patients)

