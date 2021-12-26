//Print odd numbers in an array Immediately Invoked Function Expression - IIFE
arr3=[];
function oddnumber(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]!=0 && arr[i]%2!=0){
            arr3.push(arr[i]);
            console.log(arr[i]);
            
        }
    }
    return arr3;
}

oddnumber([0,1,2,3,4]);
var arr3;

//Print odd numbers in an array Anonymus function.

var odd=function(arr){
    var arr3=[];
     for(var i=0;i<arr.length;i++){
        if(arr[i]!=0 && arr[i]%2!=0){
            arr3.push(arr[i]);
            
        }
    }
    return arr3;
}

console.log(odd([0,1,2,3,4]));

//Print odd numbers in an array arrow function

var arr1=[1,2,3,4,5];

var odd= (arr)=>{
    var arr3=[];
     for(var i=0;i<arr.length;i++){
        if(arr[i]!=0 && arr[i]%2!=0){
            arr3.push(arr[i]);
            
        }
    }
    return arr3;
}


console.log(odd(arr1))





