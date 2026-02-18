// Spin War Game Logic

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Player objects
const player1 = { x: 50, y: canvas.height / 2, width: 20, height: 20, color: 'blue', speed: 5, score: 0 };
const player2 = { x: canvas.width - 70, y: canvas.height / 2, width: 20, height: 20, color: 'red', speed: 5, score: 0 };

// Control mappings
const controls = {
    player1: {
        up: 'ArrowUp',
        down: 'ArrowDown',
        left: 'ArrowLeft',
        right: 'ArrowRight'
    },
    player2: {
        up: 'w',
        down: 's',
        left: 'a',
        right: 'd'
    }
};

// Game state
let isGameRunning = true;

// Handle keyboard inputs
function handleKeyDown(event) {
    switch (event.key) {
        case controls.player1.up:
            player1.y -= player1.speed;
            break;
        case controls.player1.down:
            player1.y += player1.speed;
            break;
        case controls.player2.up:
            player2.y -= player2.speed;
            break;
        case controls.player2.down:
            player2.y += player2.speed;
            break;
    }
}

// Collision detection
function detectCollision() {
    if (player1.x < player2.x + player2.width &&
        player1.x + player1.width > player2.x &&
        player1.y < player2.y + player2.height &&
        player1.y + player1.height > player2.y) {
        // Collision detected
        player1.score += 1;
        player2.score += 1;
        resetPlayers();
    }
}

// Reset player positions after collision
function resetPlayers() {
    player1.x = 50;
    player1.y = canvas.height / 2;
    player2.x = canvas.width - 70;
    player2.y = canvas.height / 2;
}

// Drawing game elements
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = player1.color;
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height);
    ctx.fillStyle = player2.color;
    ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`Player 1 Score: ${player1.score}`, 10, 20);
    ctx.fillText(`Player 2 Score: ${player2.score}`, canvas.width - 160, 20);
}

// Game loop
function gameLoop() {
    if (isGameRunning) {
        detectCollision();
        draw();
        requestAnimationFrame(gameLoop);
    }
}

// Start the game
window.addEventListener('keydown', handleKeyDown);
requestAnimationFrame(gameLoop);