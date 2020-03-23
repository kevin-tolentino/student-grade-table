class Pageheader{
  constructor(headerElement){
    this.headerElement = headerElement;
  }
  updateAverage(newAverage){
    var headerElement = this.headerElement.querySelector("span");
    headerElement.textContent = newAverage
  }
}
