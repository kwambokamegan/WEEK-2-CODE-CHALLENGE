addEventListener("DOMContentLoaded", () => {
    console.log("HELLO WORLD")

    const input = document.getElementById("itemInput");
    const addButton = document.getElementById("addButton");
    const clearButton = document.getElementById("clearButton");
    const list =document.getElementById("shoppingList");

    //FUNCTIONS

    let items = JSON.parse(localStorage.getItem(list)) || [];

    const saveAndRender = () => {
        localStorage.setItem("list", JSON.stringify(items));
        renderList();
    };

    const renderList = () => {
        list.innerHTML = items.map((item, index) => 
           `<li class= "${items.purchased ? "checked" : "" } ">
          <input type ="checkbox" ${item.purchased ? "checked" : ""} onChange = "togglePurchased(${index})"">
          <label contentEditable="true" onblur= "updateItemName(${index}, this.textContent)" > ${list.name}</label>
          list.name
          </li>;`

        ).join('');
        
    };
    window.updateListName = (index, newName) => {
        list[index].name = newName;
        saveAndRender();
    };

    window.togglePurchased = (index) => {
        list[index].purchased = !list[index].purchased;
        saveAndRender();
    };

    const addItem = () => { 
        const itemName = itemInput.value.trim();
        if (itemName) {
            items.push({name: itemName, purchased: false});
            itemInput.value = '';
            saveAndRender();
        }
    };
    const clearList = () => {
        list= [];
        saveAndRender();
    };
    
    addButton.addEventListener('click', addItem);
    clearButton.addEventListener('click', clearList);
    itemInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') addItem ();
    });

    renderList();
});