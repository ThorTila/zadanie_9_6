var button = document.getElementById('addElem');
var list = document.getElementById('list');
button.addEventListener('click', function() {
  var newElement = document.createElement('li');
  newElement.innerText = 'item ' + document.getElementsByTagName('li').length;
  list.appendChild(newElement);
});
