const qstns = [
   {
       type: "list",
       name: "petType",
       message: "Choose your next partner ^^",
       choices: [
           "Dog",
           "Cat",
           "Snake"
       ]
   },
   {
       type: "input",
       name: "petName",
       message: "How would you like to name it?"
   }
]

module.exports = {
    qstns
}