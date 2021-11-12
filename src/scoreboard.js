const makeList = () => {
    const listData = [];
    const listContainer = document.createElement('div');
    const listElement = document.createElement('ul');
    const numberOfListItems = listData.length;
    let listItem;
    listContainer.className = 'listContainer';
    const h2Left = document.createElement('h2');
    h2Left.innerHTML = 'Recent Scores <span><button id = "refresh">Refresh</button></span>';
    listContainer.appendChild(h2Left);
    // Add it to the page
    document.getElementsByTagName('body')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);
  
    for (let i = 0; i < numberOfListItems; i++) {// eslint-disable-line
      // create an item for each one
      listItem = document.createElement('li');
  
      // Add the item text
      listItem.innerHTML = `${listData[i].Name}:${listData[i].Score}`;
  
      // Add listItem to the listElement
      listElement.appendChild(listItem);
    }
  };
  // Usage
  makeList();