const playersDiv = document.getElementById("players");
const teamSelect = document.getElementById("teamSelect");

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

// 🔥 calculate top 9 score
function getTeamScore(team) {
  const sorted = [...team.players].sort((a, b) => b.hr - a.hr);
  const top9 = sorted.slice(0, 9);
  return top9.reduce((sum, p) => sum + p.hr, 0);
}

// 🏆 render leaderboard
function renderLeaderboard() {
  const leaderboard = document.createElement("div");
  leaderboard.innerHTML = "<h2>Leaderboard</h2>";

  const ranked = [...teams]
    .map(team => ({
      ...team,
      score: getTeamScore(team)
    }))
    .sort((a, b) => b.score - a.score);

  ranked.forEach((team, index) => {
    const row = document.createElement("div");
    row.innerText = `${index + 1}. ${team.name} - ${team.score} HR`;
    leaderboard.appendChild(row);
  });

  playersDiv.appendChild(leaderboard);
}

// 👇 dropdown
function loadDropdown() {
  teamSelect.innerHTML = "";
  teams.forEach((team, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = team.name;
    teamSelect.appendChild(option);
  });
}

// 👇 team view + bench logic
function renderSelectedTeam() {
  const selectedIndex = Number(teamSelect.value || 0);
  const team = teams[selectedIndex];

  playersDiv.innerHTML = "";

  renderLeaderboard();

  const sorted = [...team.players].sort((a, b) => b.hr - a.hr);

  const teamDiv = document.createElement("div");
  teamDiv.innerHTML = `<h2>${team.name}</h2>`;

  sorted.forEach((p, index) => {
    const row = document.createElement("div");

    if (index === 9) {
      row.innerText = `${p.name} - ${p.hr} HR (BENCH)`;
      row.style.opacity = "0.6";
    } else {
      row.innerText = `${p.name} - ${p.hr} HR`;
    }

    teamDiv.appendChild(row);
  });

  playersDiv.appendChild(teamDiv);
}

async function updateHRs() {
  alert("Next step: LIVE MLB sync");
}

loadDropdown();
renderSelectedTeam();
