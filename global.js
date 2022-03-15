function createNewElement(key, value, tag, nameOfClass, parent) {
    let newElement = document.createElement(tag);
    newElement.innerHTML = key + value;
    parent.appendChild(newElement);
    newElement.className = nameOfClass;
}

function createLinkWithClass(source, parent, elementClass) {
    let newElement = document.createElement('a');
    newElement.href = "country-info.html?country=" + source;
    newElement.className = elementClass;
    parent.append(newElement);
}

function createImgWithClass(source, parent, elementClass) {
    let newElement = document.createElement('img');
    newElement.src = source;
    newElement.className = elementClass;
    parent.appendChild(newElement);
}

function createDiv(parent, nameOfClass) {
    let newDiv = document.createElement('div');
    newDiv.className = nameOfClass;
    parent.appendChild(newDiv);
}
