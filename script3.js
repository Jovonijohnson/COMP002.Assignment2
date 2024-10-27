// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
function Grid() {
    const size = 8; // Example for displaying an 8x8 grid
  
    for (let row = 0; row < size; row++) {
      let rowStr = ''; // For loop that iterates over each row of the grid, going up to a value of 7 (from 0 since there are 8 values)
  
      for (let col = 0; col < size; col++) {
        if ((row + col) % 2 === 0) {
          rowStr += '#';
        } else {
          rowStr += ' ';
        } // For loop that traverses each row of the grid, counting from 0 to 7 (covering 8 values in total).
      }
      
      console.log(rowStr);
    } // Associates "rowStr" to console
}
Grid(); // Displays patterned grid to the console// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #