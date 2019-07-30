// const square = function (x) {
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x

// console.log (square(2))

const event = {
    name: 'Birthday Party',
    printGuestList: function() {
        console.log('guest list for '+ this.name)
    }
}

event.printGuestList()