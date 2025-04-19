
const map = document.getElementById("map_container");
// gives us back an html collection
const forts = document.getElementsByClassName("hexagons");
// convert html collection to array
const fortsArray = Array.from(forts);

fortsArray.forEach(element => {
    element.addEventListener("click", function() {
        console.log(element.src);
        const current = this.id;
        const currentState = this.dataset.state;
        if(currentState == "default"){
            this.dataset.state = "red";
            this.src = "/images/forts/" + current + "/" + current + "_red.png";
        }
        else if(currentState == "red"){
            this.dataset.state = "blue";
            this.src = "/images/forts/" + current + "/" + current + "_blue.png";
        }
        else{
            this.dataset.state = "default";
            this.src = "/images/forts/" + current + "/" + current + "_default.png";
        }
    });
});

// gives us back an html collection
const fortsBase = document.getElementsByClassName("base");
// Converts html collection to an array
const fortsBaseArray = Array.from(fortsBase);

fortsBaseArray.forEach(element => {
    element.addEventListener("click", function() {
        console.log(element.src);
        const current = this.id;
        const currentState = this.dataset.state;
        if(currentState == "default"){
            this.dataset.state = "red";
            this.src = "/images/forts/" + current + "/" + current + "_red.png";
        }
        else if(currentState == "red"){
            this.dataset.state = "blue";
            this.src = "/images/forts/" + current + "/" + current + "_blue.png";
        }
        else{
            this.dataset.state = "default";
            this.src = "/images/forts/" + current + "/" + current + "_default.png";
        }
    });
});

// Once page loads, set random image of women at the bottom of the map
document.addEventListener('DOMContentLoaded', () => {
    const womenImage = document.getElementById('women');
    const images = ['images/women/women1.png', 'images/women/women2.png','images/women/women3.png']; // Array of image paths
  
    // Select a random image
    let randomIndex = Math.floor(Math.random() * images.length);
    womenImage.src = images[randomIndex];

    // select a random image every 3 seconds
    // setInterval(() => {
    //     randomIndex = Math.floor(Math.random() * images.length);
    //     womenImage.src = images[randomIndex];
    // }, 3000);
});


const downloadButton = document.getElementById("download_button");
downloadButton.addEventListener("click", function() {
    console.log("Download button clicked");
    html2canvas(map).then(canvas => {
        canvas.toBlob(function(blob) {
          window.saveAs(blob, 'TekerinISshort.png');
        });
    });
});







// test area
// document.addEventListener('DOMContentLoaded', () => {
//     const hexagonImages = document.querySelectorAll('.hexagons'); // Select all elements with the 'hexagons' class
//     const hexagonPositions = {};
  
//     hexagonImages.forEach((image) => {
//       const id = image.id; // Get the id of the image
//       const top = image.style.top; // Get the top style property
//       const left = image.style.left; // Get the left style property
  
//       // Add the id as a key and store the top and left values as an object
//       hexagonPositions[id] = { top, left };
//     });
//      // Convert the object to a JSON string
//     console.log(hexagonPositions); // Log the resulting object
//   });


