
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



// const geocode = (address, callback) => {
//     const URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaXJvZHJpZ3VlejkzIiwiYSI6ImNqeXcwcDAybTBjNWozaGxnNTQwcG16eGUifQ.v4fED-g0CJb_l3TKS-YUXg'
//     request({url: URL, json: true}, (error, response)=>{
//         if (error){
//             callback('unable to connnect to location services')
//         } else if (response.body.message==='Not Authorized - Invalid Token') {
//             callback('Not Authorized - Invalid Token')
    
//         }else if (response.body.features === undefined || response.body.features.length == 0){
//           callback('unable to find location')
//         }else{
//             callback(undefined,{
//                 lattitude: response.body.features[0].center[1],
//                 longitude: response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//             })
//          }

//     })
// }s

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })

geocode('Boston', (error, data)=>{
    console.log('Error', error)
    console.log('Data', data)
})