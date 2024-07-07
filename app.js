document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("itemInput");
    const addButton = document.getElementById("addButton");
    const clearButton = document.getElementById("clearButton");
    const list = document.getElementById("shoppingList");

    // Initialize items array from localStorage or an empty array if none exists
    let items = JSON.parse(localStorage.getItem('list')) || [];

    const saveItemsToLocalStorage = () => {
        localStorage.setItem("list", JSON.stringify(items));
    };

    const renderList = () => {
        list.innerHTML = ''; // Clear existing list in the DOM
        items.forEach((item, index) => {
            const li = createListItem(item, index);
            list.appendChild(li);
        });
    };

    const createListItem = (item, index) => {
        const li = document.createElement('li');
        li.dataset.index = index;
        li.innerHTML = `
            <input type="checkbox" ${item.purchased ? "checked" : ""} class="toggle-purchased">
            <label contenteditable="true" class="edit-item">${item.name}</label>
            <button class="delete-item">Delete</button>
        `;

        li.querySelector('.toggle-purchased').addEventListener('change', (e) => {
            items[index].purchased = e.target.checked;
            saveItemsToLocalStorage();
        });

        li.querySelector('.delete-item').addEventListener('click', () => {
            items.splice(index, 1);
            saveItemsToLocalStorage();
            renderList(); // Re-render the list after deletion
        });

        li.querySelector('.edit-item').addEventListener('blur', (e) => {
            items[index].name = e.target.textContent.trim();
            saveItemsToLocalStorage();
        });

        return li;
    };

    const addItem = () => {
        const itemName = input.value.trim();
        if (itemName) {
            // Check if the item already exists in items array
            const existingItemIndex = items.findIndex(item => item.name === itemName);
            if (existingItemIndex === -1) {
                // Add new item to items array
                items.push({ name: itemName, purchased: false });
                saveItemsToLocalStorage();
                renderList(); // Render the updated list
            } else {
                alert('You have already added this item');
                renderList(); // Render the current list after alert dismissal
            }
            input.value = ''; // Clear input field after adding or attempting to add an item
        }
    };

    const clearList = () => {
        items = []; // Clear items array in memory
        localStorage.removeItem("list"); // Clear localStorage
        renderList(); // Clear the list from the DOM
    };

    addButton.addEventListener('click', addItem);

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addItem();
        }
    });

    clearButton.addEventListener('click', clearList);

    // Initial render of items from localStorage
    renderList();
});