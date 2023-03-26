
var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
var result=JSON.parse(request.response);
//console.log(result);
//var popu=result.filter((ele)=>ele.population<100000);
var result=result.filter((ele)=>ele.region=="Europe").map(el=>el.population);

console.log(result);

}