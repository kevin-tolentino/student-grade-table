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
    this.createGrade = this.createGrade.bind(this)
    this.handleCreateGradesError = this.handleCreateGradesError.bind(this)
    this.handleCreateGradesSucess = this.handleCreateGradesSucess.bind(this)
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
    this.gradeForm.onSubmit(this.createGrade)
  }
  createGrade(name, course, grade){
    console.log("name, course, grade: ", name, course, grade)
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "ce198Okb" },
      data: {
        name: name,
        course: course,
        grade: grade
      },
      success: this.handleCreateGradesSuccess,
      error: this.handleCreateGradesError
    })
  }
  handleCreateGradesError(error){
    console.error(error)
  }
  handleCreateGradesSucess(){
    this.getGrades()
  }
}
