const country1 = document.getElementById("Country1");
const country2 = document.getElementById("Country2");
const convert = document.getElementById("convert");
const output = document.getElementById("output");
const input = document.getElementById("input");

window.addEventListener("load", (event) => {
    sessionStorage.clear();
});

let store = new Array(10);

function StorageArray(key) {
    if (store.length < 10) {
        store.push(key);
    } else {
        sessionStorage.removeItem(store[0]);
        store.shift();
        store.push(key);
    }
}

function countryData() {
    fetch("https://restcountries.com/v3.1/all?fields=name,currencies")
        .then((response) => response.json())
        .then((data) => {
            let html = "";
            data.forEach((element) => {
                html += `<option value="${Object.keys(element.currencies)[0]}">${element.name.common}-${Object.keys(element.currencies)[0]} </option>`;
            });
            country1.innerHTML = html;
            country2.innerHTML = html;
        });
}

countryData();

function ExchangeData() {
  const selectedCountry1 = country1.value;
  const selectedCountry2 = country2.value;

  if (!selectedCountry1 || !selectedCountry2) {
      output.innerHTML = "Please select both countries.";
      return;
  }

  if (store.includes(selectedCountry1)) {
      let obj = JSON.parse(sessionStorage.getItem(selectedCountry1));
      let cov1 = obj[selectedCountry2];
      output.innerHTML = Number(input.value) * cov1;
  } else {
      fetch(
          `https://v6.exchangerate-api.com/v6/8e7f8b22dfa8dd14e67891bf/latest/${selectedCountry1}`
      )
          .then((res) => res.json())
          .then((Edata) => {
              let CVal = selectedCountry2;
              output.innerHTML = Number(input.value) * Edata.conversion_rates[CVal];
              let val1 = JSON.stringify(Edata.conversion_rates);
              sessionStorage.setItem(selectedCountry1, val1);
              StorageArray(selectedCountry1);
              
          })
          .catch((error) => {
              output.innerHTML = "Error fetching data. Please try again.";
              console.error(error);
          });
  }
}
function clearSession(){
    sessionStorage.clear();
}
setTimeout(clearSession,60000);
convert.addEventListener("click", ExchangeData);
