var counter1 = 0;
var counter2 = 0;


var img1 = document.querySelectorAll("img")[0];
img1.onclick = setValue;

function setValue() {
    var randomNumber1 = (Math.floor(Math.random()*6))+1;
    if (randomNumber1 == 1) {
        img1.setAttribute("src", "./images/dice1.png");
    }else if (randomNumber1 == 2) {
        img1.setAttribute("src", "./images/dice2.png");
    }else if (randomNumber1 == 3) {
        img1.setAttribute("src", "./images/dice3.png");
    }else if (randomNumber1 == 4) {
        img1.setAttribute("src", "./images/dice4.png");
    }else if (randomNumber1 == 5) {
        img1.setAttribute("src", "./images/dice5.png");
    }else if (randomNumber1 == 6) {
        img1.setAttribute("src", "./images/dice6.png");
        return randomNumber1;
    }
    console.log(randomNumber1);
    counter1++;
    console.log(counter1);

    
}
//setAttribute("src", "./images/dice(randomNumber1)");




var img2 = document.querySelectorAll("img")[1];
img2.onclick = setaValue2;


function setaValue2() {
    var randomNumber2 = (Math.floor(Math.random()*6))+1;
    if (randomNumber2 == 1) {
        img2.setAttribute("src", "./images/dice1.png");
    }else if (randomNumber2 == 2) {
        img2.setAttribute("src", "./images/dice2.png");
    }else if (randomNumber2 == 3) {
        img2.setAttribute("src", "./images/dice3.png");
    }else if (randomNumber2 == 4) {
        img2.setAttribute("src", "./images/dice4.png");
    }else if (randomNumber2 == 5) {
        img2.setAttribute("src", "./images/dice5.png");
    }else if (randomNumber2 == 6) {
        img2.setAttribute("src", "./images/dice6.png");
        return randomNumber2;
    }
    console.log(randomNumber2);
    counter2++;
    console.log(counter2);
    
}

// while(counter1 == counter2) {
//     if(randomNumber1 > randomNumber2) {
//         console.log("1st winner");
//     } else {
//         console.log("2nd winner");
//     }
    
// }

var displayWinner = document.getElementsByTagName("h1")[0];
// displayWinner.innerHTML = "helllo";
// console.log(displayWinner);

    if(randomNumber1 > randomNumber2) {
        displayWinner.innerHTML = "pLAYER 1 wINS";
    } else if(randomNumber1 == randomNumber2){
        displayWinner.innerHTML = "Draw!!";
    } else {
        displayWinner.innerHTML = "pLAYER 2 wINS";
    }
