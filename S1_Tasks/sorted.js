function is_sorted(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(is_sorted([1, 2, 3, 4])); 
console.log(is_sorted([2, 4, 1, 3])); 