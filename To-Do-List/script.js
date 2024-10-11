var input = document.querySelector(".entered-list");
var addBtn = document.querySelector(".add-list");
var tasks = document.querySelector(".list");

input.addEventListener("keyup", () => {
    if (input.value.trim() != 0) {
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
});

// Add new item to the list
addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p>${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-xmark"></i>
        </div>
        `;
        tasks.appendChild(newItem);
        input.value = '';
        addBtn.classList.remove("active");
    } else {
        alert("Please enter a task");
    }
});

// Delete items from list
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove();
    }
});

// Add task using Enter key
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && addBtn.classList.contains('active')) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p>${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-xmark"></i>
        </div>
        `;
        tasks.appendChild(newItem);
        input.value = '';
        addBtn.classList.remove("active");
    }
});