// Find all possible move inside chessboard with the given position
function possibleMoves(pos) {
  const rules = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];
  const moves = [];
  rules.forEach((step) => {
    const x = pos[0] + step[0];
    const y = pos[1] + step[1];
    if (0 <= x && x <= 7 && 0 <= y && y <= 7) moves.push([x, y]);
  });
  return moves;
}

// Create a 2D array filled with 'false' value representing chessboard filled with 'visited' mark
function initializeVisited() {
  const chessBoard = [];
  for (let i = 0; i < 8; i++) {
    chessBoard[i] = [];
    for (let j = 0; j < 8; j++) {
      chessBoard[i][j] = false;
    }
  }
  return chessBoard;
}

// Solution
function knightMoves(startPos, endPos) {
  // Initialize queue and visited (array)
  const queue = [[startPos]];
  const visited = initializeVisited();

  // Loop the queue until empty
  while (queue.length) {
    const path = queue.shift();
    const pos = path[path.length - 1];

    // Mark current position visited
    visited[pos[0]][pos[1]] = true;

    // Return path when the destination found
    if (JSON.stringify(pos) == JSON.stringify(endPos)) return path;

    // Enqueue all possible moves (filter the visited one)
    const moves = possibleMoves(pos);
    moves.forEach((move) => {
      if (!visited[move[0]][move[1]]) queue.push([...path, move]);
    });
  }
}

// Test
const start = [0, 0];
const destination = [7, 7];
const shortestPath = knightMoves([3, 3], [4, 3]);
console.log(shortestPath);
