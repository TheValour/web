var i;
var arr=[]
for (i = 0; i < 4; i++){
    // storing anonymous function
    arr[i] = function () { return i; }
}

console.log(arr[1]())
