document.onload = roll();

function roll() {
    var imageArr = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

    var flag = "./images/flag.png";

    var img1 = document.querySelector(".img1");
    var img2 = document.querySelector(".img2");
    var header = document.querySelector(".title");

    var a = Math.floor(Math.random() * 6);
    var b = Math.floor(Math.random() * 6);

    if (a > b) {
        header.innerHTML = "Player 1 Wins!";
    } else if (a === b) {
        header.innerHTML = "It's A Tie!";
    } else {
        header.innerHTML = "Player 2 Wins!";
    }

    img1.setAttribute("src", imageArr[a]);
    img2.setAttribute("src", imageArr[b]);



    console.log(a);
    console.log(b);
};
