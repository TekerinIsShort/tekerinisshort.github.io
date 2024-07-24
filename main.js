


// get all forts within map
const map = document.getElementById('map');
const forts = document.getElementsByClassName("fort");
const mapMain = document.getElementById('map_main');

// mapMain.addEventListener('contextmenu',(event)=>{
//     event.preventDefault();
// });

function removeRightClick(element){
    element.addEventListener('contextmenu',(event)=>{
        event.preventDefault();
    });
}

for(let i = 0; i < forts.length;i++)
    removeRightClick(forts[i]);

removeRightClick(mapMain);

// global variable
let isPugMode = true;



// make recognizers global
let tap = new Hammer.Tap({event: "singletap", taps : 1});
let press = new Hammer.Press({ time: 250 });
// requires press event to fail in order for tap event to execute
tap.requireFailure(press);
for(let i = 0; i < forts.length;i++){
    let manager = new Hammer.Manager(forts[i]);
    manager.add(tap);
    manager.on('singletap',(e)=>{
        const id = e.target.id;
        const color = e.target.getAttribute("data-color");
        if(id != "S1"){
            if(color == "default"){
                e.target.setAttribute("data-color","red");
                e.target.src = "./red/" + id + ".png";
            }
            else if(color == "red"){
                e.target.setAttribute("data-color","blue");
                e.target.src = "./blue/" + id + ".png";
            }
            else{
                e.target.setAttribute("data-color","default");
                e.target.src = "./default/" + id + ".png";
            }
        }
        else{
            if(isPugMode){
                if(color == "default"){
                    e.target.setAttribute("data-color","red");
                    e.target.src = "./red/pug/S1_Pug.png";
                }
                else if(color == "red"){
                    e.target.setAttribute("data-color","blue");
                    e.target.src = "./blue/pug/S1_Pug.png";
                }
                else{
                    e.target.setAttribute("data-color","default");
                    e.target.src = "./default/pug/S1_Pug.png";
                }
            }
            else{
                if(color == "default"){
                    e.target.setAttribute("data-color","red");
                    e.target.src = "./red/" + id + ".png";
                }
                else if(color == "red"){
                    e.target.setAttribute("data-color","blue");
                    e.target.src = "./blue/" + id + ".png";
                }
                else{
                    e.target.setAttribute("data-color","default");
                    e.target.src = "./default/" + id + ".png";
                }
            }
        }
    });
}



function editModeHandler(){
    const edit_btn = document.getElementById("edit_mode");
    const S1 = document.getElementById("S1");

    // let isPugMode = true;
    edit_btn.addEventListener('click',(e)=>{
        // console.log('edit button being clicked');
        // console.log('Is pug mode initial value ' + isPugMode);
        // console.log(S1.src);
        let color = S1.getAttribute('data-color');
        console.log('color of button ' + color);
        const normal_mode_btn = "./edit_modes/normal_mode_btn.png";
        const pug_mode_btn = "./edit_modes/pug_mode_btn.png";
        if(isPugMode){
            S1.src = "./" + color + "/" + S1.id + ".png";
            edit_btn.src =  normal_mode_btn;
        }
        else{
            S1.src = "./" + color + "/pug/" + "S1_Pug.png";
            edit_btn.src = pug_mode_btn;
        }
        isPugMode = !isPugMode;        
        console.log('color of button ' + color);
    });
}

// function desktopCrownHandler(){
//     for(let i = 0; i < forts.length;i++){
//         forts[i].addEventListener('contextmenu',(event)=>{
//             event.preventDefault(); 
//             const id = event.target.id;
//             if(id == "S1" || id == "BaseBL" || id == "BaseTL" || id == "BaseBR" || id == "BaseTR")
//                 return;
//             // if crown exist delete crown
//             const isCrownExist = document.getElementById(id + "_crown");
//             if(isCrownExist)
//                 isCrownExist.remove();
//             else{
//                 // Get Top And Left Property Values Of Javascript Element
//                 const top = parseInt(window.getComputedStyle(event.target)["top"]);
//                 const left = parseInt(window.getComputedStyle(event.target)["left"]);
//                 // Create Img tag for crown and position on Top Of Fort
//                 const img = document.createElement('img');
//                 img.src = "crown_small.png";
//                 img.style.zIndex = 2;
//                 img.style.top = (top - 25) + "px";
//                 img.style.left = (left + 11) + "px";
//                 img.style.zIndex = 51;
//                 img.id = id + "_crown";
//                 img.classList.add("fort");
//                 map.appendChild(img);
//             }
//         });
//     }
// }


