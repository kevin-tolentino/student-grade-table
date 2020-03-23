var tableElement = document.querySelector("table")
var formElement = document.querySelector("form")
var header = document.querySelector("header")
var gradeTable = new GradeTable(tableElement)
var formElementClass = new GradeForm(formElement)
var pageHeaderClass = new Pageheader (header);
var studentGradesArray = new App (gradeTable, pageHeaderClass, formElementClass)
studentGradesArray.start()
