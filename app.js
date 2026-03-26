const playersDiv = document.getElementById("players");

// TEST DATA (we’ll replace with full league next)
const teams = [
  {
    name: "Sample Team",
    players: [
      { name: "Aaron Judge", hr: 0 },
      { name: "Shohei Ohtani", hr: 0 },
      { name: "Yordan Alvarez", hr: 0 },
      { name: "Pete Alonso", hr: 0 },
      { name: "Kyle Schwarber", hr: 0 },
      { name: "Matt Olson", hr: 0 },
      { name: "Ronald Acuna Jr.", hr: 0 },
      { name: "Mookie Betts", hr: 0 },
      { name: "Bryce Harper", hr: 0 },
      { name: "Fernando Tatis Jr.", hr: 0 }
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
  alert("Next step = real MLB API connection");
}

render();
