const quietTimes = [
  { time: "00:00", status: "Quiet" },
  { time: "01:00", status: "Busy" },
  { time: "02:00", status: "Quiet" },
  { time: "03:00", status: "Busy" },
];

const tableBody = document.querySelector("#quiet-times-table tbody");

quietTimes.forEach((timeData) => {
  const row = document.createElement("tr");
  const statusClass =
    timeData.status.toLowerCase() === "quiet" ? "status-quiet" : "status-busy";
  row.innerHTML = `<td>${timeData.time}</td><td class="${statusClass}">${timeData.status}</td>`;
  tableBody.appendChild(row);
});
