function getMinimumUniqueSum(arr) {
    var result = [];
    var group = [];
    for (var j = 0; j < arr.length; j++) {
        for(var i = arr[j][0]; i <= arr[j][1]; i++) {
            if((Math.sqrt(i)) % 1 == 0) {
             group.push(Math.sqrt(i));
        }
     }
     if (group.length){
       result.push(group[0]);
     } else result.push(0);
        group = [];
    }
    return result;
}

getMinimumUniqueSum([[7, 11],[15, 20],[45, 88]])
