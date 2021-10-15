// Declare  input values as Global Variables
let courseName = document.getElementById('courseInput').value;
let score = document.getElementById('scoreInput').value;
let creditUnit = document.getElementById('unitInput').value;
let studentData = [];
let row = document.querySelector('tbody');
let table1 = document.querySelector('table');
let noData = document.getElementById('nodata');
let resultDisplayParagraph = document.getElementById('display');





const addResult = (event) => {
    event.preventDefault()

    courseName = document.getElementById('courseInput').value;
    score = document.getElementById('scoreInput').value;
    creditUnit = document.getElementById('unitInput').value;
    


    console.log(courseName)
console.log(score)
console.log(creditUnit)
    
// Validate form before adding to Record
  if (validateForm(courseName , convertInputToNumbers(score), convertInputToNumbers(creditUnit) )) {
      
      
      let data = inputToArry(courseName, convertInputToNumbers(score), convertInputToNumbers(creditUnit))
      let gp = gpCalc(data)
      displayGp(gp)
       
      console.log(studentData)
      clearFields()
      
      addDataToTable(courseName , creditUnit , score)
      
      convertScoreToPoint( convertInputToNumbers(score) , convertInputToNumbers(creditUnit)) 
  
   // displayGp(gp(totalPoint() , totalCreditUnit()).toFixed(2))
      
  }
  else {
      alert('Add A value');
  }
}

const deleteRow = (e) => {
    if (confirm('Are You Sure You want To Remove This Course?')) {
      
         if (e.target.classList.contains('delete')) {
        const btn = e.target;
        btn.closest('tr').remove() 
 
        // let dp = gpCalc(deleteRecord);
        // displayGp(dp)
        // deleteRecord (studentData , courseName)
        // let gpDisplay = document.getElementById('resultDisplay');
        // gpDisplay.innerText =  gp().toFixed(2);

        // totalCreditUnit()
        // totalCreditUnit()
        // let re = reCalculate()
        // console.log(re)
        // displayGp(gp(totalPoint() , totalCreditUnit()))
        
    }
        
    }
   
    
   

   
}


const displayGp = (parameter) => {

    let gpDisplay = document.getElementById('resultDisplay');
    gpDisplay.innerText = parameter;
    // console.log(displayGp(gp()))
    // return parameter
    
}



const convertInputToNumbers = (input) => {
    
    if (isNaN(input)) return 0
        

    return parseFloat(input);
}

const validateForm = (courseInput, scoreInput, unitInput) => {

    return   courseInput !== '' && (scoreInput >= 0 && scoreInput <= 100 && scoreInput !== '') && unitInput !== '';

}

const inputToArry = (courseInput, scoreInput, unitInput) => {



    let data = {
        course : courseInput,
        mark : scoreInput,
        creditLoad : unitInput
}

//  if (verify(courseInput) != undefined) {
//      return   alert("Course already added")
        
//     }

    studentData.push(data)
    return studentData
}

const clearFields = (courseInput, scoreInput, unitInput) => {

    document.getElementById('courseInput').value = ''
    document.getElementById('scoreInput').value = ''
    document.getElementById('unitInput').value = ''


    // courseInput.value = ''
    // scoreInput.value = ''
    // unitInput.value = ''

}

const showAndHideTable = (table) => {
    
    table.classList.remove ('d-none');
}

const noDataAddedText = (para) => {
    para.style.display = 'none';
}
 
const resultDisplayText = (text) => {

    text.classList.remove('d-none')
}  


const addDataToTable =  (courseInput, scoreInput , unitInput) => {
    
         if (verify(courseName) == undefined) {
   return   alert("Course already added")
}

    showAndHideTable(table1)
 
    noDataAddedText(noData)
   
    resultDisplayText(resultDisplayParagraph)
    // if (verify(courseInput) != undefined) {
    //     return   alert("Course already added")
   
    let table = document.getElementById('dataTable');
   
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3)
    cell1.innerHTML = courseInput
    cell2.innerHTML = scoreInput
    cell3.innerHTML =  unitInput
    cell4.innerHTML = `<button class="delete" onClick="deleteRecord(this)" data-code="${courseInput}"><i class="bi bi-trash delete"></i></button>`


    return
}

const convertScoreToPoint = (point , unit1) => {
   
    
    if (point >= 75 && point <= 100 )    return 4 * unit1;
    
           
    if (point >= 70 && point <= 74)   return 3.5 * unit1;
            
            
    if (point >= 65 && point <= 69)   return 3.0 * unit1;
        
    
     if (point >= 60 && point <= 64)  return  3.0 * unit1;
                
            
     if (point >= 55 && point <= 59)   return 2.75 * unit1;
                
            
    if (point >= 50 && point <= 54 )   return  2.5 * unit1;
                
    if (point >= 45 && point <= 49)  return 2.25 * unit1;
                
     if (point >= 40 && point <= 44) return  2.00 * unit1;
                
        
    if (point < 39) return 0 * unit1;
 
    


    
   

}


const gpCalc = (resultArray) => {

    let tcp = resultArray.reduce((total, item) => total + convertScoreToPoint(item.mark, item.creditLoad), 0)
    let tcu = resultArray.reduce((total, item) => total + (item.creditLoad), 0)
    
    if (tcu === 0) return 0

    return (tcp/tcu).toFixed(2)
    



}
// let result = gp();


const verify = (course) => {
    return studentData.find(item => item.course === course)
}
console.log(verify(courseName))

const deleteRecord = ( content) => {
   
    if (confirm('This Course Will be removed')) {
        let course = content.getAttribute("data-code")
            let find = studentData.find(item => item.course === course)
            let index = studentData.findIndex(item => item === find)
           
       

            if (index != -1) {
                studentData.splice(index, 1);
                console.log(gpCalc(studentData))
                displayGp(gpCalc(studentData))


                if ( displayGp(gpCalc(studentData)) == 0) {
                    
                 return   resultDisplayParagraph.classList.add('d-none')
                }
                return studentData
            }
         
          
           
      
    }
    return studentData
  
   


   
    

}


   


row.addEventListener('click' , deleteRow)


