# WEEK-2-CODE-CHALLENGE

## Description

This challenge combines array iteration, DOM manipulation, and event handling to create an interactive shopping list application.

## Objective 

Develop a webpage with a shopping list. Users can add items to the list, mark items as purchased, and clear the list.

## System Requirements

1. Node 18+

2.A browser capable of running javascript eg:Apple safari, Mozilla Firefox, Microsort Edge

3.Text Editor capable of running Javascript 

4.RAM >=4GB


## Author

This program was written by Megan Kwamboka 

## Date

Sunday 6/7/2024

## Installation 
 
 1.Open your terminal and navigate to the folder of your choice

 2.Clone the reposiyory by using : 
   git clone git@github.com:kwambokamegan/WEEK-2-CODE-CHALLENGE.git

 3.Change the directory to the repo folder:
   cd WEEK-2-CODE-CHALLENGE

 4.Open it in Vs Code 
   code .
 
 CONGRATULATIONS FOR GETTING THIS FAR!!!!

## Live link
 You can find the webpage using the live link : 

  https://kwambokamegan.github.io/WEEK-2-CODE-CHALLENGE/

  ## Files 

  * index.html file - It contains the general structure of the web application

  * css/style.css - It is used for styling the web page

  *app.js - Handles the way the user interracts with the web pag: Marking items as purchased and adding them to the shopping list.


 ## HTML

The html structure  includes:

1. Header: Contains a title and a subtitle.

2.Input Form: Allows users to input new items and includes buttons for adding and clearing items. 

2.Shopping List: Displays the list of items added by the user.

3.Image: The image encourages the users to shop now.


## Elements
* Input Field: <input type="text" id="itemInput"> where users enter new items.

* Add Button: <button id="addButton">ADD</button> to add new items to the list.

* Clear Button: <button id="clearButton">CLEAR</button> to clear all items from the list.

* List: <ul id="shoppingList"></ul> where items are displayed as <li> elements.

### Usage

 1.Users can enter list items in the input field and click add to add them to the list

 2.Users can click clear to clear the shoppinh list


## JAVASCRIPT

 ### Local Storage
Items added to the shopping list are stored in `localStorage` to persist between sessions. If localStorage is empty or nonexistent, an empty array is used.

### Event Listeners

* Add Button: Adds a new item to the list when clicked or when Enter is pressed in the input field. 

* Clear Button: Clears all items from the list and localStorage.

 * Checkbox: Marks items as purchased when checked.

* Delete Button: Deletes items from the list.

### Rendering Items

* renderList(): Renders items from the items array to the `shoppingList` 


### Usage

1.Adding Items: Enter an item in the input field and click "ADD" or press Enter. The item will appear in the list.

2.Marking Purchased: Check the checkbox next to an item to mark it as purchased.

3.Editing: Click on the item name to edit it directly in place.
Deleting: Click the "Delete" button next to an item to remove it from the list.

4.Clearing List: Click "CLEAR" to remove all items from the list.



The readme provides the usage and functionality of the html and javascript structure of the wbe page.Details can be adjusted accordingly.










