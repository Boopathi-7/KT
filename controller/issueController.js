// const {users} = require("../model/user");
const {Employees} = require('../model/employee');
const {assetmasters} = require('../model/asset');
const {assetHistories,assetReturneds,assetScraps} = require('../model/asset');
  
// const getUser=async()=>{
//   return await users.findAll()
// }
const getEmp=async()=>{
  return await Employees.findAll()
}
const getasset=async()=>{
  return await assetmasters.findAll({where:{status:"NEW"}} && {where:{status:"SERVICE"}})
}

const getAlldata=async(req,res)=>{
  return await assetHistories.findAll({where:{assetStatus:"issued"}});
}

const getHistory = async(req,res)=>{
  return await assetHistories.findAll();
}

const getReturn=async(req,res)=>{
  return await assetReturneds.findAll();
}

const getScrap=async(req,res)=>{
  return await assetScraps.findAll();
}

module.exports ={getEmp,getasset,getAlldata,getReturn,getScrap,getHistory}