let playerChoice = document.querySelectorAll("span")[0]
let cpuChoice = document.querySelectorAll("span")[1]
let cpuArr = ["rock", "scissors", "paper"]
let imgArr = ["rock.png" , "scissors.png" , "paper.png"]
let playerImg = $("#playerImg")
let cpuImg = $("#cpuImg")
let player
let clicked = false

$("#cpu").css("display" , "none")

function generator() {
    let gen = Math.floor(Math.random()*cpuArr.length)
    return gen
}

function playerPick(pick) {
    player = pick
    pick = pick.toUpperCase()
    $("#startGame").css("display" , "inline-block")
    playerChoice.textContent = ` ${pick}`
    $("#pickScreen").css("display" , "none")
    $("#resultScreen").css("display" , "flex")
    clicked = true
}

function startGame() {
    let index = generator()
    let cpuPick = cpuArr[index]
    if (player == cpuPick) {
        $("#result").text("TIE")
    } else if (
        (player == "rock" && cpuPick == "scissors") ||
        (player == "scissors" && cpuPick == "paper") ||
        (player == "paper" && cpuPick == "rock") 
    ) {
        $("#result").text("PLAYER wins!!")
   } else {
        $("#result").text("CPU wins!!")
   }
 
    $("#startGame").css("display", "none")
    $("#newGame").css("display" , "inline-block")
    cpuPick = cpuPick.toUpperCase()
    $("#cpu").css("display" , "inline")
    cpuChoice.textContent = `${cpuPick}`
    cpuImg.css({
        "right": "10%",
        "content": `url(${imgArr[index]})`
    })
}

function clearBoard() {
    $("#newGame").css("display" , "none")
    $("#result").text("")
    $("#resultScreen").css("display" , "none")
    $("#pickScreen").css("display" , "flex")
    $("#cpu").css("display" , "none")
    playerImg.css("left" , "-20%")
    cpuImg.css("right" , "-20%")
    clicked = false
}

function welcome() {
  $("#welcomeScreen").css("display" , "none")
  $("#pickScreen").css("display", "flex")
}

function pictureHover(pick) {
    playerImg.css({
        "left": "10%",
        "content": `url(${imgArr[pick]})`
    })
};

function pictureOut() {
    if (clicked == false) {
    playerImg.css("left" , "-20%")
    }
};


