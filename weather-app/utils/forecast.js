const request =  require('request')


const forecast = (x,y, callback )=> {
    const url = 'https://api.darksky.net/forecast/18c9fed0acff8ae6fd162ad43a718bf7/'+ x +','+ y 
   // console.log(url)

    request({url: url, json:true}, (error, response)=>{
        if (error){
            callback('unable to connect to weather service!', undefined)
        }else if (response.body.error) {
            callback('unable to find location', undefined)

        }else{
            const rainProbability = response.body.currently.precipProbability
            const degreesCurrent = response.body.currently.temperature
            const dailySummary = response.body.daily.data[0].summary
            callback(undefined, dailySummary + ' It is currently ' + degreesCurrent +' degrees out. There is a ' + rainProbability + '% chance of rain')
        }

    })
}

module.exports = forecast