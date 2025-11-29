const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // 1. Select all prices
  const priceCells = document.querySelectorAll(".price");

  // 2. Sum the prices
  let total = 0;
  priceCells.forEach(cell => {
    total += Number(cell.textContent);
  });

  // 3. Create a new row for total
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.setAttribute("colspan", "2"); 
  totalCell.textContent = `Total Price: ${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

