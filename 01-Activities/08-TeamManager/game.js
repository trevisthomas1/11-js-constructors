
var inquirer = require("inquirer");

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;

    this.coinFlip = function () {
        var coin = (Math.floor(Math.random() * 2) == 0);
        if (coin) {
            console.log("True");
        } else {
            console.log("False");
        }
    };

    this.goodGame = function () {
        coinFlip();
        if (coin) {
            console.log("Great Game! You couldn't miss!");
            this.offense++;
        } else {
            console.log("Great Game! You're a lockdown defender.")
            this.defense++;
        }
    };

    this.badGame = function () {
        coinFlip();
        if (coin) {
            console.log("Not your night. Offensive needs some work.");
            this.offense--;
        } else {
            console.log("Not your night. Defense needs some work.");
            this.defense--;
        }
    };

    this.printStats = function () {
        console.log("---------------------------");
        console.log("Name: " + this.name);
        console.log("Position: " + this.position);
        console.log("Offense: " + this.offense);
        console.log("Defense: " + this.defense);
        console.log("---------------------------");
    };
};

var team = {
    offense: 0,
    defense: 0,

    teamStats: function () {
        console.log("---------------------------");
        console.log("Offense: " + team.offense);
        console.log("Defense: " + team.defense);
        console.log("---------------------------");
    }
};

var opponent = {
    offense: Math.floor(Math.random() * 30) + 1,
    defense: Math.floor(Math.random() * 30) + 1
};

var playerCount = 0;
var playerArray = [];
var score = 0;

function playGame() {
    if (playerArray.length >= 3) {
        console.log("Let's get it!");
        if (opponent.offense > team.defense) {
            score--;
        } else if (opponent.offense <= team.defense) {
            score++
        } else {
            console.log("Something went wrong!");
        };
        if (opponent.defense > team.offense) {
            score--;
        } else if (opponent.defense <= team.offeoffensense) {
            score++
        } else {
            console.log("Something went wrong!");
        };
    };
};

var playerCreation = function () {

    if (playerCount < 3) {
        console.log("You've drafted a new player!");

        function validateAbility(input) {
            var reg = /^\d+$/;
            return reg.test(input) || "Ability should be a number!";
        };

        inquirer.prompt([
            {
                name: "name",
                message: "What is the name of your player?"
            }, {
                name: "position",
                message: "What position does he/she play?"
            }, {
                name: "offense",
                message: "What is their offensive ability? (Select a number between 1 and 10) ",
                validate: validateAbility
            }, {
                name: "defense",
                message: "What is their defensive ability? (Select a number between 1 and 10) ",
                validate: validateAbility
            }
        ]).then(function (answers) {

            var newPlayer = new Player(
                answers.name,
                answers.position,
                parseFloat(answers.offense),
                parseFloat(answers.defense)
            );

            team.offense = team.offense + newPlayer.offense;
            team.defense = team.defense + newPlayer.defense;

            playerArray.push(newPlayer);

            playerCount++;

            playerCreation();
        });

    }
    else {
        for (var x = 0; x < playerArray.length; x++) {
            playerArray[x].printStats();
        };

        team.teamStats();

        playGame();
    }
};

playerCreation();