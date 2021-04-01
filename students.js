const fs = require('fs')
const addStudent = (stName,subject,grade,comment) =>{
    const students  = loadStudents();
    const duplicateName = students.filter((student)=>{
        return student.stName === stName

    })
    if (duplicateName.length === 0){
        students.push ({
            stName,
            subject,
            grade,
            comment
        })
    
    saveStudents(students)
    console.log("save success");
    }
    else{
        console.log('error Duplicate name');
    }
  
}
const loadStudents = () =>{
    try{
        const data = fs.readFileSync('students.json').toString();
        return JSON.parse(data);
    }
    catch(e){
        return []
    }
    }

const saveStudents = (students) =>{
    const saveData = JSON.stringify(students)
    fs.writeFileSync('students.json',saveData)

}
const  removeStudent = (stName) =>{
    const students = loadStudents();
    const studentsToKeep = students.filter((student)=>{
        return student.stName !== stName
    })
    saveStudents(studentsToKeep)
    console.log('student is removed');
}


const readStudent = (stName) =>{
    const students = loadStudents()

    const student = students.find((student)=>{
        return student.stName === stName
    })

    if(student){
        console.log('This is name: '+ student.stName)
        console.log('This is subject: '+ student.subject)
        console.log('This is grade: '+ student.grade)
        console.log('This is comment: '+ student.comment) 
        }
    
    else{
        console.log('name not found')
    }

}

const listStudents = () =>{
    const students = loadStudents()
    students.forEach((student) => {
        console.log(student.stName)
        
    });
}

module.exports = {
    addStudent, 
    removeStudent,
    readStudent, 
    listStudents
}
