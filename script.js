     var pT=[];
    var fT=[];
        var eId=document.getElementById("id").value
        eId=1;
        class Employee{
            constructor(id,name,salary,department,type){
            this.id=id;
            this.name=name;
            this.salary=salary;
            this.department=department;
            this.jobType=type
            }
            get partTimeEmp(){
                let tbl=`<table border="1" width="600"><tr> <th>Employee Name</th> <th> Id </th> <th>  Salary </th> <th> Department </th><th>Job Type</th> </tr>`
        
        tbl+=` <tr><th>${this.name}</th> <th>  ${this.id} </th> <th>${this.salary + "₹"}</th>  <th>${this.department}</th><th> ${this.jobType} </th></tr>`
       return tbl;
            }
            get fullTimeEmp(){
                let tbl=`<table border="1" width="600"><tr> <th>Employee Name</th> <th> Id </th> <th>  Salary </th> <th> Department </th><th>Job Type</th> </tr>`
        
        tbl+=` <tr><th>${this.name}</th> <th>  ${this.id} </th> <th>${this.salary + "₹"}</th>  <th>${this.department}</th><th> ${this.jobType} </th></tr>`
       return tbl;
            }
        }
        // Function to add Employee
        function addEmp(){
            document.getElementById("warn").innerHTML=""
            let eN =document.getElementById("name").value.toUpperCase()
            var selectedType
            let eS=document.getElementById("salary").value
            let eD=document.getElementById("depart").value.toUpperCase()
            const empType = document.querySelectorAll('input[name="type"]');
            for (const radioButton of empType) {
                if (radioButton.checked) {
                    selectedType = radioButton.value;
                    break;
                }
            }
            if(eN.length==0 || eS.length==0||eD.length==0){
                alert("Please fill all the fields")

            }
            else{
            if(selectedType=="Part Time"){
                const emp=new Employee(eId,eN,eS,eD,selectedType)
                eId++
                document.getElementById("id").value=eId
                document.getElementById("msg").innerHTML=emp.partTimeEmp
                pT.push(emp)
        }

            if(selectedType=="Full Time"){
                const emp=new Employee(eId,eN,eS,eD,selectedType)
                eId++
                fT.push(emp)
            document.getElementById("msg").innerHTML=emp.fullTimeEmp
        }
        
    }
    }

// Function to filter data
   function filter(){
        var fil=document.getElementById("input2").value.toUpperCase()
        let data=fT.concat(pT)
           if(fil.length==0){
           document.getElementById("msg").innerHTML=""  
    }
       else{   
             filterData=data.filter((x)=>{
            if(x.name.startsWith(fil) ||x.department.startsWith(fil)){
                return x;
            }
       })
       if(filterData.length==0){
        document.getElementById("msg").innerHTML=""   
        document.getElementById("warn").innerHTML="<b>NO Data found!"
       }
       else{
        let tbl=`<table border="1" width="600"><tr> <th>Employee Name</th> <th> Id </th> <th>  Salary </th> <th> Department </th><th>Job Type</th> </tr>`
        filterData.forEach(x=>{
            tbl+=`<tr>  <th>${x.name} </th> <th> ${x.id} </th> <th>${x.salary} </th> <th> ${x.department} </th> <th> ${x.jobType} </th> </tr>`
        })

        document.getElementById("warn").innerHTML=""
        document.getElementById("msg").innerHTML=tbl
        }
    }
    }

// function to add Employee in part time database
    function pEmp(){
        if(pT.length>0){
            document.getElementById("warn").innerHTML=""
        let tbl=`<table border="1" witdth="400"><tr> <th>Employee Name</th><th> Id </th> <th> Salary </th> <th> Department </th> <th> Job Type </th> <th> Update </th> <th> Remove </th> </tr>`
        pT.forEach((x,i)=>{
                tbl+=`<tr>  <th>${x.name} </th> <th> ${x.id} </th> <th>${x.salary} </th> <th> ${x.department} </th> <th> ${x.jobType} </th> <th>  <button onclick="pUpdate(${i})">Update</button> <th> <button onclick="pRmv(${i})">Remove</button> </th> </tr>`
        })
        document.getElementById("msg").innerHTML=tbl
    }
    else{
        document.getElementById("msg").innerHTML=""
        document.getElementById("warn").innerHTML="<b>NO Data found!"
    }
    }
    
    // function to add Employee in full time database
    function fEmp(){
        if(fT.length>0){
            document.getElementById("warn").innerHTML=""
        let tbl=`<table border="1" witdth="400"><tr> <th>Employee Name</th><th> Id </th> <th> Salary </th> <th> Department </th> <th> Job Type </th> <th> Update </th> <th> Remove </th> </tr>`
        fT.forEach((x,i)=>{
                tbl+=`<tr>  <th>${x.name} </th> <th> ${x.id} </th> <th>${x.salary} </th> <th> ${x.department} </th> <th> ${x.jobType} </th> <th><button onclick="fUpdate(${i})">Update</button> <th> <button onclick="fRmv(${i})">Remove</button> </th> </tr>`
        })
        document.getElementById("msg").innerHTML=tbl
    }
    else{
        document.getElementById("msg").innerHTML=""
        document.getElementById("warn").innerHTML="<b>NO Data found!"
    }
    }
    // function to remove Employee in part time database
    function pRmv(value){
        pT.splice(value,1)
        pEmp()
    }// function to remove Employee in full time database
    function fRmv(value){
        fT.splice(value,1)
        fEmp()
    }
