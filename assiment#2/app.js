const phones = {
Samsung: ["A14", "S23", "Note 20"],
Apple: ["iPhone 12", "iPhone 13", "iPhone 14"],
Xiaomi: ["Redmi 12", "Poco X6", "Mi 11"]
};

const brand = document.getElementById("brand");
const model = document.getElementById("model");
const result = document.getElementById("result");

for (let b in phones) {
brand.innerHTML += `<option value="${b}">${b}</option>`;
};

brand.onchange = () => {
model.innerHTML = '<option value="">Select Model</option>';
if (brand.value) {
phones[brand.value].forEach(m => {
model.innerHTML += `<option value="${m}">${m}</option>`;
});
model.disabled = false;
} else {
model.disabled = true;
}
};

document.getElementById("search").onclick = () => {
if (!brand.value || !model.value) {
alert("Please select brand and model");
} else {
result.innerText = `Selected: ${brand.value} - ${model.value}`;
}
};