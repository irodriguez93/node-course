const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const command = process.argv[2]

console.log(command)
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: String
        },
        body:{
            describe: 'Note Description',
            demandOption: true,
            type: String
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: String
        }
    },
    handler(argv){
        console.log('Attempting to remove note')
        notes.removeNote(argv.title)
        
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler(){
        console.log('reading a note')
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler(){
       // console.log('list all notes')
        notes.listNotes()
    }
})

yargs.parse()

//console.log(yargs.argv)s