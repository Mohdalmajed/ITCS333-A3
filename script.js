// Get API url
const URL = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";

// Table body element
const tableBody = document.querySelector("tbody");

// Fetch data from API
async function getData() {
    const response = await fetch(URL);

    const data = await response.json();
    populateTable(data.results);
}

// Populate table body with data
function populateTable(results) {

    // Adding rows dynamically
    results.forEach((result) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${result['year']}</td>
      <td>${result['semester']}</td>
      <td>${result['the_programs']}</td>
      <td>${result['nationality']}</td>
      <td>${result['colleges']}</td>
      <td>${result['number_of_students']}</td>
    `;
        tableBody.appendChild(row);
    });
}

// Get the result by calling the function
getData();