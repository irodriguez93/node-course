const fs = require('fs')


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
console.log('here')
const data = JSON.parse(dataJSON)



console.log(dataJSONsss.name)



// data.name = 'Irving'
// data.age = 25

// const dataR = JSON.stringify(data)
// fs.writeFileSync('1-json.json', dataR)

// const dataBuffer = fs.readFileSync('1-json.json')

// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.title)