// function to to show all Employee Data
    function allEmp(){
        let fullData=fT.concat(pT)
       if(fullData.length>0){
            document.getElementById("warn").innerHTML=""
        let tbl=`<table border="1" witdth="400"><tr>  <th>  Employee Name</th><th> Id </th> <th> Salary </th> <th> Department </th> <th> Job Type </th> </tr>`
        fullData.forEach((x,i)=>{
                tbl+=`<tr>  <th>${x.name} </th> <th> ${x.id} </th> <th>${x.salary} </th> <th> ${x.department} </th> <th> ${x.jobType} </th></tr>`
        })
        document.getElementById("msg").innerHTML=tbl
    }
    else{
        document.getElementById("msg").innerHTML=""
        document.getElementById("warn").innerHTML="<b>NO Data found!"
    }
    }

    // Function to update Part Time Employee
     function pUpdate(value){
        if (confirm("Do you want to change name")==true)   {
            let newName = prompt("Enter the new Name")
           pT[value].name=newName.toUpperCase()
           pEmp()
        }
        
        if (confirm("Do you want to change Salary")){
            let newSalary =prompt("Enter the new Salary")
            pT[value].salary=newSalary
            pEmp()
        }
        redepartP()
        // function to change department for Part time emp 
        function redepartP(){
        if (confirm("Do you want to change Department")){
            let newDepart =prompt("For Java Devloper press:- 1  For nodeJS Devloper press:- 2  For DotNet Devloper press:- 3  For C# Devloper press:- 4 ")
            switch(newDepart){
                case "1":{
                    pT[value].department="Java Devloper".toUpperCase()
                    pEmp()
                    break;        
                }
                case "2":{
                    pT[value].department="node.JS Devloper".toUpperCase()
                    pEmp()
                    break;        
                }
                case "3":{
                    pT[value].department="DotNet Devloper".toUpperCase()
                    pEmp()
                    break;        
                }
                case "4":{
                    pT[value].department="C# Devloper".toUpperCase()
                    pEmp()
                    break;        
                }
                default:{
                    console.log(newDepart)
                    alert("Please Enter only one given  no")
                    redepartP()
                }
            }
        }
        }
    }
 // Function to update Full Time Employee
    function fUpdate(value){
        if (confirm("Do you want to change name")==true)   {
            let newName = prompt("Enter the new Name")
           fT[value].name=newName.toUpperCase()
           fEmp()
        }
        
        if (confirm("Do you want to change Salary")){
            let newSalary =prompt("Enter the new Salary")
            fT[value].salary=newSalary
            fEmp()
        }
        redepartF()
        // function to change department for full time emp 
        function redepartF(){
        if (confirm("Do you want to change Department")){
            let newDepart =prompt("For Java Devloper press:- 1  For nodeJS Devloper press:- 2  For DotNet Devloper press:- 3  For C# Devloper press:- 4 ")
            switch(newDepart){
                case "1":{
                    fT[value].department="Java Devloper".toUpperCase()
                    fEmp()
                    break;        
                }
                case "2":{
                    fT[value].department="node.JS Devloper".toUpperCase()
                    fEmp()
                    break;        
                }
                case "3":{
                    fT[value].department="DotNet Devloper".toUpperCase()
                    fEmp()
                    break;        
                }
                case "4":{
                    fT[value].department="C# Devloper".toUpperCase()
                    fEmp()
                    break;        
                }
                default:{
                    console.log(newDepart)
                    alert("Please Enter only one given  no")
                    redepartF()
                }
            }
        }
        }
    }
            document.getElementById("name").addEventListener('blur',()=>{
                let value=document.getElementById("name").value
                const cName=/^([a-zA-Z]){3,15}$/
                if(cName.test(value)){
                    document.getElementById("name").style.borderColor="green"
                }
                else{
                    alert(" Name Length Must be less then 15 & greater than 3 || Name must start with alphabet")
                }
            })

            



