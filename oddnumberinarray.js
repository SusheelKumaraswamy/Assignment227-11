//Print odd numbers in an array
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
