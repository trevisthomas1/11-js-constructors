var input = process.argv;
var pal = process.argv[2];
var action = process.argv[3];

//_________Create the initial DigitalPal constructor_____________

function DigitalPal(hungry, sleepy, bored, age) {
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;

    this.petInfo = function () {
        console.log(JSON.stringify(this));
    };

    this.feed = function () {
        if (this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks I'm full!")
        }
    };

    this.sleep = function () {
        if (this.sleep) {
            console.log("Zzzzzzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way, I'm not tired!")
        }
    };

    this.play = function () {
        if (this.bored) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now. Later?")
        }
    };

    this.increaseAge = function () {
        this.age++;
        console.log("Happy Birthday to me! I am " + this.age + " years old")
    };

};

//_________Create new properties and functions for specific objects_____________

var dog = new DigitalPal(true, false, false, 2);

dog.outside = false;

dog.bark = function () {
    console.log("Woof Woof!");
};

dog.goOutside = function () {
    if (this.outside) {
        console.log("We're already outside though...");
    } else {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
    }
};

dog.goInside = function () {
    if (this.outside) {
        console.log("Do we have to? Fine...");
        this.outside = false;
    } else {
        console.log("I'm already inside...");
    }
};

var cat = new DigitalPal(false, true, true, 5);

cat.houseCondition = 100;

cat.meow = function () {
    console.log("Meow. Meow.");
};

cat.destroyFurniture = function () {
    if (this.houseCondition > 0) {
        this.houseCondition -= 10;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        this.bored = false;
        this.sleepy = true;
    }
};

cat.buyNewFurniture = function () {
    this.houseCondition += 50;
    console.log("Are you sure about that?");
};

//_________Run some functions and see what's changed_____________

switch (pal) {
    case "dog":
        switch (action) {
            case "petInfo":
                dog.petInfo();
                break;
            case "feed":
                dog.feed();
                break;
            case "sleep":
                dog.sleep();
                break;
            case "play":
                dog.play();
                break;
            case "increaseAge":
                dog.increaseAge();
                break;
            case "bark":
                dog.bark();
                break;
            case "goOutside":
                dog.goOutside();
                break;
            case "goInside":
                dog.goInside();
                break;
            default:
                console.log("Command not recognized");
        }
        break;
    case "cat":
        switch (action) {
            case "petInfo":
                cat.petInfo();
                break;
            case "feed":
                cat.feed();
                break;
            case "sleep":
                cat.sleep();
                break;
            case "play":
                cat.play();
                break;
            case "increaseAge":
                cat.increaseAge();
                break;
            case "meow":
                cat.meow();
                break;
            case "destroyFurniture":
                cat.destroyFurniture();
                break;
            case "buyNewFurniture":
                cat.buyNewFurniture();
                break;
            default:
                console.log("Command not recognized");
        }
        break;
    default:
        console.log("Command not recognized");
};


