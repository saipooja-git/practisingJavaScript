game = {
    players: {
        Batsman:{
            name:"Virat",
            score:100,
        },
        Bowler:
        {
            name:"Bumrah",
            score:95,
        },

    },
};

const team = Object.entries(game.players);
console.log(team);

let playercount = 0;
let totalScore=0;
for(let i = 0 ; i< team.length;i++){
    totalScore+=team[i][1].score;
    playercount++;
}
const avg= totalScore/playercount;
console.log(avg);

const teamm = console.log();