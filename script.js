let searchbox = document.querySelector("#searchbox");
let button = document.querySelector("#button");
let cityname = document.querySelector("#cityname");
let datalist = document.querySelector("#datalist");
let bodydata = document.querySelector(".bodydata");
let apikey = "4dce3ac32e14465e96d175413231705";
button.addEventListener("click", (event) => {
  if (searchbox.innerHTML === " ") {
    alert("Please Enter the city name");
  } else {
    event.preventDefault;
    console.log(searchbox.value);
    cityname.innerHTML = searchbox.value;
    wetherdata(searchbox.value);
  }
});

const wetherdata = async (searchbox) => {
  let response = await fetch(
    `https://api.weatherapi.com/v1/search.json?key=4dce3ac32e14465e96d175413231705&q=${searchbox}`
  );
  let data = await response.json();
  console.log(data);
  console.log(data[0].country);
  console.log(response);
  bodydata.innerHTML = `
            <ul>
                <li>Country : ${data[0].country}</li>
                <li>Region: ${data[0].region}</li>
                <li>City : ${data[0].name}</li>
                <li>Longitute : ${data[0].lon}</li>
                <li>Latitude : ${data[0].lat}</li>
                <li>Region :${data[0].url}</li>
            </ul>
  `;
};
