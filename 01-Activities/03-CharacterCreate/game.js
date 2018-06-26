function Character(name, profession, gender, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.printStats = function () {
        console.log(this);
    };
    this.isAlive = function () {
        if (this.hp <= 0) {
            console.log(this.name + " has been slain!")
        } else {
            console.log(this.name + " lives to fight another day!")
        }
    };
};

var aragorn = new Character("Aragorn", "Ranger", "Male", 87, 94, 100);
var legolas = new Character("Legolas", "Elf", "Male", 2931, 90, 100);
var gimli = new Character("Gimli", "Dwarf", "Male", 139, 88, 100);

// aragorn.printStats();
// legolas.printStats();
// gimli.printStats();

aragorn.isAlive();

// var attack = function (aragorn, legolas) {
//     legolas.strength - aragorn.strength;
//     console.log(legolas.name + " has " + legloas.strength + " remaining");
// };
