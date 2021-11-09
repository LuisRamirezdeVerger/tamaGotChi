let selectedOption = ["play", "feed", "hydrate"];

class animal{
constructor(type, name, age, health) {

    this._type = type,
    this._mood = 100, 
    this._hunger = 100,
    this._thirst = 100,
    this._name = "";
        // this.indexMood = 0;
        // this.indexHunger = 0;
        // this.indexThirst = 0;

    }
};

//The game

const gameLoop = () => {
     
    if( this.mood < 50){
         console.log("Your pet is" + configs.mood[0])
    }else{
         console.log(`${type[i]})is happy`)
    }    
    
    if(hunger==stuffed){
     console.log("Your pet is" + configs.mood[1])
    }else{
      feed(type[i])
    }
    
    
    if (type === type[0] && mood === mood[0]) {
        console.log("The cat is bored")
    } else {
        console.log("The cat")
    }
    // Status depending on selectedOption -.-
    if (selectedOption === "play") {
        this.mood + 10 && this.hunger + 15;
    } else {
        this.mood - 10;
    }
    if (selectedOption === "feed") {
        this.hunger - 10 && mood + 3;
    } else {
        this.hunger + 10;
    }
    if (selectedOption === "hydrate") {
        this.thirst - 10 && mood + 3;
    } else {
        this.thirst + 10;
    }
   
    gameLoop();
}

//Conditions of the pet
let configs = {
    type:["cat", "dog", "rabbit"],
    name: [],
    age :["young", "adult", "old"],
    health :["healthy", "ill"],
//     mood: ["bored", "happy"],
//     hydrate:["thirsty", "not thirsty"],
//     feed:["hungry", "stuffed"]
}

let cat = new animal(configs.type[0], name, age, health);


// mood = 50;
// console.log(this._mood);

// create a animal class with instances of it

// function Pet(name, mood, hunger, age, health) {
// 	this.mood = mood;
// 	this.hunger = hunger;
// 	this.age = age;
// 	this.health = health;
// 	this.name = name;
//     this.indexAge = 0;
//     this.indexMood = 0;
//     this.indexHunger = 0;
//     this.indexHealth = 0;
// }