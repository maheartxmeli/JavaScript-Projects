function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("You must fill out your first name");
        return false;
    }
    
}

