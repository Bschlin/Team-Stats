const team = {
  _players: [
    { firstName: "Pablo", lastName: "Sanchez", age: 21 },
    { firstName: "Treyvon", lastName: "Williams", age: 28 },
    { firstName: "Kale", lastName: "Saladio", age: 24 }
  ],
  _games: [
    { opponent: "Bengals", teamPoints: 21, opponentPoints: 10 },
    { opponent: "Cowboys", teamPoints: 7, opponentPoints: 21 },
    { opponent: "Patriots", teamPoints: 40, opponentPoints: 14 }
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    this.players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Donald", "Duck", 76);

team.addGame("Jets", 27, 14);
team.addGame("Bears", 3, 28);
team.addGame("Raiders", 42, 35);

console.log(team.players);
console.log(team.games);
