let allData = [];

window.onload = function () {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      allData = data;
      filterData(); // show default range
    })
    .catch((error) => console.error('Error fetching data:', error));
};

function filterData() {
  const min = parseInt(document.getElementById('min').value);
  const max = parseInt(document.getElementById('max').value);
  const tbody = document.getElementById('data-body');
  tbody.innerHTML = ''; // Clear previous rows

  const filtered = allData.filter((item) => item.id >= min && item.id <= max);

  filtered.forEach((item) => {
    const row = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.textContent = item.id;

    const titleCell = document.createElement('td');
    titleCell.textContent = item.title;

    const bodyCell = document.createElement('td');
    bodyCell.textContent = item.body;

    row.appendChild(idCell);
    row.appendChild(titleCell);
    row.appendChild(bodyCell);

    tbody.appendChild(row);
  });

  if (filtered.length === 0) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 3;
    cell.textContent = 'No data found in this range.';
    row.appendChild(cell);
    tbody.appendChild(row);
  }
}