// press down for mobile support
function pressDownCrown(){
    // recognizer for hammerjs
    // let press = new Hammer.Press({
    //     time: 500
    // });
    for(let i = 0; i < forts.length;i++){
        let manager = new Hammer.Manager(forts[i]);
        manager.add(press);
        manager.on('press',(event)=>{
            const id = event.target.id;
            if(id == "S1" || id == "BaseBL" || id == "BaseTL" || id == "BaseBR" || id == "BaseTR")
                return;
            // if crown exist delete crown
            const isCrownExist = document.getElementById(id + "_crown");
            if(isCrownExist)
                isCrownExist.remove();
            else{
                // Get Top And Left Property Values Of Javascript Element
                const top = parseInt(window.getComputedStyle(event.target)["top"]);
                const left = parseInt(window.getComputedStyle(event.target)["left"]);
                // Create Img tag for crown and position on Top Of Fort
                const img = document.createElement('img');
                img.src = "crown_small.png";
                img.style.zIndex = 2;
                img.style.top = (top - 25) + "px";
                img.style.left = (left + 11) + "px";
                img.style.zIndex = 51;
                img.id = id + "_crown";
                img.classList.add("fort");
                removeRightClick(img);
                map.appendChild(img);
            }
        });
    }
    
    // // Get a reference to an element
    // var square = document.querySelector('.square');

    // // Create a manager to manager the element
    // var manager = new Hammer.Manager(square);

    // // Create a recognizer
    // var Press = new Hammer.Press({
    // time: 500
    // });

    // // Add the recognizer to the manager
    // manager.add(Press);

    // // Subscribe to desired event
    // manager.on('press', function(e) {
    // e.target.classList.toggle('expand');
    // });
}



// function cancel() {
//     clearTimeout(timer);
//   }

// function mobileCrownHandler(){
//     let timer;
//     for(let i = 0; i < i < forts.length;i++){
//         forts[i].addEventListener('touchstart',()=>{
//             timer = setTimeout(() => {
//                 timer = null;
//                 console.log('touched for 2 seconds');
//                 // do stuff

//             }, 2000);
//         });

//         forts[i].addEventListener('touchend',cancel);
//         forts[i].addEventListener('touchmove',cancel);
//     }
// }

// function onLongPress(element, callback) {
//     let timer;
  
//     element.addEventListener('touchstart', () => { 
//       timer = setTimeout(() => {
//         timer = null;
//         callback();
//       }, 500);
//     });
  

  
//     element.addEventListener('touchend', cancel);
//     element.addEventListener('touchmove', cancel);
//   }

editModeHandler();
pressDownCrown();
// desktopCrownHandler();




    
    



// console.log(edit_btn.src);


// Define the function 
// to screenshot the div
//html2canvas version

// function takeshot() {
//     const map = document.getElementById('map');

//     // Use the html2canvas
//     // function to take a screenshot
//     // and append it
//     // to the output div
//     html2canvas(map).then(
//         function (canvas) {
//             document.getElementById('output').appendChild(canvas);
//         });
// }

// dom-to-image version
function takeshot2(){
    const map = document.getElementById('map');
    domtoimage.toBlob(map)
        .then(function (blob) {
        window.saveAs(blob, 'Tekerinisshort.png');
    });
}










// original onclick event written
// function toggleFortColor(){
//     const color = this.getAttribute("data-color");
//     console.log('ID of fort clicked is ' + this.id);
//     // handle all bases that are not S1
//     if(this.id != "S1"){
//         console.log('inside not S1 conditional');
//         if(color == "default"){
//             this.setAttribute("data-color","red");
//             this.src = "./red/" + this.id + ".png";
//         }
//         else if(color == "red"){
//             this.setAttribute("data-color","blue");
//             this.src = "./blue/" + this.id + ".png";
//         }
//         else{
//             this.setAttribute("data-color","default");
//             this.src = "./default/" + this.id + ".png";
//         }
//     }
//     else{
//         if(isPugMode){
//             console.log("is pug running");
//             if(color == "default"){
//                 this.setAttribute("data-color","red");
//                 this.src = "./red/pug/S1_Pug.png";
//             }
//             else if(color == "red"){
//                 this.setAttribute("data-color","blue");
//                 this.src = "./blue/pug/S1_Pug.png";
//             }
//             else{
//                 this.setAttribute("data-color","default");
//                 this.src = "./default/pug/S1_Pug.png";
//             }
//         }
//         else{
//             if(color == "default"){
//                 this.setAttribute("data-color","red");
//                 this.src = "./red/" + this.id + ".png";
//             }
//             else if(color == "red"){
//                 this.setAttribute("data-color","blue");
//                 this.src = "./blue/" + this.id + ".png";
//             }
//             else{
//                 this.setAttribute("data-color","default");
//                 this.src = "./default/" + this.id + ".png";
//             }
//         }
//     }
// }

// for(let i = 0; i < forts.length;i++){
//     forts[i].addEventListener('click',toggleFortColor,false);
// }

