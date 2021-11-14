const qstns = [
   {
       type: "list",
       name: "partnerType",
       message: "Choose your next partner ^^",
       choices: [
           "Dog",
           "Cat",
           "Snake",
       ]
   },
   {
       type: "input",
       name: "partnerName",
       message: "How would you like to name it?"
   }
]

module.exports = {
    qstns
}