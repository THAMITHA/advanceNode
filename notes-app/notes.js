const fs = require('fs')
const chalk = require('chalk')
const getNotes = ()=>{
    return "your notes..."
}
const addNotes = (title ,body)=>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    }
    else{
        console.log(chalk.red.inverse('note already present'))
    }
    
}

const removeNotes =(title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>note.title!==title)
    if(notes.length > notesToKeep.length){
     console.log(chalk.green.inverse('Note is removed!'))  
     saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse('no note is removed!'))
    }
    
}

const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.inverse('your note'))
    notes.forEach(note => {
        console.log(note.title) 
    })
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ()=>{
   try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
   }
   catch(e){
    return []
   }
}



module.exports = {
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes
}