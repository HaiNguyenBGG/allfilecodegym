const n = 100;
const board = Array.from({ length: n }, () => Array(n).fill(0));
let currentPlayer = "x";
let gameOver = false;
function taobang() {
    const table = document.getElementById("bang");
    table.innerHTML = "";
    for (let i = 0; i < n; i++) {
        let row = table.insertRow();
        for (let j = 0; j < n; j++) {
            let cell = row.insertCell();
            cell.textContent = board[i][j] === 0 ? '' : board[i][j];
            cell.onclick = function () {
                if (board[i][j] === 0 && !gameOver) {
                    board[i][j] = currentPlayer;
                    taobang();
                    if (checkwin(i, j)) {
                        alert(`${currentPlayer} dành chiến thắng.`);
                        gameOver = true;
                    }
                    currentPlayer = currentPlayer === "x" ? "o" : "x";
                }
            }
        }
    }
}
function checkwin(x, y) {
    const directions = [
        { dx: 0, dy: 1 },
        { dx: 1, dy: 0 },
        { dx: 1, dy: 1 },
        { dx: 1, dy: -1 },
    ];
    for (let { dx, dy } of directions) {
        let count = 1;
        for (let i = 1; i < 5; i++) {
            const nx = x + dx * i;
            const ny = y + dy * i;
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === currentPlayer) {
                count++;
            } else {
                break;
            }
        }
        for (let i = 1; i < 5; i++) {
            const nx = x - dx * i;
            const ny = y - dy * i;
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === currentPlayer) {
                count++;
            } else {
                break;
            }
        }
        if (count >= 5) {
            return true;
        }
    }
    return false;
}
document.getElementById("btnchange").onclick = function () {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] = 0;
        }
    }
    gameOver = false;
    taobang();
    currentPlayer = "x";
}
taobang();
// document.getElementById("btnchange").onclick = function () {
//     let row1 = +prompt("Nhập chỉ số hàng:");
//     let cell1 = +prompt("Nhập chỉ số cột:");
//     let newValue = prompt("Nhập giá trị mới (x hoặc o)");
//     if (row1 >= 0 && row1 < n && cell1 >= 0 && cell1 < n && (newValue === "x") || (newValue === "o")) {
//         board[row1][cell1] = newValue;
//         taobang();
//     } else {
//         alert("Dữ liệu không hợp lệ vui lòng thử lại!");
//     }
// }
// taobang();