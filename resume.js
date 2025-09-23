

let myName = "Tessa";
console.log("Hello my name is Tessa");
let myEmail = "hutch4371@oru.edu";
let title = "Student";
let education ="Oral Roberts University";
let experience = "Crumbl, Cinnabon, Coffee Shop";
let skills = ["Baking", "Leadership", "Communication"];
let skillsList = document.createElement("ul")


document.getElementById("my-name").textContent = myName;
document.getElementById("my-email").textContent = myEmail;
document.getElementById("title").textContent = title;
document.getElementById("experience").textContent = experience;
document.getElementById("education").textContent = education;
document.getElementById("skills-section").appendChild(skillsList);

for (let i = 0; i < skills.length; i++) {
 let li = document.createElement("li");
 li.textContent = skills[i];
 skillsList.appendChild(li);
}


function showFunFact() {
 alert("Fun Fact: I love scuba diving!");
}

