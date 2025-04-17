var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];

planets.reverse();

var dropdown = document.getElementById('planets');

planets.forEach(function(planet, index) {
    var option = document.createElement('option');
    option.value = planet[0];
    option.textContent = planet[0];
    
    if (planet[0] === 'Earth') {
        option.selected = true;
    }

    dropdown.appendChild(option);
});

function calculateWeight(weight, planetName) {
    for (var i = 0; i < planets.length; i++) {
        if (planets[i][0] === planetName) {
            return weight * planets[i][1];
        }
    }
    return 0;
}

function updatePlanetVisual(planetName) {
    const planetImg = document.getElementById('planet-img');
    const imageMap = {
        Mercury: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
        Venus: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
        Earth: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
        Moon: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
        Mars: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
        Jupiter: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
        Saturn: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
        Uranus: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
        Neptune: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
        Pluto: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg",
        Sun: "https://science.nasa.gov/wp-content/uploads/2023/06/sun-h1180-jpg.webp"
    };
    planetImg.src = imageMap[planetName] || "";
}

function updateGlowColor(planetName) {
    const planetImg = document.getElementById('planet-img');
    const glowColors = {
        Mercury: 'rgba(169,169,169,0.6)',
        Venus: 'rgba(255, 220, 180, 0.5)',
        Earth: 'rgba(100, 200, 255, 0.5)',
        Moon: 'rgba(230,230,230,0.4)',
        Mars: 'rgba(255, 100, 100, 0.5)',
        Jupiter: 'rgba(255, 200, 150, 0.5)',
        Saturn: 'rgba(255, 245, 180, 0.4)',
        Uranus: 'rgba(180, 255, 255, 0.4)',
        Neptune: 'rgba(100, 150, 255, 0.5)',
        Pluto: 'rgba(200, 180, 220, 0.4)',
        Sun: 'rgba(255, 200, 0, 0.7)'
    };
    planetImg.style.boxShadow = `0 0 25px 15px ${glowColors[planetName] || 'rgba(255,255,255,0.4)'}`;
}
function generateShootingStars() {
    const numStars = 10;
    for (let i = 0; i < numStars; i++) {
      let star = document.createElement('div');
      star.classList.add('shooting-star');
      star.style.top = Math.random() * 100 + 'vh';
      star.style.left = Math.random() * 100 + 'vw'; 
      document.body.appendChild(star);
  
      star.style.animationDuration = Math.random() * 2 + 2 + 's';
      star.style.animationDelay = Math.random() * 2 + 's'; 
    }
  }
  
function formatWeight(value) {
    return Number(value.toFixed(2)).toString();
}

function handleClickEvent(e) {
    var userWeight = document.getElementById('user-weight').value;
    var planetName = document.getElementById('planets').value;
    var result = calculateWeight(userWeight, planetName);

    var output = document.getElementById('output');
    output.textContent = `If you were on ${planetName}, you would weigh ${formatWeight(result)}lbs!`;

    updatePlanetVisual(planetName);
    updateGlowColor(planetName);
    generateShootingStars();
}
window.onload = function () {
    handleClickEvent();
};

document.getElementById('calculate-button').onclick = handleClickEvent;