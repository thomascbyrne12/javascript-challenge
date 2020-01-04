// from data.js
var tableData = data;

// from index.html
var tbody = d3.select('tbody');

// Logging data and writing to the table
data.forEach(function (sighting) {
    console.log(sighting);
    var row = tbody.append('tr');
    Object.entries(sighting).forEach(function ([key, value]) {
        console.log(key, value);

        var cell = row.append('td');
        cell.text(value);
    });
});

// connect to filter button
var filter_button = d3.select('#filter-btn')

filter_button.on('click', function()) {

    d3.event.peverntDefault();

    var filter_table_input = d3.select('#datetime');

    var fitler_table_input_value = filter_table_input.property('value');

    console.log(fitler_table_input_value);

    var filtered_dates = tableData.filter(tableData => tableData.datetime === filter_table_date_value);
    
    d3.select('tbody').html('');
    
    filtered_dates.forEach(function(sighting) {
        console.log(sighting);
        var row = tbody.append('tr');
        Object.entries(sighting).forEach(function ([key, value]) {
            console.log(key, value);

            var cell = row.append('td');
            cell.text(value);
        });
    }
};
