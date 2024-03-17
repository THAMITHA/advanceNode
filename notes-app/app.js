const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


//customize yargs version 

//Add command
yargs.command({
    command:'add',
    describe:'Add a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
       notes.addNotes(argv.title,argv.body)
    }
})

//Remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }

    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

//List command
yargs.command({
  command:'list',
  describe:'list all note',
  handler(){
    notes.listNotes()
  }  
})

//Read command
yargs.command({
    command:'read',
    describe:'Read all note',
    handler(){
        console.log('reading all the note')
    }
})

yargs.parse()








