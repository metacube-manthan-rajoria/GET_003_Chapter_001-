const hasNumber = /\d/;
let currentItem1 = {
    itemIndex:0,
    employeeName: "",
    employeeGender: "",
    employeeEmail: "",
    employeePassword: "",
    employeeNumber: ""
};

let currentItem2 = 0;

function hideSection(elements){
    for(const element of elements){
        element.style.display = "none";
    }
}

function nextEmployeeSection(){
    let elements = document.getElementsByClassName("employee_form_item");

    
    if(currentItem1.itemIndex < elements.length - 1){
        if(currentItem1.itemIndex == 0){
            let textBox = document.getElementById("employee-name");
            let textBoxValue = textBox.value;

            if(textBoxValue.length < 2 || hasNumber.test(textBoxValue)) return;
            currentItem1.employeeName = textBoxValue;
            let label = document.getElementById("employee_form_gender_label");
            label.innerText = "Hi " + currentItem1.employeeName + ", Can I know your gender.";
        }else if(currentItem1.itemIndex == 1){
            let radio1 = document.getElementById("employee-gender-male");
            let radio2 = document.getElementById("employee-gender-female");
            let radio3 = document.getElementById("employee-gender-other");

            if(!radio1.checked && !radio2.checked && !radio3.checked) return;
            let label = document.getElementById("employee_form_email_label");
            label.innerText = "Hi " + currentItem1.employeeName + ", Can I know your Email.";
        }else if(currentItem1.itemIndex == 2){
            let textBox = document.getElementById("employee-email");
            let textBoxValue = textBox.value;

            if(!textBox.validity.valid) return;
            currentItem1.employeeEmail = textBoxValue;
        }else if(currentItem1.itemIndex == 3){
            let textBox1 = document.getElementById("employee-password");
            let textBox2 = document.getElementById("employee-password-confirmation");
            let textBoxValue1 = textBox1.value;
            let textBoxValue2 = textBox2.value;

            if(!textBox1.validity.valid || !textBox2.validity.valid || textBoxValue1!==textBoxValue2) return;
            currentItem1.employeePassword = textBoxValue1;
        }else{
            let textBox = document.getElementById("employee-phone-number");
            let textBoxValue = textBox.value;

            if(!textBox.validity.valid) return;
            currentItem1.employeeNumber = textBoxValue;

            alert(`

            `);
        }

        currentItem1.itemIndex++;
        hideSection(elements);
        elements[currentItem1.itemIndex].style.display = "block";
    }else{
        elements[elements.length - 1].style.display = "block";
    }
}

function nextVehicleSection(){
    let elements = document.getElementsByClassName("vehicle_form_item");
    hideSection(elements)
    currentItem2++;

    if(currentItem2 < elements.length - 1){
        elements[currentItem2].style.display = "block";
    }else{
        elements[elements.length - 1].style.display = "block";
    }
}

function initialize(){
    let elements1 = document.getElementsByClassName("employee_form_item");
    let elements2 = document.getElementsByClassName("vehicle_form_item");
    hideSection(elements1);
    hideSection(elements2);
    elements1[0].style.display = "block";
    elements2[0].style.display = "block";

    let radios = document.getElementsByClassName("employee-gender-radio");
    for(const radio of radios){
        radio.addEventListener("change", (e)=>{
            currentItem1.employeeGender = e.target.value;
        })
    }
}

