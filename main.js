

console.log(document.getElementById('Test'));


const elem = document.getElementById("A6");
const forts = document.getElementsByClassName("fort");

// document.getElementById('generateScreenShot').addEventListener('click',function(){

// });

console.log(elem);
console.log(forts);

function toggleFortColor(){

    const color = this.getAttribute("data-color");
    if(color == "default"){
        this.setAttribute("data-color","red");
        this.src = "./red/" + this.id + ".png";
    }
    else if(color == "red"){
        this.setAttribute("data-color","blue");
        this.src = "./blue/" + this.id + ".png";
    }
    else{
        this.setAttribute("data-color","default");
        this.src = "./default/" + this.id + ".png";
    }

    console.log(this.src);
}


for(let i = 0; i < forts.length;i++){
    forts[i].addEventListener('click',toggleFortColor);
}


// Define the function 
// to screenshot the div
function takeshot() {
    const map = document.getElementById('map');

    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    html2canvas(map).then(
        function (canvas) {
            document.getElementById('output').appendChild(canvas);
        });
}


console.log(html2canvas);
