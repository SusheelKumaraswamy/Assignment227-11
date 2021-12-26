//Sum of all numbers in an array IIFE
arr3=[];
function sum(arr){
    let sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=+arr[i];
            
        }
       return sum;
    }

console.log(sum([1,2,3,4,5,6,7]));

//sum array anonymous function.
var sumarr=function(arr){
    let sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=+arr[i];
            
        }
       return sum;
    }

console.log(sumarr([1,2,3,4,5]));

//sum array arrow function
var sumarr=(arr)=>{
    let sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=+arr[i];
            
        }
       return sum;
    }

console.log(sumarr([1,2,3,4,5]));


    
