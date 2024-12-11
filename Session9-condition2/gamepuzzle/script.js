const images = [
    'url("cocambodia.jpg")',
    'url("colaos.jpg")',
    'url("cothailand.jpg")',
    'url("covietnam.jpg")',
];

const shuffledImages = [...images].sort(() => Math.random() - 0.5);

const puzzleContainer = document.getElementById('puzzle-container');
const correctOrder = [...shuffledImages];
let currentOrder = [...shuffledImages];

function createPuzzle() {
    puzzleContainer.innerHTML = '';
    currentOrder.forEach((image, index) => {
        const piece = document.createElement('div');
        piece.style.backgroundImage = image;
        piece.setAttribute('data-index', index);
        piece.addEventListener('click', () => handlePieceClick(index));
        puzzleContainer.appendChild(piece);
    });
}

function handlePieceClick(index) {
    const clickedPiece = currentOrder[index];
    const piece = document.querySelectorAll('#puzzle-container div')[index];

    const newImageIndex = (index + 1) % images.length;
    currentOrder[index] = images[newImageIndex];
    piece.style.backgroundImage = currentOrder[index];

    checkIfComplete();
}

function checkIfComplete() {
    if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
        document.getElementById('message').textContent = 'Bức tranh đã hoàn thành!';
    } else {
        document.getElementById('message').textContent = '';
    }
}
createPuzzle();