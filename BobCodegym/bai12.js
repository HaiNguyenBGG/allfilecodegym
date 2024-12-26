const listStudent = {
    HV01: {
        name: "Nguyễn Văn A",
        class: "HN101",
        email: "nguyenvana@gmail.com",
        date: "01/01/2002",
        module: 2
    },
    HV02: {
        name: "Nguyễn Văn B",
        class: "HN102",
        email: "nguyenvanb@gmail.com",
        date: "02/02/2002",
        module: 1
    }
}
function renderList() {
    const table = document.getElementById("viewStudent");
    table.innerHTML = '';
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
    <th>Mã học viên</th>
    <th>Tên</th>
    <th>Lớp</th>
    <th>Email</th>
    <th>Ngày sinh</th>
    <th>Module</th>
     `;
    table.appendChild(headerRow);
    for (const key in listStudent) {
        const student = listStudent[key];
        const row = document.createElement("tr");
        row.innerHTML = `
       <td>${key}</td>
       <td>${student.name}</td>
       <td>${student.class}</td>
       <td>${student.email}</td>
       <td>${student.date}</td>
       <td>${student.module}</td>
        `;
        table.appendChild(row);
    }
}
//Add Student
function addStudent() {
    document.getElementById('addStudent').addEventListener('click', () => {
        const id = prompt("Nhập mã sinh viên:");
        if (id && !listStudent[id]) {
            const name = prompt("Nhập tên:");
            if (name.length > 50) {
                alert("Tên học viên vượt quá 50 ký tự");
            } else {
                const className = prompt("Nhập lớp:");
                const email = prompt("Nhập email:");
                const date = prompt("Nhập ngày sinh (dd/mm/yyyy):");
                const module = prompt("Nhập Module đang học: ");
                listStudent[id] = { name, class: className, email, date, module };
                renderList();
            }
        } else {
            alert("Mã sinh viên đã tồn tại hoặc không hợp lệ!");
        }
    });
}
//Edit Student
function editStudent() {
    document.getElementById('editStudent').addEventListener('click', () => {
        const id = prompt("Nhập mã sinh viên cần sửa:");
        if (id && listStudent[id]) {
            const name = prompt("Nhập tên mới:", listStudent[id].name);
            const className = prompt("Nhập lớp mới:", listStudent[id].class);
            const email = prompt("Nhập email mới:", listStudent[id].email);
            const date = prompt("Nhập ngày sinh mới (dd/mm/yyyy):", listStudent[id].date);
            const module = prompt("Nhập module đang học mới: ", listStudent[id].module);
            listStudent[id] = { name, class: className, email, date, module };
            renderList();
            alert("Sửa sinh viên thành công!");
        } else {
            alert("Không tìm thấy mã sinh viên!");
        }
    });
}
//Delete Student
function deleteStudent() {
    document.getElementById('delStudent').addEventListener('click', () => {
        const id = prompt("Nhập mã sinh viên cần xóa:").trim();
        if (id && listStudent[id]) {
            const isConfirmed = confirm(`Bạn có chắc chắn muốn xóa sinh viên với mã: ${id}?`);
            if (isConfirmed) {
                delete listStudent[id];
                renderList();
                alert("Xóa sinh viên thành công!");
            } else {
                alert("Hành động xóa đã bị hủy.");
            }
        } else {
            alert("Không tìm thấy mã sinh viên!");
        }
    });
}
renderList();
