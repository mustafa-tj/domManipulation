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
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc'

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send'

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'white';



//queryselectorall//

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var itemss = document.querySelectorAll('.list-group-item');
// itemss[2].style.color = 'green';


// var odd = document.querySelectorAll('li:nth-child(odd)');

// for (var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
// }

// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < even.length; i++){
//     even[i].style.backgroundColor = 'pink';
// }


// Traversing the DOM //
// var itemList = document.querySelector('#items');
// parentnode property
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// // parent element

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'pink';
// console.log(itemList.parentElement.parentElement.parentElement);

// // childnodes
// console.log(itemList.childNodes);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // firstchild
// console.log(itemList.firstChild);

// // firstelementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// // lastchild
// console.log(itemList.lastChild);

// // lastelementchild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// //nextsiblinng
// console.log(itemList.nextSibling);

// // nextelementsibling
// console.log(itemList.nextElementSibling);

// //previoussibling
// console.log(itemList.previousSibling);

// //previouselementsibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'red';

// // createelement

// // create a div
// var newDiv = document.createElement('div');

// // Add class
// newDiv.className = 'hello';

// // add id
// newDiv.id = 'hello1';

// // add attribute
// newDiv.setAttribute('title','Hello Div');

// // create text node
// var newDivText = document.createTextNode('Hello World');

// // add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');


// console.log(newDiv);

// container.insertBefore(newDiv , h1);
// newDiv.style.color = 'red';
// newDiv.style.fontSize = '21px';

// // Now go head and add HEllo word before Item Lister
// // Now go head and add HEllo word before Item 1


// 

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');



// form submit event 
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click',removeItem);
// filter event
filter.addEventListener('keyup',filterItems);


// add item
function addItem(e){
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');
    // add classname
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create delete button element
    var deleteBtn = document.createElement('button');

    // add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'))
    // append button to li
    li.appendChild(deleteBtn);


    // append li to list
    itemList.appendChild(li);

}
// remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get lis
    var items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    })
}









