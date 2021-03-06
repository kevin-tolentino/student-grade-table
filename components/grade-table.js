class GradeTable{
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;

  }
  updateGrades(grades){
    // updateGrades takes one parameter, grades and logs it to the console for the time being.
    var tBody = this.tableElement.querySelector("tbody");
    tBody.innerHTML = "";
    for (var arrayCounter = 0; arrayCounter < grades.length; arrayCounter++) {
      var tableRow = this.renderGradeRow(grades[arrayCounter], this.deleteGrade)
      tBody.appendChild(tableRow)
    }
    if (grades.length === 0){
      this.noGradesElement.classList.remove("d-none")
    } else {this.noGradesElement.className = "d-none"}
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade
  }
  renderGradeRow(data, deleteGrade){
      var tableData1 = document.createElement("td")
      tableData1.textContent = data.name
      var tableData2 = document.createElement("td")
      tableData2.textContent = data.course
      var tableData3 = document.createElement("td")
      tableData3.textContent = data.grade
      var tableData4Button = document.createElement("button")
      tableData4Button.textContent = "DELETE"
      tableData4Button.classList.add("btn", "btn-danger")
      tableData4Button.addEventListener("click", function(){
        deleteGrade(data.id);
      })
      var tableData4 = document.createElement("td")
      tableData4.appendChild(tableData4Button)
      var tableRow = document.createElement("tr")
      tableRow.appendChild(tableData1)
      tableRow.appendChild(tableData2)
      tableRow.appendChild(tableData3)
      tableRow.appendChild(tableData4)
      return tableRow;
  }
}
