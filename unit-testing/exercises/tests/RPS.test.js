const RSP = require('../RPS.js');

describe("RSP", function(){
    test("WhoWon should be equals when run", function(){
        let output = RSP("rock", "rock");
        expect(output).toEqual('TIE!');
    });
    test("Player 2 wins with paper", function(){
        let output = RSP("rock", "paper");
        expect(output).toEqual('Player 2 wins!');
    });
});
