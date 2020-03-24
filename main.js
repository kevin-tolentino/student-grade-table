var tableElement = document.querySelector("table")
var formElement = document.querySelector("form")
var header = document.querySelector("header")
var pElement = document.querySelector("p")
var gradeTable = new GradeTable(tableElement, pElement)
var formElementClass = new GradeForm(formElement)
var pageHeaderClass = new Pageheader (header);
var studentGradesArray = new App (gradeTable, pageHeaderClass, formElementClass)
studentGradesArray.start()
