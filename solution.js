function queensAttack(n, k, r_q, c_q, obstacles) {
    let queenLinhaArray = n-r_q;
    let queenColunaArray= c_q-1;
    let matrix = Array(n).fill().map(() => Array(n).fill(0));
    let maxMovs = 0;
    
    for (let i =0; i<k; i++){
        let obstacleRow = n-(obstacles[0][0]);
        let obstacleCol = (obstacles[0][1])-1;
        [matrix[obstacleRow][obstacleCol]] = ['X']        
        obstacles.shift();
    }
    
   [matrix[queenLinhaArray][queenColunaArray]] = ['Q'];

   let directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, 1], [-1, 1], [1, -1]];
   for (let i = 0; i < directions.length; i++) {
       let row = queenLinhaArray  + directions[i][0];
       let col = queenColunaArray + directions[i][1];
       while (row >= 0 && row < n && col >= 0 && col < n) {
           if (matrix[row][col] === 'X') break;
           maxMovs++;
           row += directions[i][0];
           col += directions[i][1];
       }
   }

   return [maxMovs, matrix]
}
