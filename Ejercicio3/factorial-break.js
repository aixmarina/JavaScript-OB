let num = 10;
var result = num;

while (true) {
    num--;
    result *= num;
    if (num === 1) {
        break;
    }
}

console.log(result);