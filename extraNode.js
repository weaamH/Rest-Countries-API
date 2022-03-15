var info = document.getElementById("add-data");
var searchParams = new URLSearchParams(location.search);
var countryName = searchParams.get("country");

fetch("https://restcountries.com/v2/name/" + countryName)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    displayData(data);
  });

function displayData(countryData) {

  let showFlag = document.createElement('img');
  showFlag.src = countryData[0].flag;
  info.appendChild(showFlag);
  showFlag.className ="flag-show";

  createNewElement("Name: ", countryName, "p", "data-show", info);
  createNewElement("Capital: ", countryData[0].capital,"p", "data-show", info);
  createNewElement("Population: ", countryData[0].population,"p", "data-show", info);
  createNewElement("Region: ", countryData[0].region,"p", "data-show", info);
  createNewElement("Numeric Code: ", countryData[0].numericCode,"p", "data-show", info);
  createNewElement("Area: ", countryData[0].area,"p", "data-show", info);
  createNewElement("Cioc: ", countryData[0].cioc,"p", "data-show", info);

  /*let showName = document.createElement('p');
  showName.innerHTML = "Name: " +countryName;
  info.appendChild(showName);
  showName.className = "data-show";

  let showCapital = document.createElement('p');
  showCapital.innerHTML = "Capital: "+ countryData[0].capital;
  info.appendChild(showCapital);
  showCapital.className = "data-show";

  let showpopulation = document.createElement('p');
  showpopulation.innerHTML = "Population: "+ countryData[0].population;
  info.appendChild(showpopulation);
  showpopulation.className = "data-show";

  let showRegion = document.createElement('p');
  showRegion.innerHTML = "Region: "+ countryData[0].region;
  info.appendChild(showRegion);
  showRegion.className = "data-show";

  let showNumericCode = document.createElement('p');
  showNumericCode.innerHTML = "Numeric Code: "+ countryData[0].numericCode;
  info.appendChild(showNumericCode);
  showNumericCode.className = "data-show";

  let showArea = document.createElement('p');
  showArea.innerHTML = "Area: "+ countryData[0].area;
  info.appendChild(showArea);
  showArea.className= "data-show";

  let showCioc = document.createElement('p');
  showCioc.innerHTML = "Cioc: "+ countryData[0].cioc;
  info.appendChild(showCioc);
  showCioc.className = "data-show";*/
}