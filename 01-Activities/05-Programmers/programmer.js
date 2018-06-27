function Programmer(name, title, age, favoriteLanguage) {
    this.name = name;
    this.title = title;
    this.age = age;
    this.favoriteLanguage = favoriteLanguage;

};

Programmer.prototype.printInfo = function () {
    console.log("---------------------------");
    console.log("Name: " + this.name);
    console.log("Title: " + this.title);
    console.log("Age: " + this.age);
    console.log("Language: " + this.favoriteLanguage);
    console.log("--------------------------");
}

var trevis = new Programmer("Trevis", "Junior Developer", 26, "JavaScript");

trevis.printInfo();