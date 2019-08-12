const https = require('https')

const url = 'https://api.darksky.net/forecast/18c9fed0acff8ae6fd162ad43a718bf7/42.3605,-71.0596'

const request  = https.request(url, (response)=>{
    let data=''
    response.on('data',(chunk)=>{
        data = data + chunk.toString()
    })

    response.on('end', ()=>{
        const body = JSON.parse(data)
        console.log(body)

    })
})


request.on('error', ()=>{
    console.log('An error', error)
})

request.end()