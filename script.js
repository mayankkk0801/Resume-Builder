function addNewWEField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder" , "Enter here");


    let weOb = document.getElementById("we");
    let weAddButtonOb = document. getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
     

}

function addNewAQField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder" , "Enter here");


    let aqOb = document.getElementById("eq");
    let aqAddButtonOb = document. getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
     
}

function removeWEField() {
    let weFields = document.getElementsByClassName("weField");
    if (weFields.length > 1) {
        weFields[weFields.length - 1].remove();
    }
}

function removeAQField() {
    let aqFields = document.getElementsByClassName("eqField");
    if (aqFields.length > 1) {
        aqFields[aqFields.length - 1].remove();
    }
}

// genearating cv
function generateCV() {
    // console.lpg("generating CV")

    let nameField= document.getElementById("nameField").value;

    let nameTemplate=document.getElementById("nameTemplate");

    nameTemplate.innerHTML= nameField;

    //direct

    document.getElementById("nameT2").innerHTML=nameField

    //contact
    document.getElementById("contactTemplate").innerHTML= document.getElementById("contactField").value;

    //address
    document.getElementById("addressTemplate").innerHTML=document.getElementById("addressField").value;
    
    document.getElementById("fbT").innerHTML=document.getElementById("FBField").value;
    
    document.getElementById("githubT").innerHTML=document.getElementById("GitField").value;
    
    document.getElementById("linkedinT").innerHTML=document.getElementById("LinkedinField").value;

    //CurrentPosition

    document.getElementById("CurrentPositionT").innerHTMl=document.getElementById("CurrentPositionField").value;

    //we

    let wes=document.getElementsByClassName("weField")

    let str="";

    for(let e of wes){

        str = str + `<li>${e.value}</li>`;


    }

    document.getElementById("weT").innerHTML=str;

    //aq

    let aqs= document.getElementsByClassName("eqField")

    let str1=''

    for(let e of aqs){

        str1+=`<li>${e.value}</li>`;

    }
    document.getElementById("eqT").innerHTML = str1;
 

    document.getElementById("cv-form").style.display="none"
    document.getElementById("cv-template").style.display="block"
}

//prnt cv

function printCV(){

    window.print()
}

