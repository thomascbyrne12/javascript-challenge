// from data.js
var tableData = data;

// from index.html
var tbody = d3.select('tbody');

// Logging data and writing to the table
data.forEach(function(tableData) {
  console.log(sighting);
  var row = tbody.append('tr');
  Object.entries(sighting).forEach(function ([key, value]) {
    console.log(key, value);

    var cell = row.append('td');
    cell.text(value);
  });
});
