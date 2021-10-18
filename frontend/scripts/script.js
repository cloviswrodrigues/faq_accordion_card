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
    hideAllAskings(elementCliked.children[1]);
    removeBoldH2(elementCliked.children[0].children[0]);
    removeRotateArrows(elementCliked.children[0].children[1]);

    elementCliked.children[0].children[0].classList.toggle("bold");
    elementCliked.children[0].children[1].classList.toggle("rotate");
    elementCliked.children[1].classList.toggle("show");
}


function hideAllAskings(elementCliked){
    p.forEach(e => {
        //console.log("e: "+JSON.stringify(e));
        if(e != elementCliked){            
            e.classList.remove("show");
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
        }
    })
}