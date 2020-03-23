class App{
  handleGetGradesError(error){
    console.error(error)
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades)
    var gradeAverage = 0;
    for(var gradeAverageCounter = 0; gradeAverageCounter < grades.length; gradeAverageCounter++){
      gradeAverage = gradeAverage + grades[gradeAverageCounter].grade
      if (gradeAverageCounter === grades.length - 1){
        gradeAverage = gradeAverage/grades.length;
        this.pageHeader.updateAverage(gradeAverage);
      }
    }
  }
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.gradeTable = gradeTable
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm
  }
  getGrades(){
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "ce198Okb"},
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  start(){
    this.getGrades()
  }
}
