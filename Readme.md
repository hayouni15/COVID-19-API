# COVID-19 API!

Hi! I introduce the COVID-19 API for developers. Use this API to collect data about the corona visrus since 1/22/20. 
URL1=https://covid-19-udates-api.herokuapp.com/?category=Deaths&country=All


# Data

The data are provided by Maryland-based Center for Systems Science and Engineering (CSSE) at  **Johns Hopkins University ** . 
The data provided are used in the famous corona virus dashboard : [https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6](https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)

The data is updated on a daily basis at 23 UTC.

## How to use 

Use your prefered technology to send a Http request to the server with two parameters : Coutry and Category. The URL Category parameter can be on of the following {Deaths, Recovered, Confirmed}. For country , to get data for a specific country= your_target_country else use country='All' if you want to get data for all countries in record
The follwing table summarizes the examples of use of the API:

|        Country\Category        |Deaths                |Recovered            | Confirmed           
|----------------|----------------------|---------------------|-----------------|
|All|URL1  |URL2  |URL3
|Country (exp: US)         |URL4 |  URL5 |URL6

URL1=https://covid-19-udates-api.herokuapp.com/?category=Deaths&country=All
URL2=https://covid-19-udates-api.herokuapp.com/?category=Recovered&country=All
URL3=https://covid-19-udates-api.herokuapp.com/?category=Confirmed&country=All
URL4=https://covid-19-udates-api.herokuapp.com/?category=Deaths&country=Canada
URL5=https://covid-19-udates-api.herokuapp.com/?category=Recovered&country=Canada
URL6=https://covid-19-udates-api.herokuapp.com/?category=Confirmed&country=Canada






## Example of use ( NodeJs)

```javascript
const  request = require('request');

request('http://localhost:3000/?category=Deaths&country=France', function (error, response, body) {

console.error('error:', error); // Print the error if one occurred

console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

console.log('body:', body); // Print the HTML for the Google homepage.

});
```



## Response
```javascript
[{"Province/State": "","Country/Region": "Germany","Lat": "51","Long": "9","1/22/20": "0","1/23/20": "0","1/24/20": "0","1/25/20": "0","1/26/20": "0","1/27/20": "1","1/28/20": "4","1/29/20": "4","1/30/20": "4","1/31/20": "5","2/1/20": "8","2/2/20": "10","2/3/20": "12","2/4/20": "12","2/5/20": "12","2/6/20": "12","2/7/20": "13","2/8/20": "13","2/9/20": "14","2/10/20": "14","2/11/20": "16","2/12/20": "16","2/13/20": "16","2/14/20": "16","2/15/20": "16","2/16/20": "16","2/17/20": "16","2/18/20": "16","2/19/20": "16","2/20/20": "16","2/21/20": "16","2/22/20": "16","2/23/20": "16","2/24/20": "16","2/25/20": "17","2/26/20": "27","2/27/20": "46","2/28/20": "48","2/29/20": "79","3/1/20": "130","3/2/20": "159","3/3/20": "196","3/4/20": "262","3/5/20": "482","3/6/20": "670","3/7/20": "799","3/8/20": "1040","3/9/20": "1176","3/10/20": "1457","3/11/20": "1908","3/12/20": "2078","3/13/20": "3675","3/14/20": "4585","3/15/20": "5795","3/16/20": "7272","3/17/20": "9257"}]

});
```


## Contact

Contact me on my website if you have any questions : [http://hayouni.com/](http://hayouni.com/)
