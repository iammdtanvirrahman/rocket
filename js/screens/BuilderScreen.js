const rocketStack = document.getElementById('rocketStack');
const massValue = document.getElementById('massValue');
const fuelValue = document.getElementById('fuelValue');
const stageValue = document.getElementById('stageValue');

const parts = document.querySelectorAll('.part');

const stats = {
  mass: 0,
  fuel: 0,
  stages: 0
};

const partStats = {
  engine: { mass: 1.2, fuel: 0, stages: 1 },
  tank: { mass: 0.8, fuel: 60, stages: 0 },
  capsule: { mass: 0.9, fuel: 0, stages: 0 },
  structure: { mass: 0.2, fuel: 0, stages: 1 }
};

function updateStats() {
  massValue.textContent = `${stats.mass.toFixed(1)}t`;
  fuelValue.textContent = stats.fuel;
  stageValue.textContent = stats.stages;
}

parts.forEach((part) => {
  part.addEventListener('click', () => {
    const type = part.dataset.part;

    const element = document.createElement('div');
    element.className = 'rocket-part';
    element.textContent = part.textContent;

    rocketStack.appendChild(element);

    const data = partStats[type];
    stats.mass += data.mass;
    stats.fuel += data.fuel;
    stats.stages += data.stages;

    updateStats();
  });
});

document.getElementById('launchBtn').addEventListener('click', () => {
  if (rocketStack.children.length === 0) {
    alert('Build a rocket first!');
    return;
  }

  alert('🚀 Launch simulator will be added next phase.');
});
