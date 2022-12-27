let createbtn = document.getElementById('create-btn')
let clearbtn = document.getElementById('clear-btn');
let add = document.getElementById('add-btn');
let cancel = document.getElementById('cancel-btn');
let duplicate_btn = document.getElementsByClassName('duplicate-btn')[0];
let empty_btn = document.getElementsByClassName('empty-btn')[0];
let clear_it_btn = document.getElementsByClassName('clear-btns')[0];
let clear_not_btn = document.getElementsByClassName('clear-btns')[1];

var flag = false;
let prvInput;

display_fun();

createbtn.addEventListener('click', create_fun)
clearbtn.addEventListener('click', clear_fun)
add.addEventListener('click', add_fun)
cancel.addEventListener('click', cancel_fun)
duplicate_btn.addEventListener('click', duplicate_ok);
empty_btn.addEventListener('click', empty_ok);
clear_it_btn.addEventListener('click', clear_It);
clear_not_btn.addEventListener('click', clear_Not);

function display_fun() {
  let updatedStr = ``;
  if (localStorage.length == 0) {
    updatedStr = `    
        <p>Click on 'create' to add some notes</p>
        `
    document.getElementById('main-container').style.cssText += `
      font-size: 34px;
      font-weight: bold;
      text-align: center;
      `
  }

  else {
    for (let i = 0; i < localStorage.length; i++) {
      updatedStr += `    
      <div class="note-cards">
        <p>
        ${localStorage.getItem(i)}
        </p>
        <button class="remove-btns" onclick="localStorage.removeItem(${i}); display_fun();">remove</button>
      </div>
    `
    }
  }
  document.getElementById('main-container').innerHTML = updatedStr;
}  // for displaying when web-page reloads

function counter_fun() {
  let local_counter = 0;

  if (localStorage.length == 0) {
    flag = true;
    return local_counter;
  }

  else {

    for (let j = 0; j <= localStorage.length; j++) {
      flag = false;
      local_counter = j;
    }
  }
  return local_counter;
}  // for counting the number of index

function create_fun() {

  document.getElementById('note-taker').style.visibility = "visible";
}  // for generating a popup box in which you can write your short notes

function clear_fun() {
  document.getElementById('clearBox').style.visibility = "visible";
}

function clear_It() {
  localStorage.clear();
  document.getElementById('main-container').innerHTML = `
     <p>Click on 'create' to add some notes</p>
  `
  document.getElementById('main-container').style.cssText += `
      font-size: 34px;
      font-weight: bold;
      text-align: center;
      `
  document.getElementById('clearBox').style.visibility = "hidden";
}
// for clearing all the contents present in your note

function clear_Not() {
  document.getElementById('clearBox').style.visibility = "hidden";
}

function add_fun() {
  let passKey;
  var counter = counter_fun();
  let input = document.getElementById('note-field').value;

  prvInput = duplicate_check(input);

  if (prvInput) {
    passKey = duplicate_fun();
  }

  if (input == "") {
    passKey = empty_fun();
  }

  switch (passKey) {

    case "duplicate": document.getElementById('duplicate-warning').style.visibility = "visible";
      break;

    case "empty": document.getElementById('empty-warning').style.visibility = "visible";
      break;

    default: localStorage.setItem(counter, input)
      display_fun();
      document.getElementById('note-taker').style.visibility = "hidden";
  }

}    // for adding the shortnote to your webpage

function cancel_fun() {
  document.getElementById('note-field').value = "";
  document.getElementById('note-taker').style.visibility = "hidden";
}    // for cancel the operation

function duplicate_check(input) {

  let isDuplicate = false;

  for (allKeys in localStorage) {

    if (localStorage[allKeys] == input) {
      isDuplicate = true;
    }
  }

  return isDuplicate;
}  // to check whether the input you have filled is actually the duplicate one or not

function duplicate_fun() {
  return "duplicate";        // to return the duplicate indication to the pass key
}        // for returning the duplicate indication to the pass key

function duplicate_ok() {
  document.getElementById('duplicate-warning').style.visibility = "hidden";
}        // for showing the simple 'duplicate content' message dialogue box 

function empty_fun() {
  return "empty";
}      // for returning the empty indication to the pass key

function empty_ok() {
  document.getElementById('empty-warning').style.visibility = "hidden";
}      // for showing the simple 'empty content' message dialogue box 
