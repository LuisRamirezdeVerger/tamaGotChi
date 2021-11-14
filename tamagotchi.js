const inquirer = require("inquirer")
const {qstns} = require ("./questions")
const {Partner} = require ("./classes")

let partner;

const init = () => {
    inquirer
        .prompt(qstns)
        .then ((answers) => {
            partner = new Partner (answers.partnerType, answers.partnerName);
        })
        .then (() => gameLoop())
} 

//The game
const gameLoop = () => {
    
        if (partner.health < 0) {
            console.log("Your partner has died")
            return
        } else if(partner.hunger < 0) {
            console.log("Your partner has died")
            return
        } else if (partner.thirst < 0){
            console.log ("Your pet has died")
            return
        }

        
        
        //CHECK FROM HERE AAP.JS ABD CLASSES.JS!
        inquirer
            .prompt([
                {
                    type: "rawlist",
                    name: "action",
                    message: "What would you like to do?",
                    choices: ["Feed", "Hydrate", "Play", "Check"],
                },
            ])
            .then((answers) => {
                if (answers.action === "Feed") {
                    partner.feed()
                    console.log(`${partner.name}` + " " + "is eating!")
                } else if (answers.action === "Play") {
                    partner.play()
                    console.log("Your buddy is playing!")
                } else if (answers.action === "Hydrate") {
                    partner.hydrate
                    console.log("Your buddy is driking!")
                } else if (answers.action === "Check") {
                    console.table(partner)
                }

                // partner.status()
            })
            .then(() => gameLoop())
    
    
        }
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