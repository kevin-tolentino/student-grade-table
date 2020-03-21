class GradeTable{
  constructor(tableElement){
    this.tableElement = tableElement;

  }
  updateGrades(grades){
    // updateGrades takes one parameter, grades and logs it to the console for the time being.
    var tBody = this.tableElement.querySelector("tbody");
    tBody.innerHTML = "";
    for (var arrayCounter = 0; arrayCounter < grades.length; arrayCounter++) {
      var tableData1 = document.createElement("td")
      tableData1.textContent = grades[arrayCounter].name
      var tableData2 = document.createElement("td")
      tableData2.textContent = grades[arrayCounter].course
      var tableData3 = document.createElement("td")
      tableData3.textContent = grades[arrayCounter].grade
      var tableRow = document.createElement("tr")
      tableRow.appendChild(tableData1)
      tableRow.appendChild(tableData2)
      tableRow.appendChild(tableData3)
      tBody.appendChild(tableRow)
    }
  }
}
