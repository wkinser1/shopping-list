/**
 * My Shopping List
 */

const newShoppingListItemInput = document.querySelector('#shoppingListItem'),
    addToShoppingListButton = document.querySelector('#addToShoppingList'),
    shoppingListElement = document.querySelector('#shoppingList');

    shoppingListElement.addEventListener('click', (event) => {
      //console.log(event); 
      let target = event.target;

        if (target.className === 'remove') {
            target.parentElement.remove();
        }
    });

//Event that add list item when we press enter
    newShoppingListItemInput.addEventListener('keypress', function(event) {
      if (event.key == "Enter") {
        addToList();
      }
      console.log(event);
    });
    
   addToShoppingListButton.addEventListener('click', function(event) {        
        let newShoppingListItemTemplate = `<li><input type='checkbox' class='complete'> <span>${newShoppingListItemInput.value}</span> <button class='remove'>remove</button></li>`;
                
        shoppingListElement.innerHTML += newShoppingListItemTemplate;
    })


function addToList() {
  
  if (newShoppingListItemInput.value.trim() == "") {
      //nothing?
  } else {
  let newShoppingListItemTemplate = `<li><input type='checkbox' class='complete'> <span>${newShoppingListItemInput.value}</span> <button class='remove'>remove</button></li>`;
               
       shoppingListElement.innerHTML += newShoppingListItemTemplate;
       newShoppingListItemInput.value = "";
}
}

