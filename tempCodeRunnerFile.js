let foo = 3;
let bar = 5;

for (let count = 1; count < 100; count++) {
    if ((count % foo == 0) && (count % bar == 0)) {
        console.log("foobar");
    } else if (count % foo == 0) {
        console.log("foo");
    } else if (count % bar == 0) {
        console.log("bar");
    } else {
        console.log(count);
    }
} 