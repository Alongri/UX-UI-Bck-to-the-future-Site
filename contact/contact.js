function init() {}

function formX() {
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;

    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);

    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (firstName.length == 0) {
        alert("Name is required");
        return;
    } else if (firstName.length < 2) {
        alert("Name must be at least 2 characters");
        return;
    } else if (firstName.length > 20) {
        alert("Name must be less than 20 characters");
        return;
    } else if (lastName.length == 0) {
        alert("Last name is required");
        return;
    } else if (lastName.length < 2) {
        alert("Last name must be at least 2 characters");
        return;
    } else if (lastName.length > 20) {
        alert("Last name must be less than 20 characters");
        return;
    } else if (email.length == 0) {
        alert("Email is required");
        return;
    } else if (!emailReg.test(email)) {
        alert("Email invalid");
        return;
    }

    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#email").value = "";
    document.querySelector('#id_complete').innerHTML = "Thank you " + firstName + " " + lastName + " we will be in touch..."

}

init();