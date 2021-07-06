let table = document.createElement('table');
table.id = 'table';
table.style.margin = '10px auto';
document.body.appendChild(table);

for (let n = 1; n <= 30; n++) {
	let row = document.createElement('tr');
	row.id = `row${n}`;
	document.getElementById('table').appendChild(row);
	for (let i = 1; i <= 30; i++) {
		let cell = document.createElement('td');
		cell.classList.add('cell');
		document.getElementById(`row${n}`).appendChild(cell);
	}
}

document.body.addEventListener('click', changeAllCellsColor, true);

function changeAllCellsColor() {
	if (event.target == document.body) {
		document.getElementById('table').classList.toggle('inverse');
	}
}

document.getElementById('table').addEventListener('click', changeCellColor, true);

function changeCellColor() {
	event.target.classList.toggle('active');
}
