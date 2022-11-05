arr = [0,1,0,1,0,1,0,0,1,0,1,0,0,1,1]
let count = 0;
arr.forEach(function(value) 
    if(value==0){
        count++
    }
)
console.log(count);