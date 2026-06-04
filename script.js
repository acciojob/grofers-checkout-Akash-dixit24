// Select all price cells
const prices = document.querySelectorAll(".prices");

// Calculate total price
let total = 0;

prices.forEach(price => {
    total += Number(price.textContent);
});

// Select the table
const table = document.querySelector("table");

// Create a new row
const totalRow = document.createElement("tr");

// Create a cell for total
const totalCell = document.createElement("td");

// Span across both columns
totalCell.setAttribute("colspan", "2");

// Set total value
totalCell.textContent = total;

// Append cell to row and row to table
totalRow.appendChild(totalCell);
table.appendChild(totalRow);