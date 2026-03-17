function predictDisease() {

let symptoms = [];

document.querySelectorAll("input[type=checkbox]:checked").forEach((item)=>{
symptoms.push(item.value);
});

let disease = "No disease detected";

// Fever diseases
if(symptoms.includes("Fever") && symptoms.includes("Cough")){
disease = "Flu";
}

// Cold
else if(symptoms.includes("Cold") && symptoms.includes("Cough")){
disease = "Common Cold";
}

// Food Poisoning
else if(symptoms.includes("Vomiting") && symptoms.includes("Stomach Pain")){
disease = "Food Poisoning";
}

// Migraine
else if(symptoms.includes("Headache") && symptoms.includes("Blur Vision")){
disease = "Migraine";
}

// Heart Problem
else if(symptoms.includes("Chest Pain") && symptoms.includes("Short Breath")){
disease = "Heart Disease";
}

// Skin Allergy
else if(symptoms.includes("Skin Rash") && symptoms.includes("Itching")){
disease = "Skin Allergy";
}

// Diabetes
else if(symptoms.includes("Weight Loss") && symptoms.includes("Fatigue")){
disease = "Possible Diabetes";
}

// Anxiety
else if(symptoms.includes("Anxiety") && symptoms.includes("Sleep Problem")){
disease = "Anxiety Disorder";
}

document.getElementById("result").innerHTML =
"🩺 Possible Disease: " + disease;

}
