// Generate Random Hex Color Values


// Solution
function color() {
    return '#' + Math.random().toString(16).slice(3, 9);
}

console.log(color());
