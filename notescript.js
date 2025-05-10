const notes = [];

document.querySelectorAll('.lane').forEach(lane => {
  lane.addEventListener('click', (e) => {
    const laneNum = parseInt(lane.dataset.lane);
    const time = Date.now();
    notes.push({ lane: laneNum, time });
  });
});

document.getElementById('exportBtn').addEventListener('click', () => {
  const output = document.getElementById('output');
  output.textContent = JSON.stringify(notes, null, 2);
});
