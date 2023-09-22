document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const newItemInput = document.getElementById('new-item');
    const addItemButton = document.getElementById('add-button');
    const removeLastItemButton = document.getElementById('remove-button');
    const itemList = document.getElementById('item-list');
    const remainingItems = document.getElementById('remaining-items');
  
   //Count remaining item in list
    let listCount = 0;

    // Function to create a new list item
    function createNewItem(text) {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

        listItem.textContent = text;
        listItem.appendChild(deleteButton);

        // mark as completed and remove delete button
        listItem.addEventListener('click', function () {
            if (!listItem.classList.contains('completed')) {
                listItem.classList.add('completed');
                deleteButton.remove();
                listCount--;
                updateCounter();
            }
        });

        // Add a click event listener to delete item
        deleteButton.addEventListener('click', function () {
            if (!listItem.classList.contains('completed')) {
                listItem.remove();
                listCount--;
                updateCounter();
            }
        });

        return listItem;
    }

    // Function to add a new item
    function addItem() {
        const newItemText = newItemInput.value.trim();
        if (newItemText !== '') {
            const listItem = createNewItem(newItemText);
            itemList.appendChild(listItem);
            newItemInput.value = '';
            listCount++;
            updateCounter();
        } else {
            alert('Please enter a valid item.');
        }
    }

    // Function to remove the last item
    function removeLastItem() {

        if (listCount > 0) {
    
            
    
            const notCompletedItems = itemList.querySelectorAll('li:not(.completed)');
    
            if (notCompletedItems.length > 0) {
    
       
    
                const lastNotCompletedItem = notCompletedItems[notCompletedItems.length - 1];
    
                lastNotCompletedItem.remove();
    
                listCount--;
    
                updateCounter();
    
            } else {
    
                alert('All items are marked as completed or there are no items to remove.');
    
            }
    
        } else {
    
            alert('There are no items to remove.');
    
        }
    
    }


 
   
    // Function to update the remaining items counter
    function updateCounter() {
        remainingItems.textContent = listCount;
    }

  //Event Listener
    addItemButton.addEventListener('click', addItem);
    removeLastItemButton.addEventListener('click', removeLastItem);
});
