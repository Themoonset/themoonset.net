console.log(countChar("Bofadeez", "B"));
// - > 2
console.log(countChar("kakkerlak", "k"));
// - > 4

function countChar(string, letter) {
    let letterCount = 0;
    for (let count = 0; count < string.length; count++) {
        if (string[count] == letter) {
            letterCount++;
        } 
    } return letterCount;
}