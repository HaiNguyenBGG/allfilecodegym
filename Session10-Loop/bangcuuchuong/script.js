window.onload = function () {
    const table = document.getElementById('bangcuuchuong');
    let tableContent = '';

    for (let i = 1; i <= 9; i++) {
        tableContent += '<tr>';
        for (let j = 1; j <= 9; j++) {
            tableContent += `<td>${i} x ${j} = ${i * j}</td>`;
        }
        tableContent += '</tr>';
    }
    table.innerHTML = tableContent;
};
