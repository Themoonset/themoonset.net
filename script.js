console.log(animalPadded(3) + " Cows");
console.log(animalPadded(6) + " chickens");
console.log(animalPadded(14) + " peegs");

function animalPadded(num) {
    let animalString = String(num);
    while (animalString.length < 3) {
        animalString = "0" + animalString;
    }
    return animalString;
}