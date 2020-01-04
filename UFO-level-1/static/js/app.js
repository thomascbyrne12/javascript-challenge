// from data.js
var tableData = data;
data.forEach(function (tabledData) {
    console.log(tableData;
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(function ([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
// YOUR CODE HERE!
