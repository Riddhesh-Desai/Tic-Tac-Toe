let item_container = document.querySelectorAll(".item");
let player_name = document.querySelectorAll(".player_name");
let player_details = document.querySelector(".player_details");
let home = document.querySelector("#home");
let container_sec = document.querySelector(".container_sec");
let winner_name = document.querySelector(".winner_name");
let reset_btn = document.querySelector(".reset_btn");
var audio = new Audio("audio.wav");



reset_btn.addEventListener("click",()=>{
    window.location.reload();
})
// console.log(player_details.className);

let count = 0;
let player = "x";
function turn() {
    let result = player == "x" ? "x" : "o";
    return result
}
function handleResultValidation() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    winningConditions.forEach(Element => {
        let a = item_container[Element[0]].className;
        let b = item_container[Element[1]].className;
        let c = item_container[Element[2]].className;
        if (a === b && b === c && c !== "item") {
            // let turn_player=turn();
            if (player == "x") {
                console.log("o won ");
                home.style.opacity = "0.1"
                container_sec.style.display = "flex"
                winner_name.innerHTML="You Lost The Game";
                
            } else {
                console.log("x won ");
                home.style.opacity = "0.2"
                container_sec.style.display = "flex"
                winner_name.innerHTML="You won The Game";
                container_sec.style.backgroundImage= "url('source-1.gif')";
                home.style.backgroundImage= "url('source-1.gif')";
                player = "o"
            }
            player = "";

        }
    })
}
function togggle() {
    player_name.forEach(item => {
        if (item.classList.contains("active")) {
            item.classList.remove("active")
            // player_animation.classList.remove("active");
        } else {
            // player_animation.classList.add("active");
            item.classList.add("active")

        }
    })
}
function player_change() {
    if (player_details.classList.contains("active")) {
        player_details.classList.remove("active");
    } else {
        player_details.classList.add("active");
    }
}



item_container.forEach(Element => {
    Element.addEventListener("click", () => {
        if (player === "x") {
            player = "o";
            audio.play();
            Element.innerHTML = `<i class="fas fa-times"></i>`;
            Element.style.pointerEvents = "none"
            Element.classList.add("x")
            handleResultValidation();
            togggle();
            player_change()
    
    
            let time_delay = Math.floor(Math.random() * 2000 + 200);
            if (player === "o") {
                console.log(`${player} turn`);
                setTimeout(() => {
                    chatbot();
                    player_change()
    
                }, time_delay);
    
            }
        }
        // let turn_player =turn();
    });
})
function chatbot() {
    let item_container = document.querySelectorAll(".item");
    let array = [];
    for (let i = 0; i < item_container.length; i++) {
        if (item_container[i].childElementCount == 0) {
            array.push(i)
        }
    }
    // console.log(array);
    if (array.length > 0) {
        audio.play();
        let random_number = Math.floor(Math.random() * array.length);
        let result = array[random_number]
        let element = item_container[result]
        element.innerHTML = `<i class="fas fa-circle-notch"></i>`;
        element.style.pointerEvents = "none";
        element.classList.add("0")
        togggle();
        player = "x"
        // let turn_player =turn();
        handleResultValidation();
        console.log(`${player} turn`);

        // (item_container[result]).classList.add("playero");
    }
}
