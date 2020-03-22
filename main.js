var tableElement = document.querySelector("table")
var header = document.querySelector("header")
var gradeTable = new GradeTable(tableElement)
var pageHeaderClass = new Pageheader (header);
var studentGradesArray = new App (gradeTable, pageHeaderClass)
studentGradesArray.start()
