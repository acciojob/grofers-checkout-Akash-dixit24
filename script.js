const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price cells
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  // Sum all the prices
  prices.forEach(price => {
    total += Number(price.textContent.trim());
  });

  // Get the table (assuming only one table exists)
  const table = document.querySelector("table");

  // Create a new row
  const totalRow = document.createElement("tr");

  // Create the total cell
  const totalCell = document.createElement("td");

  // Span across the entire row (optional)
  totalCell.colSpan = table.rows[0].cells.length;

  totalCell.textContent = "Total Price: " + total;

  
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

