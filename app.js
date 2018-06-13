/**
 * My Shopping List
 */

const newShoppingListItemInput = document.querySelector('#shoppingListItem'),
    addToShoppingListButton = document.querySelector('#addToShoppingList'),
    shoppingListElement = document.querySelector('#shoppingList');

    shoppingListElement.addEventListener('click', (event) => {
        let target = event.target;

        if (target.className === 'remove') {
            target.parentElement.remove();
        }
    });

    addToShoppingListButton.addEventListener('click', (event) => {        
        let newShoppingListItemTemplate = `<li><input type='checkbox' class='complete'> <span>${newShoppingListItemInput.value}</span> <button class='remove'>remove</button></li>`;
                
        shoppingListElement.innerHTML += newShoppingListItemTemplate;
    })


