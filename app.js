document.addEventListener("DOMContentLoaded", () => {
    console.log("HELLO WORLD");

    const input = document.getElementById("itemInput");
    const addButton = document.getElementById("addButton");
    const clearButton = document.getElementById("clearButton");
    const list = document.getElementById("shoppingList");

    let items = JSON.parse(localStorage.getItem('list')) || [];

    const saveAndRender = () => {
        localStorage.setItem("list", JSON.stringify(items));
        renderList();
    };

    const renderList = () => {
        list.innerHTML = items.map((item, index) => `
            <li data-index="${index}" class="${item.purchased ? "checked" : ""}">
                <input type="checkbox" ${item.purchased ? "checked" : ""} class="toggle-purchased">
                <label contenteditable="true" class="edit-item">${item.name}</label>
                <button class="delete-item">Delete</button>
            </li>
        `).join('');
    };

    const addItem = () => {
        const itemName = input.value.trim();
        if (itemName) {
            items.push({ name: itemName, purchased: false });
            input.value = '';
            saveAndRender();
        }
    };

    const clearList = () => {
        items = [];
        saveAndRender();
    };

    list.addEventListener('change', (e) => {
        if (e.target.matches('.toggle-purchased')) {
            const index = e.target.closest('li').dataset.index;
            items[index].purchased = e.target.checked;
            saveAndRender();
        }
    });

    list.addEventListener('click', (e) => {
        if (e.target.matches('.delete-item')) {
            const index = e.target.closest('li').dataset.index;
            items.splice(index, 1);
            saveAndRender();
        }
    });

    list.addEventListener('blur', (e) => {
        if (e.target.matches('.edit-item')) {
            const index = e.target.closest('li').dataset.index;
            items[index].name = e.target.textContent.trim();
            saveAndRender();
        }
    }, true);

    addButton.addEventListener('click', addItem);
    clearButton.addEventListener('click', clearList);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') addItem();
    });

    renderList();
});