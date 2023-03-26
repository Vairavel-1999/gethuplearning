//XML-HTTP request:they are used to interact with the servers via API
//4 Steps:

//Step 01:creating a XHR object...
//server gives the response as an object
//Below is the XHR object
var request = new XMLHttpRequest();
//Step 02:opening a request
//it consist of 2 parameters
//1st parameter:HTTP METHOD CALLED :GET
//2nd parameter:API
request.open("GET", "https://restcountries.com/v2/all");
//Step 03:sending the request
//i'm kickstarting the request
request.send();
//Step  04:once the data successfully loaded  from the server
//status code 200:
//use onload event
//function helps to perform some specific task
//data coming from the server is of type Jsonstring
//so to convert the data from string to object
//we need JSON.parse()
request.onload = function () {
    var result = JSON.parse(request.response);
    console.log(result);

    //1.Print all the 250 countries names in the console
    //2.print the URL of the Countries Flag in the console
    //3.Print all the country name,Capital in the console
    for (var i = 0; i < result.length; i++) {
        console.log(result[i].capital);
        console.log(result[i].nativeName);
    }
}
