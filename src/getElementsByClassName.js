// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // create array to store the elements that have the class
  const elementsWithClass = [];

  // create function that will search a element if it has a class and children
  const findClass = (element) => {
    if(_.contains(element.classList, className)){
      elementsWithClass.push(element);
    }

    if(element.childNodes.length > 0){
      _.each(element.childNodes, (childElement) => {
        findClass(childElement);
      })
    }
  }

  // feed document.body to the function created
  findClass(document.body);

  // return array
  return elementsWithClass;
};
