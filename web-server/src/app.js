const path = require('path')
const express = require('express')
console.log(__dirname)




// Define paths for express config
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')


//setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
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
        description: 'This is a help page to help you understand the application'
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


app.listen(3000,() =>{
    console.log('Server is up on port 3000')
})