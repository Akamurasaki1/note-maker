const notes = [];

document.querySelectorAll('.lane').forEach(lane => {
  lane.addEventListener('click', (e) => {
    const laneNum = parseInt(lane.dataset.lane);
    const time = Date.now();
    notes.push({ lane: laneNum, time });
  });
});

function downloadJson(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename.endsWith('.json') ? filename : filename + '.json';
  a.click();
  URL.revokeObjectURL(url);
}

document.getElementById('exportBtn').addEventListener('click', () => {
  const filename = document.getElementById('filenameInput').value.trim();
  if (!filename) {
    alert('ファイル名を入力してください');
    return;
  }
  downloadJson(notes, filename);
});
