class GradeForm{
  constructor(formElement){
    this.handleSubmit = this.handleSubmit.bind(this)
    this.formElement = formElement;
  }
  onSubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault()
    console.log("HIIII")
    var formData = new FormData(event.target)
    var formName = formData.get("nameInput")
    var formCourse = formData.get("courseInput")
    var formGrade = formData.get("gradeInput")
    this.createGrade(formName, formCourse, formGrade)
    event.target.reset()
  }
}
