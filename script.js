const itemInput = document.querySelector("#item-input");
const itemForm = document.querySelector("#item-form");
const addBtn = document.querySelector(".btn");
const itemList = document.querySelector("#item-list");
const filterInput = document.querySelector("#filter");

const displayShoppingItems = () => {
	const shoppingItems = getItemsFromStorage();
	if (shoppingItems.length) {
		shoppingItems.forEach((item) => {
			addItemToDOM(item);
		});
	}
	resetUI();
};

const getItemsFromStorage = () => {
	let itemsFromStorage;
	if (!localStorage.getItem("items")) {
		itemsFromStorage = [];
	} else {
		itemsFromStorage = JSON.parse(localStorage.getItem("items"));
	}

	return itemsFromStorage;
};

const addItemSubmitHandler = (e) => {
	e.preventDefault();

	const itemValue = itemInput.value;
	if (!itemValue) {
		alert("Please fill the input before adding items");
		return;
	}
	addItemToDOM(itemValue);
	addItemToStorage(itemValue);

	// Reset the item input
	itemInput.value = "";
};

const addItemToDOM = (item) => {
	const li = document.createElement("li");
	// li.textContent = itemValue;
	li.appendChild(document.createTextNode(item));
	const deleteButton = createButton("remove-item btn-link text-red");
	li.appendChild(deleteButton);
	itemList.appendChild(li);

	resetUI();
};

const addItemToStorage = (item) => {
	const itemsFromStorage = getItemsFromStorage();
	itemsFromStorage.push(item);
	localStorage.setItem("items", JSON.stringify(itemsFromStorage));
};

const createButton = (classes) => {
	button = document.createElement("button");
	button.className = classes;

	const icon = createIcon("fa-solid fa-xmark");
	button.appendChild(icon);

	return button;
};

const createIcon = (iconClasses) => {
	const icon = document.createElement("i");
	icon.className = iconClasses;
	return icon;
};

const resetUI = () => {
	const listItems = document.querySelectorAll("#item-list li");
	if (!listItems?.length) {
		filterInput.style.display = "none";
	} else {
		filterInput.style.display = "block";
	}
};

itemForm.addEventListener("submit", addItemSubmitHandler);
document.addEventListener("DOMContentLoaded", displayShoppingItems);
