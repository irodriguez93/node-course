const path = require('path')
const express = require('express')
const hbs = require('hbs')




// Define paths for express config
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)

hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req,res)=>{
    res.render('index', {
        title: 'Weather App',
        name: 'Irving Rodriguez'
    })
})

app.get('/about', (req,res)=>{
    res.render('about', {
        title: 'About Me',
        name: 'Irving Rodriguez'
    })
})

app.get('/help', (req,res)=>{
    res.render('help', {
        title: 'Help Page',
        description: 'This is a help page to help you understand the application',
        name: 'Irving Rodriguez'
    })
})

// app.get('/help', (req, res)=>{
//     res.send([{
//         name: 'Dood',
//         age: 25
//     },
//     {
//         name: 'Sir',
//         age: 23
//     }]
        
//     )
// })

// app.get('/about', (req, res)=>{
//     res.send('<h1>About</h1>')
// })

app.get('/weather', (req, res)=>{
    res.send({
        forecast: 'Todays weather is nice and clear. Very sunny',
        location: 'Philadelphia'
    })
})

app.get('/help/*', (req, res)=>{
    res.render('error', {
        title: '404',
        errorMessage: 'HELP ARTICLE NOT FOUND',
        name: 'Irving Rodriguez'
    })
})

app.get('*', (req, res)=>{
    res.render('error', {
        title: '404',
        errorMessage: 'PAGE NOT FOUND 404',
        name: 'Irving Rodriguez'
    })
})

app.listen(3000,() =>{
    console.log('Server is up on port 3000')
})