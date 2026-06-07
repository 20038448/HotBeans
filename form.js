/* grab inputs from the html document fields */
const FirstName = document.getElementById("fname");
const LastName = document.getElementById("lname");

/* function checks text validation so users only use standard letters */
function onlyLetters(field) {
    const regex = /^[A-Za-z]+$/;

    /* show alert box error if text has numbers */
    if (!regex.test(field.value) && field.value !== "") {
        alert("Please only use characters A-Z without any symbols and/or numbers.");
        field.value = field.value.replace(/[^A-Za-z]/g, '');
        return false;
    }
    return true;
}

/* active listener checks while user types */
if (FirstName && LastName) {
    FirstName.addEventListener("input", function() {
        onlyLetters(FirstName);
    });

    LastName.addEventListener("input", function() {
        onlyLetters(LastName);
    });
}