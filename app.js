const playersDiv = document.getElementById("players");
const teamSelect = document.getElementById("teamSelect");

const teams = [
  {
    name: "Brian Bonnett",
    players: [
      { name: "Shohei Ohtani", hr: 0 },
      { name: "Nick Kurtz", hr: 0 },
      { name: "Matt Olson", hr: 0 },
      { name: "Julio Rodriguez", hr: 0 },
      { name: "Gunnar Henderson", hr: 0 },
      { name: "Giancarlo Stanton", hr: 0 },
      { name: "Elly De La Cruz", hr: 0 },
      { name: "Oneil Cruz", hr: 0 },
      { name: "Christian Walker", hr: 0 },
      { name: "Kyle Manzardo", hr: 0 }
    ]
  },
  {
    name: "Caden Griffiths",
    players: [
      { name: "Kyle Schwarber", hr: 0 },
      { name: "Vladimir Guerrero Jr", hr: 0 },
      { name: "Julio Rodriguez", hr: 0 },
      { name: "Vinnie Pasquantino", hr: 0 },
      { name: "Munetaka Murakami", hr: 0 },
      { name: "Michael Busch", hr: 0 },
      { name: "Elly De La Cruz", hr: 0 },
      { name: "Pete Crow-Armstrong", hr: 0 },
      { name: "Luis Robert Jr", hr: 0 },
      { name: "Kazuma Okamoto", hr: 0 }
    ]
  },
  {
    name: "Conner McMullin",
    players: [
      { name: "Shohei Ohtani", hr: 0 },
      { name: "Nick Kurtz", hr: 0 },
      { name: "Fernando Tatis Jr", hr: 0 },
      { name: "Bobby Witt Jr", hr: 0 },
      { name: "Gunnar Henderson", hr: 0 },
      { name: "Michael Busch", hr: 0 },
      { name: "Elly De La Cruz", hr: 0 },
      { name: "Corbin Carroll", hr: 0 },
      { name: "Sal Stewart", hr: 0 },
      { name: "Christian Walker", hr: 0 }
    ]
  },
  {
    name: "Dan Dermody",
    players: [
      { name: "Aaron Judge", hr: 0 },
      { name: "Nick Kurtz", hr: 0 },
      { name: "Ketel Marte", hr: 0 },
      { name: "Byron Buxton", hr: 0 },
      { name: "Austin Riley", hr: 0 },
      { name: "Gunnar Henderson", hr: 0 },
      { name: "James Wood", hr: 0 },
      { name: "Trent Grisham", hr: 0 },
      { name: "Daulton Varsho", hr: 0 },
      { name: "Kyle Manzardo", hr: 0 }
    ]
  },
  {
    name: "Eddie Mannix",
    players: [
      { name: "Aaron Judge", hr: 0 },
      { name: "Pete Alonso", hr: 0 },
      { name: "Ronald Acuna Jr", hr: 0 },
      { name: "Yordan Alvarez", hr: 0 },
      { name: "Austin Riley", hr: 0 },
      { name: "Gunnar Henderson", hr: 0 },
      { name: "Spencer Torkelson", hr: 0 },
      { name: "Seiya Suzuki", hr: 0 },
      { name: "Christian Walker", hr: 0 },
      { name: "Max Muncy", hr: 0 }
    ]
  },
  {
    name: "Greg Bonnett",
    players: [
      { name: "Aaron Judge", hr: 0 },
      { name: "Vladimir Guerrero Jr", hr: 0 },
      { name: "Jose Ramirez", hr: 0 },
      { name: "Vinnie Pasquantino", hr: 0 },
      { name: "Munetaka Murakami", hr: 0 },
      { name: "Gunnar Henderson", hr: 0 },
      { name: "Colson Montgomery", hr: 0 },
      { name: "Pete Crow-Armstrong", hr: 0 },
      { name: "Daulton Varsho", hr: 0 },
      { name: "Kody Clemens", hr: 0 }
    ]
  },
  {
    name: "Jack Davies",
    players: [
      { name: "Aaron Judge", hr: 0 },
      { name: "Vladimir Guerrero Jr", hr: 0 },
      { name: "Ronald Acuna Jr", hr: 0 },
      { name: "Bryce Harper", hr: 0 },
      { name: "Munetaka Murakami", hr: 0 },
      { name: "Manny Machado", hr: 0 },
      { name: "James Wood", hr: 0 },
      { name: "Seiya Suzuki", hr: 0 },
      { name: "Christian Yelich", hr: 0 },
      { name: "Tyler Soderstrom", hr: 0 }
    ]
  },
  {
    name: "Jake Bonnett",
    players: [
      { name: "Aaron Judge", hr: 0 },
      { name: "Nick Kurtz", hr: 0 },
      { name: "Yordan Alvarez", hr: 0 },
      { name: "Bobby Witt Jr", hr: 0 },
      { name: "Shea Langeliers", hr: 0 },
      { name: "Munetaka Murakami", hr: 0 },
      { name: "Corbin Carroll", hr: 0 },
      { name: "Zach Neto", hr: 0 },
      { name: "Christian Walker", hr: 0 },
      { name: "Daulton Varsho", hr: 0 }
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
      { name: "Luis Robert Jr", hr: 0 }
    ]
  },
  {
    name: "Jerry Ross",
    players: [
      { name: "Aaron Judge", hr: 0 },
      { name: "Junior Caminero", hr: 0 },
      { name: "Yordan Alvarez", hr: 0 },
      { name: "Kyle Tucker", hr: 0 },
      { name: "Riley Greene", hr: 0 },
      { name: "Gunnar Henderson", hr: 0 },
      { name: "James Wood", hr: 0 },
      { name: "Ben Rice", hr: 0 },
      { name: "Christian Yelich", hr: 0 },
      { name: "Kyle Manzardo", hr: 0 }
    ]
  },
  {
    name: "Jim Bonnett",
    players: [
      { name: "Kyle Schwarber", hr: 0 },
      { name: "Nick Kurtz", hr: 0 },
      { name: "Bobby Witt Jr", hr: 0 },
      { name: "Bryce Harper", hr: 0 },
      { name: "Munetaka Murakami", hr: 0 },
      { name: "Gunnar Henderson", hr: 0 },
      { name: "Spencer Torkelson", hr: 0 },
      { name: "Colson Montgomery", hr: 0 },
      { name: "Jac Caglianone", hr: 0 },
      { name: "Wilyer Abreu", hr: 0 }
    ]
  },
  {
    name: "Jimmy Topps",
    players: [
      { name: "Shohei Ohtani", hr: 0 },
      { name: "Junior Caminero", hr: 0 },
      { name: "Yordan Alvarez", hr: 0 },
      { name: "Ronald Acuna Jr", hr: 0 },
      { name: "Munetaka Murakami", hr: 0 },
      { name: "Gunnar Henderson", hr: 0 },
      { name: "Spencer Torkelson", hr: 0 },
      { name: "Mike Trout", hr: 0 },
      { name: "Christian Yelich", hr: 0 },
      { name: "Roman Anthony", hr: 0 }
    ]
  },
  {
    name: "Joan Bonnett",
    players: [
      { name: "Shohei Ohtani", hr: 0 },
      { name: "Eugenio Suarez", hr: 0 },
      { name: "Yordan Alvarez", hr: 0 },
      { name: "Vinnie Pasquantino", hr: 0 },
      { name: "Hunter Goodman", hr: 0 },
      { name: "Michael Busch", hr: 0 },
      { name: "Francisco Lindor", hr: 0 },
      { name: "Colson Montgomery", hr: 0 },
      { name: "Wyatt Langford", hr: 0 },
      { name: "Luis Robert Jr", hr: 0 }
    ]
  },
  {
    name: "Jon Somers",
    players: [
      { name: "Aaron Judge", hr: 0 },
      { name: "Nick Kurtz", hr: 0 },
      { name: "Yordan Alvarez", hr: 0 },
      { name: "Bobby Witt Jr", hr: 0 },
      { name: "Munetaka Murakami", hr: 0 },
      { name: "Riley Greene", hr: 0 },
      { name: "Spencer Torkelson", hr: 0 },
      { name: "Seiya Suzuki", hr: 0 },
      { name: "Jackson Merrill", hr: 0 },
      { name: "Kazuma Okamoto", hr: 0 }
    ]
  },
  {
    name: "Kolasa's",
    players: [
      { name: "Aaron Judge", hr: 0 },
      { name: "Eugenio Suarez", hr: 0 },
      { name: "Jo Adell", hr: 0 },
      { name: "Yordan Alvarez", hr: 0 },
      { name: "Hunter Goodman", hr: 0 },
      { name: "Gunnar Henderson", hr: 0 },
      { name: "Colson Montgomery", hr: 0 },
      { name: "Pete Crow-Armstrong", hr: 0 },
      { name: "Randy Arozarena", hr: 0 },
      { name: "Adolis Garcia", hr: 0 }
    ]
  },
  {
    name: "Luke Bonnett",
    players: [
      { name: "Aaron Judge", hr: 0 },
      { name: "Nick Kurtz", hr: 0 },
      { name: "Matt Olson", hr: 0 },
      { name: "Julio Rodriguez", hr: 0 },
      { name: "Munetaka Murakami", hr: 0 },
      { name: "Giancarlo Stanton", hr: 0 },
      { name: "James Wood", hr: 0 },
      { name: "Spencer Torkelson", hr: 0 },
      { name: "Jac Caglianone", hr: 0 },
      { name: "Adolis Garcia", hr: 0 }
    ]
  },
  {
    name: "Luke McGinty",
    players: [
      { name: "Cal Raleigh", hr: 0 },
      { name: "Junior Caminero", hr: 0 },
      { name: "Jo Adell", hr: 0 },
      { name: "Rafael Devers", hr: 0 },
      { name: "Munetaka Murakami", hr: 0 },
      { name: "Riley Greene", hr: 0 },
      { name: "James Wood", hr: 0 },
      { name: "Pete Crow-Armstrong", hr: 0 },
      { name: "Andy Pages", hr: 0 },
      { name: "Kyle Manzardo", hr: 0 }
    ]
  },
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
    name: "Mark Erdman",
    players: [
      { name: "Shohei Ohtani", hr: 0 },
      { name: "Brent Rooker", hr: 0 },
      { name: "Yordan Alvarez", hr: 0 },
      { name: "Bobby Witt Jr", hr: 0 },
      { name: "Riley Greene", hr: 0 },
      { name: "Gunnar Henderson", hr: 0 },
      { name: "Francisco Lindor", hr: 0 },
      { name: "Pete Crow-Armstrong", hr: 0 },
      { name: "Marcell Ozuna", hr: 0 },
      { name: "Adolis Garcia", hr: 0 }
    ]
  },
  {
    name: "Matt Badali",
    players: [
      { name: "Kyle Schwarber", hr: 0 },
      { name: "Juan Soto", hr: 0 },
      { name: "Ronald Acuna Jr", hr: 0 },
      { name: "Bobby Witt Jr", hr: 0 },
      { name: "Austin Riley", hr: 0 },
      { name: "Michael Busch", hr: 0 },
      { name: "James Wood", hr: 0 },
      { name: "Elly De La Cruz", hr: 0 },
      { name: "Jac Caglianone", hr: 0 },
      { name: "Tyler Soderstrom", hr: 0 }
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
    name: "Nick Mangan",
    players: [
      { name: "Aaron Judge", hr: 0 },
      { name: "Nick Kurtz", hr: 0 },
      { name: "Jo Adell", hr: 0 },
      { name: "Bobby Witt Jr", hr: 0 },
      { name: "Hunter Goodman", hr: 0 },
      { name: "Giancarlo Stanton", hr: 0 },
      { name: "Ben Rice", hr: 0 },
      { name: "Oneil Cruz", hr: 0 },
      { name: "Kyle Manzardo", hr: 0 },
      { name: "Jac Caglianone", hr: 0 }
    ]
  },
  {
    name: "Pat Vincent",
    players: [
      { name: "Aaron Judge", hr: 0 },
      { name: "Nick Kurtz", hr: 0 },
      { name: "Jo Adell", hr: 0 },
      { name: "Jose Ramirez", hr: 0 },
      { name: "Gunnar Henderson", hr: 0 },
      { name: "Michael Busch", hr: 0 },
      { name: "Cody Bellinger", hr: 0 },
      { name: "Alex Bregman", hr: 0 },
      { name: "Josh Naylor", hr: 0 },
      { name: "Ian Happ", hr: 0 }
    ]
  },
  {
    name: "Steve Barrins",
    players: [
      { name: "Aaron Judge", hr: 0 },
      { name: "Pete Alonso", hr: 0 },
      { name: "Fernando Tatis Jr", hr: 0 },
      { name: "Bryce Harper", hr: 0 },
      { name: "Teoscar Hernandez", hr: 0 },
      { name: "Giancarlo Stanton", hr: 0 },
      { name: "Pete Crow-Armstrong", hr: 0 },
      { name: "Mike Trout", hr: 0 },
      { name: "Alek Thomas", hr: 0 },
      { name: "Ryan Ritter", hr: 0 }
    ]
  },
  {
    name: "TJ Bonnett",
    players: [
      { name: "Aaron Judge", hr: 0 },
      { name: "Brent Rooker", hr: 0 },
      { name: "Matt Olson", hr: 0 },
      { name: "Yordan Alvarez", hr: 0 },
      { name: "Shea Langeliers", hr: 0 },
      { name: "Munetaka Murakami", hr: 0 },
      { name: "James Wood", hr: 0 },
      { name: "Spencer Torkelson", hr: 0 },
      { name: "Daulton Varsho", hr: 0 },
      { name: "Matt Wallner", hr: 0 }
    ]
  },
  {
    name: "Trevor Tovey",
    players: [
      { name: "Aaron Judge", hr: 0 },
      { name: "Pete Alonso", hr: 0 },
      { name: "Yordan Alvarez", hr: 0 },
      { name: "Ronald Acuna Jr", hr: 0 },
      { name: "Munetaka Murakami", hr: 0 },
      { name: "Corey Seager", hr: 0 },
      { name: "Elly De La Cruz", hr: 0 },
      { name: "Freddie Freeman", hr: 0 },
      { name: "Spencer Steer", hr: 0 },
      { name: "Josh Naylor", hr: 0 }
    ]
  },
  {
    name: "Vinny",
    players: [
      { name: "Aaron Judge", hr: 0 },
      { name: "Junior Caminero", hr: 0 },
      { name: "Matt Olson", hr: 0 },
      { name: "Bobby Witt Jr", hr: 0 },
      { name: "Austin Riley", hr: 0 },
      { name: "Hunter Goodman", hr: 0 },
      { name: "Cody Bellinger", hr: 0 },
      { name: "Kyle Stowers", hr: 0 },
      { name: "Jackson Chourio", hr: 0 },
      { name: "Tyler Soderstrom", hr: 0 }
    ]
  }
];

