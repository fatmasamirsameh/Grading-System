const yargs = require('yargs');
const students = require('./students');

yargs.command ({
    command:'add',
    describe:"add notes",
    builder:{
    stName:{
            describe:'this add descripe',
            type:'string',
            demandOption:true
    
        },
    subject:{
        describe:'this body  add describe',
        type:'string',
        demandOption: true
            },
            grade:{
                describe:'this body  add describe',
                type:'number',
                demandOption: true
            },
            comment:{
                describe:'this body  add describe',
                type:'string',
                demandOption: false
            }

                    },          
    handler:(argv)=>{
        students.addStudent(argv.stName,argv.subject,argv.grade,argv.comment);
    }
})
    yargs.command ({
    command:'delete',
    describe:"delete student",
    builder:{
        stName:{
            describe:'this name descripe',
            type:'string',
            demandOption: true
        }
    },
   
    handler:(argv)=>{
        students.removeStudent(argv.stName)
      
      }
})

yargs.command ({
    command:'read',
    describe:"read student",
    builder:{
        stName:{
            describe:'this name descripe',
            type:'string',
            demandOption: true
        }
    },

    handler:(argv)=>{
        students.readStudent(argv.stName);
    }
})

yargs.command({
    command:'list',
    describe:'List note',
    handler:(argv) =>{
        students.listStudents(argv.stName)
    }
})
yargs.parse();
