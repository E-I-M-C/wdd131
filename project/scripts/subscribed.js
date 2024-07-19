// Starting constants and variables
const main = document.querySelector("main");
let subscribed = localStorage.getItem("subscribed") || 0;
const section = document.createElement("section");
const h2 = document.createElement("h2");

// Code to hide form if user has already subscribed
if (subscribed == 0) {
    subscribe();

    const submitForm = document.querySelector(".wf1");

    submitForm.addEventListener('submit', () => {
        localStorage.setItem("subscribed", 1);
        alert("You have subscribe successfully.");
    });
} else if (subscribed != 0) {
    const button = document.createElement("button");

    button.textContent = `Subscribe with Another Email`;
    button.id = "subscribe-again";

    section.appendChild(button);

    main.appendChild(section);

    button.addEventListener('click', () => {
        subscribe();
    });
}

// Function to reset the section being appended to the main element
function reset() {
    section.innerHTML = ``;
}

// Function to show the form
function subscribe() {
    reset();

    const form = document.createElement("form");
    const fieldset = document.createElement("fieldset");
    const labelEmail = document.createElement("label");
    const email = document.createElement("input");
    const labelFname = document.createElement("label");
    const fname = document.createElement("input");
    const labelLname = document.createElement("label");
    const lname = document.createElement("input");
    const submit = document.createElement("input");

    email.type = "email";
    email.id = "email";
    email.required = true;
    email.autocomplete = true;
    labelEmail.innerHTML = `Email*`;
    labelEmail.appendChild(email);
    fname.type = "text";
    fname.id = "fname";
    labelFname.innerHTML = `First Name <span>(Optional)</span>`;
    labelFname.appendChild(fname);
    lname.type = "text";
    lname.id = "lname";
    labelLname.innerHTML = `Last Name <span>(Optional)</span>`;
    labelLname.appendChild(lname);

    submit.type = "submit";
    submit.value = "Subscribe";

    fieldset.appendChild(labelEmail);
    fieldset.appendChild(labelFname);
    fieldset.appendChild(labelLname);
    fieldset.appendChild(submit);

    form.setAttribute("method", "get");
    form.setAttribute("action", "subscribed.html");
    form.setAttribute("class", "wf1");
    form.appendChild(fieldset);

    h2.textContent = "Subscribe for Updates";

    section.setAttribute("id", "section-form");
    section.appendChild(h2);
    section.appendChild(form);

    main.appendChild(section);
}