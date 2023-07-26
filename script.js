function addNewWEField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");


    let weOb = document.getElementById("we");
    let weAddButtonOb = document. getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
     

    if(weOb){

        clearItems();
    }
} 


function clearItems(){

     document.getElementById("we"); 
}