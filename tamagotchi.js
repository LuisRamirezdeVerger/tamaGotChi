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
            })
            .then(() => gameLoop())
        }
    init()
