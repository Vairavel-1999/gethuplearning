// print odd numbers in an array?
var arr=[12,13,14,15,16];
var a=[];
function odd(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            a.push(arr[i]);
        }
    }
return a;
    
}
console.log(odd(arr));

//convert all the Strings to title caps in a string array ?

function name(n){
    var str=n.toLowerCase().split(" ");
    for(var i=0;i< str.length;i++){
        str[i]=str[i][0].toUpperCase()+str[i].slice(1);
    }

return str.join(' ');
}
name("the king of bruce lee");

//sum of all number in array?

function summ(...res){
    var sum=0;
    for(var i=0;i<res.length;i++){
      sum=sum+res[i];
      }
      return sum;
}
console.log(summ(1,2));

// return all the prime number in an array?
