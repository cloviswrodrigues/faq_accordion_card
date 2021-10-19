const askings = document.querySelectorAll('li');
const p = document.querySelectorAll('p');
const h2 = document.querySelectorAll('h2');
const arrow = document.querySelectorAll('.arrow');

askings.forEach(element => {
    console.log("elem: "+JSON.stringify(element.children[0].children[0]));
    element.addEventListener("click", showAsking);
});

function showAsking(){    
    let elementCliked = this;
    hideAllAskings(elementCliked);
    removeBoldH2(elementCliked.children[0].children[0]);
    removeRotateArrows(elementCliked.children[0].children[1]);

    elementCliked.children[0].children[0].classList.toggle("bold");
    elementCliked.children[0].children[1].classList.toggle("rotate");
    elementCliked.children[0].children[1].classList.toggle("no_rotate");
    elementCliked.classList.toggle("show_answer");
    elementCliked.classList.toggle("hidden_answer");
}


function hideAllAskings(elementCliked){
    askings.forEach(e => {
        //console.log("e: "+JSON.stringify(e));
        if(e != elementCliked){            
            e.classList.remove("show_answer");
            e.classList.add("hidden_answer");
        }
    })
}

function removeBoldH2(elementCliked){
    h2.forEach(e => {
        if(e != elementCliked){
            e.classList.remove("bold");
        }
    })
}

function removeRotateArrows(elementCliked){
    arrow.forEach(e => {
        if(e != elementCliked){
            e.classList.remove("rotate");
            e.classList.add("no_rotate");
        }
    })
}