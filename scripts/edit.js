const mycard= document.querySelector(".card")

let mycardTitle = mycard.querySelector(".card-title")
mycardTitle.addEventListener("click", () => {
    let myTextT = prompt("Please add a new Taskdescription");
    if(myTextT !== null && myTextT !== "") {
        mycardTitle.textContent = myTextT;
    }
})

let mycardDate = mycard.querySelector(".card-date")
mycardDate.addEventListener("click", () => {
    let myTextD = prompt("Please add a new Deadline");
    if(myTextD !== null && myTextD !== "") {
        mycardDate.textContent = myTextD;
    }
})

let mycardProg = mycard.querySelector(".card-prog")
mycardProg.addEventListener("click", () => {
    let myTextP = prompt("Please track your Progress");
    if(myTextP !== null && myTextP !== "") {
        mycardProg.textContent = myTextP;
    }
})