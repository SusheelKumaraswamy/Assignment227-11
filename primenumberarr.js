//primenumber

var num=[2,3,13,12,14,17];

function prime(num){

var primenum=[];

var prime=true;

for(var j=0;j<num.length;j++){
    if(num[j]==1){
    console.log("neither prime nor composite")
    }
    else if(num[j]==2){
            primenum.push(num[j]);
        }
    else
    {
        
        for(var i=2;i<num[j];i++){
            if(num[j]%i==0){
                prime=true;
                break;
                }
            else{
                //console.log("prime");
                prime=false;
            }
            
        }
}
if(prime==false){
    primenum.push(num[j]);
}



}
return primenum;
}

console.log(prime(num));
