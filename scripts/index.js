"use strict";

document.addEventListener("DOMContentLoaded", () => {
    let fields = document.querySelectorAll("input");
    let passwordFields = document.querySelectorAll("input[type='password']");
    let submitButton = document.querySelector(".right_form_submit button");

    fields.forEach((elem) => {
       validatingInput(elem);
    });

    passwordFields.forEach((elem) => {
        isPasswordMatch(elem);
    });

    submitButton.addEventListener("click", (elem) => {
        validatingAllInput(fields);
    });
});

function validatingInput(elem) {
    let delayTimer;

    elem.addEventListener("keyup", (events) => {
        clearTimeout(delayTimer);

        delayTimer = setTimeout(() => {
            if (events.target.value.length > 3) {
                events.target.classList.add("hasValue");
            } else {
                events.target.classList.remove("hasValue");
            }
        }, "1000");
    });
}

function isPasswordMatch(elem) {
    let oppositeField;

    elem.addEventListener("keyup", (events) => {
        if (events.target.id == "password") {
            oppositeField = document.getElementById("cpassword");

            if (oppositeField.value == "") {
                return;
            } else {
                if (oppositeField.value == events.target.value) {
                    oppositeField.style.border = "1px solid green";
                    oppositeField.classList.remove("error");
                    oppositeField.classList.remove("pwMissmatch");
                    events.target.style.border = "1px solid green";
                    events.target.classList.remove("error");
                    events.target.classList.remove("pwMissmatch");
                } else {
                    oppositeField.style.border = "1px solid red";
                    oppositeField.classList.add("error");
                    oppositeField.classList.add("pwMissmatch");
                    document.documentElement.style.setProperty("--input-outline", "none");
                    events.target.style.border = "1px solid red";
                    events.target.classList.add("error");
                    events.target.classList.add("pwMissmatch");
                }
            }
        } else if (events.target.id == "cpassword") {
            oppositeField = document.getElementById("password");

            if (oppositeField.value == "") {
                return;
            } else {
                if (oppositeField.value == events.target.value) {
                    oppositeField.style.border = "1px solid green";
                    oppositeField.classList.remove("error");
                    oppositeField.classList.remove("pwMissmatch");
                    events.target.style.border = "1px solid green";
                    events.target.classList.remove("error");
                    events.target.classList.remove("pwMissmatch");
                } else {
                    oppositeField.style.border = "1px solid red";
                    oppositeField.classList.add("error");
                    oppositeField.classList.add("pwMissmatch");
                    document.documentElement.style.setProperty("--input-outline", "none");
                    events.target.style.border = "1px solid red";
                    events.target.classList.add("error");
                    events.target.classList.add("pwMissmatch");
                }
            }
        }
    });

    elem.addEventListener("blur", (events) => {
        if (events.target.id == "password") {
            oppositeField = document.getElementById("cpassword");

            if (!events.target.classList.contains("error")) {
                events.target.style.border = "1px solid #E5E7EB";
                oppositeField.style.border = "1px solid #E5E7EB";
            }

        } else if (events.target.id == "cpassword") {
            oppositeField = document.getElementById("password");

            if (!events.target.classList.contains("error")) {
                events.target.style.border = "1px solid #E5E7EB";
                oppositeField.style.border = "1px solid #E5E7EB";
            }
        }
    });
}

function validatingAllInput(fields) {
    fields.forEach((elem) => {
        if (elem.type =="password" && elem.classList.contains("error")) {
            console.log("error fix ");
            return;
        }
    });
}