
console.log("Onyinye");


// function processField(field){
//     field.style.border = "1px solid black";
//     const fieldValue = field.value;
//     if (fieldValue.trim().length ===0){
//         field.style.border= "1px solid red";
//         return false;
//     }else {
//         return fieldValue
//     }
// }

function processField(){
    if (document.getElementById("fname").value == " "){
        alert('please enter your first name')
    //field.style.border = "1px solid red"
     return false;
    }
}

