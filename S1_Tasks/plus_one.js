function plus_one(array) {
    let s = array.join("");
    let n = Number(s) + 1;
    let s2 = String(n)
    let arr = s2.split("").map(Number);
    console.log(arr);
}

plus_one([1,2,3]);
plus_one([1,1,9]);
