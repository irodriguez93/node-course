const request = require('request')


const url = 'https://api.darksky.net/forecast/18c9fed0acff8ae6fd162ad43a718bf7/37.8267,-122.4233'

request({url: url, json: true}, (error, response)=> {
    //const data = response.body
    const rainProbability = response.body.currently.precipProbability
    const degreesCurrent = response.body.currently.temperature
    const dailySummary = response.body.daily.data[0].summary
    console.log(dailySummary + ' It is currently ' + degreesCurrent +' degrees out. There is a ' + rainProbability + '% chance of rain')
})

//Geocoding

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?'
const keyGeoAPI = 'access_token=pk.eyJ1IjoiaXJvZHJpZ3VlejkzIiwiYSI6ImNqeXcwcDAybTBjNWozaGxnNTQwcG16eGUifQ.v4fED-g0CJb_l3TKS-YUXg'
const gurl=geocodeURL+keyGeoAPI

request({url: gurl, json: true}, (error, response)=>{
    console.log(gurl)
    console.log('lattitude is: ' + response.body.features[0].center[1])
    debugger
    console.log('longitude is: ' + response.body.features[0].center[0])
})