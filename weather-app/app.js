const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Boston', (error, data)=>{
    if (error){
        return console.log(error)
    }
    // console.log('Error', error)
    // console.log('Data', data)
    forecast(data.lattitude,data.longitude, (error, forecastData) => {
        if (error){
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
      })
})