const itemInput = document.querySelector("#item-input");
const itemForm = document.querySelector("#item-form");
const addBtn = document.querySelector(".btn");
const itemList = document.querySelector("#item-list");

const addItem = (e) => {
	e.preventDefault();

	const itemValue = itemInput.value;
	if (!itemValue) {
		alert("Please fill the input before adding items");
		return;
	}

	// Create a list item

	const li = document.createElement("li");
	// li.textContent = itemValue;
	li.appendChild(document.createTextNode(itemValue));

	// Create delete button
	const deleteButton = createButton("remove-item btn-link text-red");
	li.appendChild(deleteButton);

	// append to the list
	itemList.appendChild(li);

	// Reset the item input
	itemInput.value = "";
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

itemForm.addEventListener("submit", addItem);
