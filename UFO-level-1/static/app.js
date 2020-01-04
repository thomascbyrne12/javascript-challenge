data.forEach(function(UFOsighting) {
  console.log(UFOsighting);
  var row = tbody.append("tr");
  Object.entries(UFOsighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
  });
});