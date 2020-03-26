const request = require('request');
const fs = require('fs')
const csv = require('csvtojson')


const Get_all = (category, country, callback) => {
    switch (category.toUpperCase()) {
        case 'CONFIRMED':
            url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv'
            
            break;
        case 'DEATHS':
            url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv'
            break;
        case 'RECOVERED':
            url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv'
            break;
        default:
            break;
    }

    csv().fromStream(request.get(url))
        .subscribe().then((output) => {
            if (country.toUpperCase() === 'ALL') {
                jsonString = JSON.stringify(output)
                callback(jsonString)
            }else{
                output=output.filter((x)=>{
                    return x['Country/Region'].toUpperCase()=== country.toUpperCase()
                })
                jsonString = JSON.stringify(output)
                callback(jsonString)
            }
            
        })



}



module.exports = {
    Get_all: Get_all

}

