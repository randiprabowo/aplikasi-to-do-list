// Menampilkan waktu saat ini
function displayCurrentTime() {
    const timeElement = document.getElementById("currentTime");
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    timeElement.textContent = now.toLocaleDateString('id-ID', options);
}

displayCurrentTime();

// Tambahkan event listener untuk tombol tambah tugas
document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    const priorityLevel = document.getElementById("priorityLevel").value;

    if (taskInput === "") {
        alert("Silakan masukkan tugas!");
        return;
    }

    const todoItems = document.getElementById("todoItems");
    const li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span>${taskInput} [${priorityLevel}]</span>
        <span>${new Date().toLocaleDateString('id-ID')}</span>
    `;

    todoItems.appendChild(li);
    document.getElementById("taskInput").value = "";  // Kosongkan kolom input

    // Tambahkan event listener untuk checkbox
    li.querySelector(".task-checkbox").addEventListener("change", function() {
        if (this.checked) {
            li.classList.add("done");
            moveTaskToDone(li);
        } else {
            li.classList.remove("done");
        }
    });
}

function moveTaskToDone(taskElement) {
    const doneItems = document.getElementById("doneItems");
    taskElement.remove();
    doneItems.appendChild(taskElement);
}

// Hapus semua to-do list
document.getElementById("deleteAllBtn").addEventListener("click", function() {
    const todoItems = document.getElementById("todoItems");
    const doneItems = document.getElementById("doneItems");

    todoItems.innerHTML = "";
    doneItems.innerHTML = "";
});

// Fungsi untuk setting user
function setUserProfile(name, job) {
    document.getElementById("userName").textContent = name;
    document.getElementById("userJob").textContent = job;
}

// Contoh pemanggilan fungsi setting user profile
setUserProfile("Randi", "Software Engineer");
