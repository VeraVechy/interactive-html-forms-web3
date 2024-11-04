const tableData = [
  { col1: "Row 1 Col 1", col2: "Row 1 Col 2", col3: "Row 1 Col 3" },
  { col1: "Row 2 Col 1", col2: "Row 2 Col 2", col3: "Row 2 Col 3" },
  { col1: "Row 3 Col 1", col2: "Row 3 Col 2", col3: "Row 3 Col 3" },
];

const tableBody = document.querySelector("#data-table tbody");

tableData.forEach((rowData) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${rowData.col1}</td><td>${rowData.col2}</td><td>${rowData.col3}</td>`;
  tableBody.appendChild(row);
});
