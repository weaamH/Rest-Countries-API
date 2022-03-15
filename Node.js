fetch("https://restcountries.com/v2/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    displayData(data);
  });
function displayData(data) {
  const html = document.getElementById("container");
  for (var i = 0; i < data.length; i++) {
    createDiv(html, "gallery");
    createLinkWithClass(data[i].name, document.getElementsByClassName("gallery")[i], "linkClassName");
    createImgWithClass(data[i].flag, document.getElementsByClassName("linkClassName")[i], "imgClass");
    createNewElement("", data[i].name, "p", "description", document.getElementsByClassName("linkClassName")[i]);
  }
}
