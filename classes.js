class Partner {
    constructor(type, name) {
        this.type = type
        this.name = name
    }

    hunger = 5
    thirst = 5
    health = 5

    feed(){
        this.hunger++ //I'd to see if we can add more than 1 point
        this.thirst++ 
        this.health--
    }

    hydrate (){
        this.hunger++
        this.thirst++
        this.health--
    }

    play() {
        this.hunger--
        this.thirst--
        this.health++
    }
    status() {
        console.table(partner)
    }
}

module.exports = {
    Partner
}