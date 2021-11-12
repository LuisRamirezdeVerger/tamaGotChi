const inquirer = require("inquirer")
const {qstns} = require ("./questions")
const {animal} = require ("./classes")

let selectedOption = ["play", "feed", "drink"];

//The game
const gameLoop = () => {
    
        if (animal.health < 0) {
            console.log("Your pet has died")
            return
        } else if(animal.hunger < 0) {
            console.log("Your pet has died")
            return
        } else if (animal.thirst < 0){
            console.log ("Your pet has died")
            return
        }

    }    
        

        //CHECK FROM HERE AAP.JS ABD CLASSES.JS!
        inquirer
            .prompt([
                {
                    type: "rawlist",
                    name: "action",
                    message: "What would you like to do?",
                    choices: ["Feed", "Hydrate", "Play"],
                },
            ])
            .then((answers) => {
                if (answers.action === "Feed") {
                    animal.feed()
                    console.log("Your buddy is eating!")
                } else if (answers.action === "Play") {
                    animal.play()
                    console.log("Your buddy is playing!")
                } else {

                }
                console.table(animal)
            })
            .then(() => gameLoop())
    
    
    
    init()
//     if (pet.hunger< 0) {
//         console.log("Your pet died")
//         return
//     }

//     inquirer
//         .prompt([
//             {
//                 type: "rawlist",
//                 name: "action",
//                 message: "What would you like to do?",
//                 choices: ["Feed", "Hydrate", "Play"],
//             },
//         ])
//         .then((answers) => {
//             if (answers.action === "Feed") {
//                 animal.feed()
//             } else if (answers.action === "Play") {
//                 console.log("Playing...")
//             } else {
//                 console.log("Drinking...")
//             }

//             console.table(animal)
//         })
//         .then(() => gameLoop())



// init()
    
    //{
    //  console.log("Your pet is" + configs.mood[1])
    // }else{
    //   feed(type[i])
    // }
    
    
    // if (type === type[0] && mood === mood[0]) {
    //     console.log("The cat is bored")
    // } else {
    //     console.log("The cat")
    // }

    
    // // Status depending on selectedOption -.-
    // if (selectedOption === "play") {
    //     this.mood + 10 && this.hunger + 15;
    // } else {
    //     this.mood - 10;
    // }
    // if (selectedOption === "feed") {
    //     this.hunger - 10 && mood + 3;
    // } else {
    //     this.hunger + 10;
    // }
    // if (selectedOption === "drinking") {
    //     this.thirst - 10 && mood + 3;
    // } else {
    //     this.thirst + 10;
    // }
   
    // gameLoop();


//Conditions of the pet
// let configs = {
//     type:["cat", "dog", "rabbit"],
//     name: [],
//     age :["young", "adult", "old"],
//     health :["healthy", "ill"],
//     mood: ["bored", "happy"],
//     drinking:["thirsty", "not thirsty"],
//     feed:["hungry", "stuffed"]
//}