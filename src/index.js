import './style.css';

function makeList() {
let listData = [{
  "Name": 'John',
  "Score": 100
},
{
  "Name": 'John',
  "Score": 100
}, {
  "Name": 'Peter',
  "Score": 20
},
{
  "Name": 'Hope',
  "Score": 50
},
{
  "Name": 'Faith',
  "Score": 78
},
  ];
  const listContainer = document.createElement('div');
  const listElement = document.createElement('ul');
  const numberOfListItems = listData.length;
  let listItem;
  let i;
  listContainer.className = 'listContainer';
  const h2Left = document.createElement('h2');
  h2Left.innerHTML = 'Recent Scores <span><button>Refresh</button></span>';
  listContainer.appendChild(h2Left);
  // Add it to the page
  document.getElementsByTagName('body')[0].appendChild(listContainer);
  listContainer.appendChild(listElement);
  for (i = 0; i < numberOfListItems; ++i) {
      // create an item for each one
      listItem = document.createElement('li');

      // Add the item text
      listItem.innerHTML = `${listData[i].Name}:${listData[i].Score}`;

      // Add listItem to the listElement
      listElement.appendChild(listItem);
  }
}
// Usage
makeList();
const divRight = document.createElement('div');
divRight.className = 'formContainer';
const h2Right = document.createElement('h2');
h2Right.innerHTML = 'Add your score';
divRight.appendChild(h2Right);
// document.body.appendChild(h2Right);
document.getElementsByTagName('body')[0].appendChild(divRight);
  // divRight.appendChild(form);
let form = document.createElement('form');
let br = document.createElement('br');
form.setAttribute('method', 'post');
let Name = document.createElement('input');
Name.setAttribute('type', 'text');
Name.setAttribute('name', 'Name');
Name.className = 'inputName';
Name.setAttribute('placeholder', 'Your name');

let Score = document.createElement('input');
Score.setAttribute('type', 'text');
Score.setAttribute('name', 'Score');
Score.setAttribute('placeholder', 'Your score');

const submitButton = document.createElement('input');
submitButton.setAttribute('type', 'submit');
submitButton.className = 'subbtn';
submitButton.setAttribute('value', 'Submit');

form.appendChild(Name);
form.appendChild(br.cloneNode());
form.appendChild(Score);
form.appendChild(br.cloneNode());
form.appendChild(submitButton);

divRight.appendChild(form);
document.getElementsByTagName('body')[0].appendChild(divRight);

form.addEventListener('submit', () => {
  alert('Button Clicked');
  
});
