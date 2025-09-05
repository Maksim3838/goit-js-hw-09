const formData = {
  email: "",
  message: ""
};

const form = document.querySelector(".feedback-form");
form.addEventListener("input", (event) => {
  const target = event.target; 
    if (target.name === "email" || target.name === "message") {
    formData[target.name] = target.value; 
  }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});