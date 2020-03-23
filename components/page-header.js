class Pageheader{
  constructor(headerElement){
    this.headerElement = headerElement;
  }
  updateAverage(newAverage){
    var headerElement = this.headerElement.querySelector("span");
    newAverage = Math.floor(newAverage * 100) / 100
    headerElement.textContent = newAverage
  }
}
