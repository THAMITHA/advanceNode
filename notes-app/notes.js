const fs = require('fs')
const chalk = require('chalk')
const getNotes = function(){
    return "your notes..."
}
const addNotes = function(title ,body){
    const notes = loadNotes()
    const duplicateData = notes.filter(function(note){
        return note.title === title
    })
    if(duplicateData.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log('new note added')
    }
    else{
        console.log('note already present')
    }
    
}

const removeNotes = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title!==title
    })
    if(notes.length > notesToKeep.length){
     console.log(chalk.green.inverse('notes is removed!'))  
     saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse('no notes is removed!'))
    }
    
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function(){
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
    removeNotes:removeNotes
}