let aquaButton = document.getElementById("aqua");
let purpleButton = document.getElementById("purple");
let tealButton = document.getElementById("teal");
let colorlessButton = document.getElementById("colorless");
let pinkButton = document.getElementById("pink");

let colorDisplay = document.getElementById("color-display");


aquaButton.onclick = function(){
colorDisplay.style.backgroundColor = "aqua";
colorDisplay.innerHTML = "Aqua"
}

purpleButton.onclick = function(){
colorDisplay.style.backgroundColor = "purple";
colorDisplay.innerHTML = "Purple"
}

tealButton.onclick = function(){
colorDisplay.style.backgroundColor = "teal";
colorDisplay.innerHTML = "Teal"
}

colorlessButton.onclick = function(){
    colorDisplay.style.backgroundColor = "white";
    colorDisplay.innerHTML = "Colorless"
}

pinkButton.onclick = function(){
    colorDisplay.style.backgroundColor = "pink";
    colorDisplay.innerHTML = "Pink"
}