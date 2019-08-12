const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]
//console.log(location)
geocode(location, (error, {lattitude, longitude, location})=>{
    if (error){
        return console.log(error)
    }else if (!location){
        return console.log("Error, no location provided. Please provide and address")
    }
    // console.log('Error', error)
    // console.log('Data', data)
    forecast(lattitude, longitude, (error, forecastData) => {
        if (error){
            return console.log(error)
        }
        console.log(location)
        console.log(forecastData)
      })
})