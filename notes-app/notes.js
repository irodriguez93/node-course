const fs = require('fs')
const chalk = require('chalk')

getNotes = () => {return 'Your Notes...'}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title===title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    }else{
        console.log(chalk.red.inverse('Note already exists!'))
    }

}

const removeNote = (title) =>{
        const notes = loadNotes()
      //  console.log(notes)
        const noteExists = notes.filter((note) => note.title !== title)

        if (notes.length > noteExists.length){
            console.log(chalk.red.inverse('NOTE DELETED'))
            saveNotes(noteExists)
        }else{
            console.log(chalk.blue.inverse('Nothing Changed'))
        }     
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title===title)
    if (note){
        console.log(chalk.inverse(note.title))
        console.log(chalk.inverse(note.body))
    }else {
        console.log("Note not found")
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }


}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}