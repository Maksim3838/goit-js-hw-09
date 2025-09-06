let formData = {
  email: "",
  message: ""
};

const form = document.querySelector(".feedback-form");

const savedData = localStorage.getItem("feedback-form-state");

if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener("input", (event) => {
  if (event.target.name in formData) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (formData.email.trim() === "" || formData.message.trim() === "") {
    alert("Fill please all fields");
    return;
  }

  console.log("Submitted data:", formData);

    form.reset();
  localStorage.removeItem("feedback-form-state");
  formData = { email: "", message: "" };
});
