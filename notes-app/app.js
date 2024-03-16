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
    handler:function(argv){
       notes.addNote(argv.title,argv.body)
    }
})

//Remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    handler:function(){
        console.log('Removing the note')
    }
})

//List command
yargs.command({
  command:'list',
  describe:'list all note',
  handler:function(){
    console.log('listing all the note')
  }  
})

//Read command
yargs.command({
    command:'read',
    describe:'Read all note',
    handler:function(){
        console.log('reading all the note')
    }
})

yargs.parse()








