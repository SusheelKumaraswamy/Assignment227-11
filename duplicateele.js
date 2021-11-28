//7)Remove duplicates from an array


var arr1=[1,1,1,2,3,4,5,5,5,6,6];


function medians(arr1){
    var temp=0;
    
    
    var arr3=arr1;
    for(var i=0;i<arr3.length;i++){
        var count=0;
        for(var j=i+1;j<arr3.length;j++){
            if(arr3[i]==arr3[j]){
                count+=1
            }
        }
        arr3.splice(i,count);
    }
    
    return arr3;
}

console.log(medians(arr1));

