//palindrome in array of interger or string Immediately Invoked Function Expression - IIFE

var nam=[121,"malayalam","hello"];
var arr3=[];

function stripal(nam){

for(var i=0;i<nam.length;i++){
    
    
    if(typeof(nam[i])==="number"){
        let rem;
        let num1=nam[i];
        let str="";
        
        while(num1!=0){
            rem=num1%10;
            str+=rem;
            num1=Math.floor(num1/10);
        }
        
        if(nam[i]==+str){
            arr3.push(nam[i]);
        }
        
    }
    
    else{
        var a=nam[i].split("").reverse();
        var b=((a.join("")));
        
        if(nam[i]==b){
            arr3.push(nam[i]);
        }
    }


}

return arr3;
}


console.log(stripal(nam));

//Anonymous Function
//palindrome in array of interger or string


var arr3=[];

var palindrome=function(nam){

for(var i=0;i<nam.length;i++){
    
    
    if(typeof(nam[i])==="number"){
        let rem;
        let num1=nam[i];
        let str="";
        
        while(num1!=0){
            rem=num1%10;
            str+=rem;
            num1=Math.floor(num1/10);
        }
        
        if(nam[i]==+str){
            arr3.push(nam[i]);
        }
        
    }
    
    else{
        var a=nam[i].split("").reverse();
        var b=((a.join("")));
        
        if(nam[i]==b){
            arr3.push(nam[i]);
        }
    }


}

return arr3;
}
var nam=[121,"malayalam","hello",132,1331];

console.log(palindrome(nam));

//arrow function
//palindrome in array of interger or string


var arr3=[];

var palindrome=(nam)=>{

for(var i=0;i<nam.length;i++){
    
    
    if(typeof(nam[i])==="number"){
        let rem;
        let num1=nam[i];
        let str="";
        
        while(num1!=0){
            rem=num1%10;
            str+=rem;
            num1=Math.floor(num1/10);
        }
        
        if(nam[i]==+str){
            arr3.push(nam[i]);
        }
        
    }
    
    else{
        var a=nam[i].split("").reverse();
        var b=((a.join("")));
        
        if(nam[i]==b){
            arr3.push(nam[i]);
        }
    }


}

return arr3;
}
var nam=[121,"malayalam","hello",132,1331];

console.log(palindrome(nam));

