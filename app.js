const playersDiv = document.getElementById("players");

const teams = [

{
name: "Marcus Millianti",
players: [
{ name: "Aaron Judge", hr: 0 },
{ name: "Nick Kurtz", hr: 0 },
{ name: "Yordan Alvarez", hr: 0 },
{ name: "Vinnie Pasquantino", hr: 0 },
{ name: "George Springer", hr: 0 },
{ name: "Michael Busch", hr: 0 },
{ name: "James Wood", hr: 0 },
{ name: "Oneil Cruz", hr: 0 },
{ name: "Jac Caglianone", hr: 0 },
{ name: "Mookie Betts", hr: 0 }
]
},

{
name: "Nate Bonnett",
players: [
{ name: "Shohei Ohtani", hr: 0 },
{ name: "Junior Caminero", hr: 0 },
{ name: "Jo Adell", hr: 0 },
{ name: "Jose Ramirez", hr: 0 },
{ name: "Munetaka Murakami", hr: 0 },
{ name: "Gunnar Henderson", hr: 0 },
{ name: "Pete Crow-Armstrong", hr: 0 },
{ name: "Oneil Cruz", hr: 0 },
{ name: "Daulton Varsho", hr: 0 },
{ name: "Alec Bohm", hr: 0 }
]
},

{
name: "Jay",
players: [
{ name: "Kyle Schwarber", hr: 0 },
{ name: "Pete Alonso", hr: 0 },
{ name: "Matt Olson", hr: 0 },
{ name: "Yordan Alvarez", hr: 0 },
{ name: "Munetaka Murakami", hr: 0 },
{ name: "Hunter Goodman", hr: 0 },
{ name: "Spencer Torkelson", hr: 0 },
{ name: "Freddie Freeman", hr: 0 },
{ name: "Josh Bell", hr: 0 },
{ name: "Luis Robert Jr.", hr: 0 }
]
},

{
name: "Mark Erdman",
players: [
{ name: "Shohei Ohtani", hr: 0 },
{ name: "Brent Rooker", hr: 0 },
{ name: "Yordan Alvarez", hr: 0 },
{ name: "Bobby Witt Jr.", hr: 0 },
{ name: "Riley Greene", hr: 0 },
{ name: "Gunnar Henderson", hr: 0 },
{ name: "Francisco Lindor", hr: 0 },
{ name: "Pete Crow-Armstrong", hr: 0 },
{ name: "Marcell Ozuna", hr: 0 },
{ name: "Adolis Garcia", hr: 0 }
]
}

];

function render() {
playersDiv.innerHTML = "";

teams.forEach(team => {
const teamDiv = document.createElement("div");
teamDiv.innerHTML = `<h2>${team.name}</h2>`;

team.players.forEach(p => {
const row = document.createElement("div");
row.innerText = `${p.name} - ${p.hr} HR`;
teamDiv.appendChild(row);
});

playersDiv.appendChild(teamDiv);
});
}

async function updateHRs() {
alert("Next step: LIVE MLB HR sync");
}

render();
