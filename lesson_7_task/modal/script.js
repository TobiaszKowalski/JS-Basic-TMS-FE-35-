let $add = document.querySelector(".add-user");
let $modal = document.querySelector(".modal");
let $close = document.querySelectorAll(".close");
let $ok = document.querySelector(".ok");

function closeModal() {
    let $inputs = document.querySelectorAll("input");
    for (let $input of $inputs) {
        $input.value = "";
    }
    $modal.classList.remove("show");
}

function valid() {
    let $firstName = form.firstName.value;
    let $lastName = form.lastName.value;
    let $age = form.age.value;
    let fail = false;

    if ($firstName == "" || $firstName == " ") {
        fail;
    } else {!fail};
    if ($lastName == "" || $firstName == " ") {
        fail;
    } else {!fail};
    if ($age == "" || $firstName == " ") {
        fail;
    } else {!fail};
    if (fail) {return false} else {return true}
}

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("modal")) {
        closeModal();
    }

    if (e.target.classList.contains("close")) {
        closeModal();
    }
});

$add.addEventListener("click", function(){
    $modal.classList.add("show");
});

$ok.addEventListener("click", function(){
    valid();
    if (valid()) {
        let $inputs = document.querySelectorAll("input");
        $inputs.classList.add(".popap-input")
    }
})