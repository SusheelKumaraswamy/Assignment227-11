//rotate array k time 

var arr=[1,2,3,4,5,12,12,1,9];

var n=3;


function rev(arr,n){
    var temp=0;
    var loop=Math.floor(arr.length/2);
    var j=0;
    while(j!=n)
    {
        for(var i=0;i<loop;i++){
            temp=+arr[i];
            arr[i]=+arr[arr.length-1-i];
            arr[arr.length-1-i]=+temp;
            }
            j++;
    }
return arr;
}

console.log(rev(arr,n));