function getTeamScore(team) {
  const sorted = [...team.players].sort((a, b) => b.hr - a.hr);
  return sorted.slice(0, 9).reduce((sum, p) => sum + p.hr, 0);
}

function renderLeaderboard() {
  const leaderboard = document.createElement("div");
  leaderboard.innerHTML = "<h2>Leaderboard</h2>";

  const ranked = [...teams]
    .map(team => ({ ...team, score: getTeamScore(team) }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

  ranked.forEach((team, index) => {
    const row = document.createElement("div");
    row.innerText = `${index + 1}. ${team.name} - ${team.score} HR`;
    leaderboard.appendChild(row);
  });

  playersDiv.appendChild(leaderboard);
}

function loadDropdown() {
  teamSelect.innerHTML = "";
  teams.forEach((team, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = team.name;
    teamSelect.appendChild(option);
  });
}

function renderSelectedTeam() {
  const team = teams[Number(teamSelect.value || 0)];

  playersDiv.innerHTML = "";
  renderLeaderboard();

  const sorted = [...team.players].sort((a, b) => b.hr - a.hr);

  const teamDiv = document.createElement("div");
  teamDiv.innerHTML = `<h2>${team.name}</h2>`;

  sorted.forEach((p, i) => {
    const row = document.createElement("div");
    row.innerText = i === 9
      ? `${p.name} - ${p.hr} HR (BENCH)`
      : `${p.name} - ${p.hr} HR`;
    if (i === 9) row.style.opacity = "0.6";
    teamDiv.appendChild(row);
  });

  playersDiv.appendChild(teamDiv);
}

async function updateHRs() {
  alert("Updating real HR totals...");

  const allPlayers = [...new Set(
    teams.flatMap(team => team.players.map(p => p.name))
  )];

  const res = await fetch("/api/update-hrs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ players: allPlayers })
  });

  const data = await res.json();

  teams.forEach(team => {
    team.players.forEach(p => {
      if (data[p.name] !== undefined) {
        p.hr = data[p.name];
      }
    });
  });

  renderSelectedTeam();
}

loadDropdown();
teamSelect.addEventListener("change", renderSelectedTeam);
renderSelectedTeam();
