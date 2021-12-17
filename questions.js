const qstns = [
  {
    type: "list",
    name: "partnerType",
    message:
      "Welcome to VettyParty, in here you'd find your next partner! \nWhich one you more like? ^^",
    choices: ["Dog", "Cat", "Snake"],
  },
  {
    name: "partnerPrank",
    message: "Oh, you didn't like our dinosaur?",
  },
  {
    type: "input",
    name: "partnerName",
    message: "How would you like to name it?",
  },
];

module.exports = {
  qstns,
};

// test
