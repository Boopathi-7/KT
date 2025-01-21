const {Employees} = require('../model/employee');

const getEmployees = async(req, res) => {
    try{
        const employees  = await Employees.findAll();
        console.log(employees);
        if(!employees){
           return   res.status(404).render('form',{msg:"Data not found"})
        }
        res.status(200).render('form',{msg:"employeeAll",employees});  // Render the Pug form template (form.pug)
    }catch(err){
        res.status(500).send("Internal Server Error")
    }
}

const addEmployee =  async(req,res)=>{
    try{
        const {name,number,age,mail,address,branch,active}=req.body;
        if(!name || !number || !age || !mail || !address || !branch || !active){
          return  res.status(400).render('form',{msg:"All fields are required"}) ;
        }
        await Employees.create({ name, number, age, mail, address, branch, active });
        const employees = await Employees.findAll();
        res.status(201).render('form',{msg:"employeeAdded",employees});
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error")
    }}

    const getEmployee  = async(req,res)=>{
        try{
            const id=req.params.id;
            const  employee= await Employees.findByPk(id);
            console.log(employee);
            res.status(200).render('form',{msg:"employeeToEdit",employee,id});
        }catch(err){
            console.log(err);
            res.status(500).send("Internal Server Error")
        }
    }

    const editEmployee = async (req,res)=>{
        try{
            const {id}=req.params;
            const updatedData=req.body; 
            await Employees.update(updatedData,{where:{id:id}});
            const employees = await Employees.findAll();
            res.status(200).render('form',{msg:"employeeUpdated",employees});
        }catch(err){
            console.log(err);
            res.status(500).send("Internal Server Error")
        }
    }

    const getEmployeeForDelete  = async(req,res)=>{
        try{
            const id=req.params.id;
            const  employee= await Employees.findByPk(id);
            console.log(employee);
            res.status(200).render('form',{msg:"employeeToDelete",employee,id});
        }catch(err){
            console.log(err);
            res.status(500).send("Internal Server Error")
        }
    }

    const deleteEmployee = async(req,res)=>{
        try{
            const id=req.params.id;
            await Employees.destroy({where:{id:id}});
            const employees = await Employees.findAll();
            res.status(200).render('form',{msg:"employeeDeleted",employees});
        }catch(err){
            console.log(err);
            res.status(500).send("Internal Server Error")
        }
    }
   const filteredEmployees = async(req,res)=>{
    try{
        const status = req.query.status.toUpperCase();
        const employees = await Employees.findAll({where:{active:status}});
        console.log(employees);
        res.status(200).render('form', { msg: "employeeStatus", employees });
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }}

    module.exports ={getEmployees,addEmployee,getEmployee,editEmployee,getEmployeeForDelete,deleteEmployee,filteredEmployees};