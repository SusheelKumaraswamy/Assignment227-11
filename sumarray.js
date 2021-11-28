//Sum of all numbers in an array
arr3=[];
function sum(arr){
    let sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=+arr[i];
            
        }
       return sum;
    }

console.log(sum([1,2,3,4,5,6,7]));
