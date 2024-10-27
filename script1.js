// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #
function displayTriangle() {
    const maxRows = 4; // To display a triangle to the console with max rows set to 4.
    for (let i = 1; i <= maxRows; i++) {
      console.log('#'.repeat(i));
    } // Additions i until it's less than or equal to maxRows, then repeats "#" 4 times (represented by "i")
    for (let i = maxRows - 1; i >= 1; i--) {
      console.log('#'.repeat(i));
    }
} // Similar to previous set of commands, but it is descending the amount of "#" outputted to each row of the console.
displayTriangle(); // Displays the hashtag triangle shape to the console.