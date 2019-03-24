let number = [];
let data = "";
let b = document.getElementById("dwar");
for (let j = 1; j <= 5; j++) {
    number[j] = [];
    for (let i = 1; i <= 5; i++) {
        number[j][i] = "_";
    }
}

function Hienthi() {
    data = "";
    for (let j = 1; j <= 5; j++) {
        for (let i = 1; i <= 5; i++) {
            data += number[j][i] + "&nbsp;&nbsp;&nbsp;&nbsp"
        }
        data += "<br>"
    }
    b.innerHTML = data;
}

Hienthi();

function myButtonX() {
    let x = parseInt(prompt("Vi tri theo hang doc"));
    let y = parseInt(prompt("Vi tri theo hang ngang"));
    number[x][y] = "x";
    Hienthi();
    CheckWinX();
}

function myButtonY() {
    let x = parseInt(prompt("Vi tri theo hang doc"));
    let y = parseInt(prompt("Vi tri theo hang ngang"));
    number[x][y] = "o";
    Hienthi();
    CheckWinO();
}

function CheckWinX() {
    for (let j = 1; j <= 5; j++) {
        for (let i = 1; i <= 5; i++) {
            if (number[j][i] === number[j][i + 1] && number[j][i] === number[j][i + 2] && number[j][i] === "x") {
                alert("X win")
            }
            if (number[j][i] === "x" && number[j + 1][i] === "x" && number[j + 2][i] === "x") {
                alert("X win")
            }
            if (number[j + 1][i + 1] === "x" && number[j + 2][i + 2] === "x" && number[j][i] === "x"
            ) {
                alert("X win")
            }
            if (number[j + 1][i - 1] === "x " && number[j + 2][i - 2] === "x" && number[j][i] === "x") {
                alert("X win")
            }
        }
    }
}
function CheckWinO() {
    for (let j = 1; j <= 5; j++) {
        for (let i = 1; i <= 5; i++) {
            if (number[j][i] === number[j][i + 1] && number[j][i] === number[j][i + 2] && number[j][i] === "o") {
                alert("O win")
            }
            if (number[j][i] === "o" && number[j + 1][i] === "o" && number[j + 2][i] === "o") {
                alert("O win")
            }
            if (number[j + 1][i + 1] === "o" && number[j + 2][i + 2] === "o" && number[j][i] === "o"
            ) {
                alert("O win")
            }
            if (number[j + 1][i - 1] === "o " && number[j + 2][i - 2] === "o" && number[j][i] === "o") {
                alert("O win")
            }
        }
    }
}
