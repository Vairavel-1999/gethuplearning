
var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
var result=JSON.parse(request.response);
console.log(result);


for(var i=0;i<result.length;i++){
    
        console.log(result[i].capital);
        console.log(result[i].region);
        console.log(result[i].sub-region);
        console.log(result[i].populations);
}
}
