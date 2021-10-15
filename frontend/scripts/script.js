const askings = document.querySelectorAll('li');
const p = document.querySelectorAll('p');
const h2 = document.querySelectorAll('h2');

askings.forEach(element => {
    element.addEventListener("click", showAsking);
});

function showAsking(){    


    let elementCliked = this;
    elementCliked.children[0].children[0].classList.toggle("bold");
    elementCliked.children[1].classList.toggle("show");

    console.log(elementCliked.children[0].children[0]);
}


function hideAllAskings(){
    p.forEach(e => {
        e.classList.remove("show");
    })
}

function removeBoldH2(){
    h2.forEach(e => {
        e.classList.remove("bold");
    })
}