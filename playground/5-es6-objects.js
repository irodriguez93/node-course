const name = 'Andrew'

const userAge = 27

// const user ={
//     name,
//     age: userAge,
//     locaton: 'Philadelphia'
// }

//for ES6 you can 

// const user ={
//     name: name,
//     age: userAge,
//     locaton: 'Philadelphia'
// }

// console.log(user)

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// // const label = product.label
// // const stock = product.stock

// // const {label, stock}= product
// const {label:productLabel, stock}= product

// console.log(productLabel)
// console.log(stock)

const transaction = (type, {label, stock}={label:'test'}) =>{
    console.log(type, label, stock)
}


transaction('order')