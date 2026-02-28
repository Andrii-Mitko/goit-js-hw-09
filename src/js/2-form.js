
const formData = {
  email: "",
  message: ""
};

const key = "feedback-form-state";
const form = document.querySelector(".feedback-form");

const savedData = localStorage.getItem(key);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  if (parsedData.email) form.email.value = parsedData.email;
  if (parsedData.message) form.message.value = parsedData.message;
  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";
}

form.addEventListener("input", (e) => {
  const target = e.target;
  if (target.name === "email" || target.name === "message") {
    formData[target.name] = target.value;
    localStorage.setItem(key, JSON.stringify(formData));
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(key);
  formData.email = "";
  formData.message = "";
  form.reset();
});