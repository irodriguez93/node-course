const request = require('request')


const url = 'https://api.darksky.net/forecast/18c9fed0acff8ae6fd162ad43a718bf7/37.8267,43.2534'

// request({url: url, json: true}, (error, response)=> {
//     if (error){
//         console.log('unable to connect to weather service!')
//     }else if (response.body.error) {
//         console.log('unable to find location')

//     }else{
//         const rainProbability = response.body.currently.precipProbability
//         const degreesCurrent = response.body.currently.temperature
//         const dailySummary = response.body.daily.data[0].summary
//         console.log(dailySummary + ' It is currently ' + degreesCurrent +' degrees out. There is a ' + rainProbability + '% chance of rain')
//     }

// })

//Geocoding

// https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?
//access_token=pk.eyJ1IjoiaXJvZHJpZ3VlejkzIiwiYSI6ImNqeXcwcDAybTBjNWozaGxnNTQwcG16eGUifQ.v4fED-g0CJb_l3TKS-YUXg



const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?'
const keyGeoAPI = 'access_token=pk.eyJ1IjoiaXJvZHJpZ3VlejkzIiwiYSI6ImNqeXcwcDAybTBjNWozaGxnNTQwcG16eGUifQ.v4fED-g0CJb_l3TKS-YUXg'
const gurl=geocodeURL+keyGeoAPI

request({url: gurl, json: true}, (error, response)=>{

    if (error){
        console.log('Unable to connect to service!')
    } else if (response.body.message==='Not Authorized - Invalid Token') {
        console.log('Not Authorized - Invalid Token')

    }else if (response.body.features === undefined || response.body.features.length == 0){
        console.log('unable to find the correct location')
    }else{
        console.log('lattitude is: ' + response.body.features[0].center[1])
        debugger
        console.log('longitude is: ' + response.body.features[0].center[0])
     }
})