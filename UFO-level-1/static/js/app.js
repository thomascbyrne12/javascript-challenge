// from data.js
var tableData = data;

// from index.html
var tbody = d3.select('tbody');

// Logging data and writing to the table
data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append('tr');
  Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    var cell = row.append('td');
    cell.text(value);
  });
});
