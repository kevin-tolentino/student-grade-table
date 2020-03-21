class App{
  handleGetGradesError(error){
    console.error(error)
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades)
  }
  constructor(gradeTable) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.gradeTable = gradeTable
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
