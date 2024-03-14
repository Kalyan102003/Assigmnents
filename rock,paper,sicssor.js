let score_player1 = 0;
let score_player2 = 0;
let user_choice;

for (let i = 0; i < 10; i++) {
    let choices = ["R", "P", "S"];
    let picked_choice = choices[Math.floor(Math.random() * choices.length)];
    console.log(picked_choice);

    user_choice = prompt("Choose 1 of R, P, S:");

    if (picked_choice === "R" && user_choice === "P") {
        score_player1++;
    }

    if (picked_choice === "P" && user_choice === "R") {
        score_player2++;
    }

    if (picked_choice === "S" && user_choice === "P") {
        score_player2++;
    }

    if (picked_choice === "P" && user_choice === "S") {
        score_player1++;
    }

    if (picked_choice === "S" && user_choice === "R") {
        score_player1++;
    }

    if (picked_choice === "R" && user_choice === "S") {
        score_player2++;
    }
}

let confirmed = confirm("Press OK to confirm the values");

if (confirmed) {
    alert("OK confirmed");

    let resultMessage = `
    Score of Player1: ${score_player1}
    Score of Player2: ${score_player2}
    `;

    if (score_player1 > score_player2) {
        resultMessage += "Congrats! Player1 is the winner";
    } else if (score_player1 < score_player2) {
        resultMessage += "Congrats! Player2 is the winner";
    } else {
        resultMessage += "It's a tie!";
    }

    alert(resultMessage);
} else {
    alert("OK, play again");
}
