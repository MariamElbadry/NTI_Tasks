function Remove_Duplicates(arr){
    new_arr = [];
    new_arr.push(arr[0]);
    for(let i=1; i<arr.length; i++){
        if(arr[i]!=arr[i-1]) new_arr.push(arr[i]);
    }
    console.log(new_arr);
}

Remove_Duplicates([1,1,1,1,2,2,3,4,4,5]);