const chessboardSpace = "# ";
let chessboardSpacing = 20;
let chessboard = chessboardSpacing;

for (let chessboard = chessboardSpacing; chessboard > 0; chessboard--){
    if (chessboard % 2 == 0) {
        console.log(chessboardSpace.repeat(chessboardSpacing));
    } else console.log(" " + chessboardSpace.repeat(chessboardSpacing)); 
}