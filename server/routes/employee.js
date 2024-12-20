const express=require("express");
const router=express.Router();
const {Employee} =require("../models/");

router.get("/", async(req, res) => {
    const listOfEmp= await Employee.findAll()
    res.json(listOfEmp);
  });

router.post("/", async(req,res)=>{
    const emp=req.body;
    await Employee.create(emp);
    res.json(emp);
});

module.exports=router;