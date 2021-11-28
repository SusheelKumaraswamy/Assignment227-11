//title caps

arr3=[];
function titleCase(arr){
    for(var i=0;i<arr.length;i++){
        arr3.push((arr[i].charAt(0).toUpperCase()+arr[i].
        substr(1).toLowerCase()));
            
        }
       return arr3;
    }

console.log(titleCase(["hello","hai"]).join(" "));
