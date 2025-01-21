const {assetHistories,assetReturneds,assetScraps,assetmasters} = require("../model/asset");


//issue asset
const issueAsset = async(req,res)=>{
  const {assetId,assetCat,assetBrand,assetModel,assetSer_no,assetBranch,issueDate,empId,empName,empNumber,userName,userNumber,reason}=req.body;
  try{
    // Log the issue transaction
   await assetmasters.update({status:"issued"},{where:{id:assetId}});
   const newAssetHistory = await assetHistories.create({
      assetId,assetCat,assetBrand,assetModel,assetSer_no,assetBranch,empId,empName,empNumber,userName,userNumber,assetStatus:"issued",issueDate,reason,assetAction:"issued"
    })
    res.status(200).render('issue',{msg:"assetIssued",newAssetHistory});
  }catch(err){
    console.log(err);
    res.status(500).send("Internal Server Error")
  }
}

//return asset
const returnAsset = async(req,res)=>{
  const {assetId,assetCat,assetBrand,assetModel,assetSer_no,assetBranch,assetStatus,empId,empName,empNumber,userName,userNumber,issueDate,reason}=req.body;
  try{    
    // update asset status
    await assetmasters.update({status:"returned"},{where:{id:assetId}});
    await assetHistories.update({assetStatus:"returned"},{where:{assetId}});
    // Log the return transaction
   const returnAssetHistory = await assetReturneds.create({      
    assetId,assetCat,assetBrand,assetModel,assetSer_no,assetBranch,empId,empName,empNumber,userName,userNumber,reason,issueDate,assetStatus:"returned",assetAction:"returned"
    })
    res.status(200).render('return',{msg:"assetReturned",returnAssetHistory});
  }catch(err){
    console.log(err);
    res.status(500).send("Internal Server Error")
  }
}

//scrap asset
const scrapAsset = async(req,res)=>{
  const {assetId,assetCat,assetBrand,assetModel,assetSer_no,assetBranch,empId,empName,empNumber,userName,userNumber,issueDate,reason}=req.body;
  try{    
    // update asset status
    await assetmasters.update({status:"scrapped"},{where:{id:assetId}});
    await assetHistories.update({assetStatus:"scrapped"},{where:{assetId}});
    await assetReturneds.update({assetStatus:"scrapped"},{where:{assetId}});
    // Log the scrap transaction
  const scrapAssetHistory =  await assetScraps.create({      
    assetId,assetCat,assetBrand,assetModel,assetSer_no,assetBranch,empId,empName,empNumber,userName,userNumber,reason,issueDate,assetStatus:"scrapped",assetAction:"scrapped"
    })
    res.status(200).render('scrap',{msg:"assetScrapped",scrapAssetHistory});
  }catch(err){
    console.log(err);
    res.status(500).send("Internal Server Error")
  }
}

//asset history
const assetHistoryView = async(req,res)=>{
  const {assetId,assetCat,assetBrand,assetModel,assetSer_no,}=req.body;
  try{    
    const assetIssue = await assetHistories.findAll({where:{assetId}});
    const assetReturn = await assetReturneds.findAll({where:{assetId}});
    const assetScrap = await assetScraps.findAll({where:{assetId}});
    console.log("assetIssue",assetIssue,"assetReturn",assetReturn,"assetScrap",assetScrap);
    res.status(200).render('history',{msg:"assetHistory",assetIssue,assetReturn,assetScrap});  
  }catch(err){
    console.log(err);
    res.status(500).send("Internal Server Error")
  }
}

module.exports={issueAsset,returnAsset,scrapAsset,assetHistoryView};