//6)Return median of two sorted arrays of same size IIFE


var arr1=[1,2,3,4];
var arr2=[4,6,7,8];

function medians(arr1,arr2){
    var temp=0;
    
    var arr3=arr1.concat(arr2)
    
    for(var i=0;i<arr3.length;i++){
        for(var j=i+1;j<arr3.length;j++){
            if(arr3[i]>arr3[j]){
                temp=+arr3[i];
                arr3[i]=+arr3[j];
                arr3[j]=+temp;
            }
        }
    }
    
    var median=arr3.length/2;
    
    var medianans=(arr3[median]+arr3[median-1])/2;
    
    return medianans;
}

console.log(medians(arr1,arr2));

//Anonymous Function
//6)Return median of two sorted arrays of same size IIFE


var arr1=[1,2,3,4];
var arr2=[4,6,7,8];

var meridian=function(arr1,arr2){
    var temp=0;
    
    var arr3=arr1.concat(arr2)
    
    for(var i=0;i<arr3.length;i++){
        for(var j=i+1;j<arr3.length;j++){
            if(arr3[i]>arr3[j]){
                temp=+arr3[i];
                arr3[i]=+arr3[j];
                arr3[j]=+temp;
            }
        }
    }
    
    var median=arr3.length/2;
    
    var medianans=(arr3[median]+arr3[median-1])/2;
    
    return medianans;
}

console.log(meridian(arr1,arr2));

//Arrow Function
//6)Return median of two sorted arrays of same size IIFE


var arr1=[1,2,3,4];
var arr2=[4,6,7,8];

var meridian=(arr1,arr2)=>{
    var temp=0;
    
    var arr3=arr1.concat(arr2)
    
    for(var i=0;i<arr3.length;i++){
        for(var j=i+1;j<arr3.length;j++){
            if(arr3[i]>arr3[j]){
                temp=+arr3[i];
                arr3[i]=+arr3[j];
                arr3[j]=+temp;
            }
        }
    }
    
    var median=arr3.length/2;
    
    var medianans=(arr3[median]+arr3[median-1])/2;
    
    return medianans;
}

console.log(meridian(arr1,arr2));

