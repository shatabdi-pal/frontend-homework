// Add your code here
// grab reference to form


const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
  
event.preventDefault();
console.log("submitted");
console.log("Full name: ", form.elements.fullName.value);
console.log("Email: ", form.elements.emailId.value);
let select = document.querySelector("select");
let number = 0;
    for (let option of Array.from(select.options)) {
      if (option.selected) {
        number += Number(option.value);
        text = option.text;
      }
    }
    console.log("Registration status: ",text);

let checkboxes = document.querySelectorAll('input[name="course"]:checked');
let values = [];
  checkboxes.forEach((checkbox) => {
      values.push(checkbox.value);
  });
console.log("Courses: ", values);
let content = document.getElementById("anythingElse").value;
console.log("Anything else: ", content);
 
}