let createbtn = document.getElementById('create-btn')
let clearbtn = document.getElementById('clear-btn');
let add = document.getElementById('add-btn');
let cancel = document.getElementById('cancel-btn');

var flag = false;

display_fun();

createbtn.addEventListener('click', create_fun)
clearbtn.addEventListener('click', clear_fun)
add.addEventListener('click', add_fun)
cancel.addEventListener('click', cancel_fun)

function display_fun() {
  if (localStorage.length == 0) {
    document.getElementById('main-container').innerHTML += `    
        Click on 'create' to add some notes
        `
    document.getElementById('main-container').style.cssText += `
      font-size: 34px;
      font-weight: bold;
      text-align: center;
      `
  }

  else {
    for (let i = 0; i < localStorage.length; i++) {
      document.getElementById('main-container').innerHTML += `    
      <div class="note-cards">
        <p>
        ${localStorage.getItem(i)}
        </p>
      </div>
    `
    }
  }
}

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
}

function create_fun() {

  document.getElementById('note-taker').style.visibility = "visible";
}

function clear_fun() {
  let decision = confirm("Do you wish to delete it??")
  if (decision) {
    localStorage.clear();
    document.getElementById('main-container').innerHTML = `
     Click on 'create' to add some notes
  `
  }
}

function add_fun() {
  var counter = counter_fun();
  let input = document.getElementById('note-field').value;
  localStorage.setItem(counter, input)

  if (flag) {
    document.getElementById('main-container').innerHTML = `    
    <div class="note-cards">
      <p>
      ${input}
      </p>
    </div>
    `
  }

  else {

    document.getElementById('main-container').innerHTML += `    
    <div class="note-cards">
      <p>
      ${input}
      </p>
    </div>
    `
  }
  document.getElementById('note-taker').style.visibility = "hidden";
}

function cancel_fun() {
  document.getElementById('note-field').value = "";
  document.getElementById('note-taker').style.visibility = "hidden";
}






// function checker() {
//   if (localStorage.length == 0) {
//     console.log('No item in the storage')
//   }

//   else {
//     for (let i = 0; i < localStorage.length; i++) {
//       console.log(`${localStorage.key(i)} with value: ${localStorage.getItem(localStorage.key(i))}`)
//     }
//   }

// }

// checker()

// for (let i = 0; i < 4; i++) {

//   let val = prompt("Enter the value");
//   localStorage.setItem(i, val);
// }

// let ks = Object.keys(localStorage)
// let vals = Object.values(localStorage)

// ks.forEach((ks_item) => {
//   console.log(`keys: ${ks_item} values: ${localStorage.getItem(ks_item)}`)
// })

