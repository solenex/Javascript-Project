// From data.js
var tableData = data;


var tbody = d3.select("tbody");

// First, We populate the table
function populateTable(data) {
    
    // Loop through each object in tableData 
    data.forEach((tableObject) => {
      // Add a row to the table 
      var row = tbody.append("tr");

    //loop through each object
      Object.values(tableObject).forEach((objectField) => {
        // Append a cell to the row and insert the value
        var cell = row.append("td");
          cell.text(objectField);
        }
      );
    });
  }

    // Make sure people can click
function handleClick() {
    // Prevent the form from refreshing the page
    d3.event.preventDefault();
    // select the date and the time
    var date = d3.select("#datetime").property("value");
    // Reassign filtered data as tabledata 
    let DatabyDate = tableData;
    // Check the accuracy of the data
    if (date) {
      // Filter the table to retrieve the data for the right date
      DatabyDate = DatabyDate.filter(row => row.datetime === date);
    }
    // Populate the new table with corresponding info
    buildTable(DatabyDate);
  }
  
  // Add an event listener when people click on the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Populate the table when initializing page
  populateTable(tableData);