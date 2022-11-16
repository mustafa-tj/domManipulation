// // Examiine the document object

// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


// Get elemment by ID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye.';
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px black';

// var addItems = document.getElementsByClassName('title');
// addItems[0].style.fontWeight = 'bold';
// addItems[0].style.color = 'green';

// get element by classname

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// error
// items.style.backgroundColor = 'grey';

// solution
// for(var i = 0; i < items.length ; i++){
//     items[i].style.backgroundColor = 'grey';
// }

// items[2].style.backgroundColor = 'green';
// for(var i =0; i < items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }

//getelementsbytagname//

// var li = document.getElementsByTagName('li');
// for(var i = 0; i < li.length ; i++){
//     li[i].style.backgroundColor = 'grey';
// }

//queryselector//
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc'

var input = document.querySelector('input');
input.value = 'Hello World'

var submit = document.querySelector('input[type="submit"]');
submit.value = 'Send'

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'white';



//queryselectorall//

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

var itemss = document.querySelectorAll('.list-group-item');
itemss[2].style.color = 'green';


var odd = document.querySelectorAll('li:nth-child(odd)');

for (var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}

var even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < even.length; i++){
    even[i].style.backgroundColor = 'pink';
}