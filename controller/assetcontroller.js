const {assetmasters} = require('../model/asset');
const {Op}=require('sequelize');

const getAssetsForIndex = async(req, res) => {
    try{
        const assets  = await assetmasters.findAll();
        console.log(assets);
        if(!assets){
           return res.status(404).send("Data Not Found")
        }
        res.status(200).render('index',{msg:"assetAll",assets});  // Render the Pug form template (form.pug)
    }catch(err){
        res.status(500).send("Internal Server Error")
    }
}
const getAssets = async(req, res) => {
    try{
        const assets  = await assetmasters.findAll({where: {status: ['NEW', 'SERVICE']}});

        console.log(assets);
        if(!assets){
          return  res.status(404).render('asset',{msg:"Data not found"})
        }
        res.status(200).render('asset',{msg:"assetAll",assets});  // Render the Pug form template (form.pug)
    }catch(err){
        res.status(500).send("Internal Server Error")
    }
}

const addAsset =  async(req,res)=>{
    try{
        const {cat,brand,model,ser_no,branch,status}=req.body;
        if(!cat || !brand || !model || !ser_no || !status || !branch ){
           return res.status(400).render('asset',{msg:"All fields are required"}) ;
        }
        await assetmasters.create({
        cat,brand,model,ser_no,branch,status
        });
        const assets= await assetmasters.findAll();
        res.status(201).render('asset',{msg:"assetAdded",assets});
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error")
    }}

    const getAsset  = async(req,res)=>{
        try{
            const id=req.params.id;
            const  asset= await assetmasters.findByPk(id);
            console.log(asset);
            res.status(200).render('asset',{msg:"assetToEdit",asset,id});
        }catch(err){
            console.log(err);
            res.status(500).send("Internal Server Error")
        }
    }
  
    const editAsset = async (req,res)=>{
        try{
            const {id}=req.params;
            const updatedData=req.body; 
            await assetmasters.update(updatedData,{where:{id:id}});
            const assets= await assetmasters.findAll();
            res.status(200).render('asset',{msg:"assetUpdated",assets});
        }catch(err){
            console.log(err);
            res.status(500).send("Internal Server Error")
        }
    }

    const getAssetForDelete  = async(req,res)=>{
        try{
            const id=req.params.id;
            const  asset= await assetmasters.findByPk(id);
            console.log(asset);
            res.status(200).render('asset',{msg:"assetToDelete",asset,id});
        }catch(err){
            console.log(err);
            res.status(500).send("Internal Server Error")
        }
    }

    const deleteAsset = async(req,res)=>{
        try{
            const id=req.params.id;
            await assetmasters.destroy({where:{id:id}});
            const assets= await assetmasters.findAll();
            res.status(200).render('asset',{msg:"assetDeleted",assets});
        }catch(err){
            console.log(err);
            res.status(500).send("Internal Server Error")
        }
    }    


   const getAssetsForView = async(req,res)=>{
     try{
        const assets = await assetmasters.findAll();
        console.log(assets);
        if(!assets ){
            res.status(404).send("Data Not Found")
        }
        // group assets by branch
        const groupAssets = assets.reduce((acc,asset)=>{
            const branch =asset.branch;
            if(!acc[branch]){
                acc[branch]=[];
            }
            acc[branch].push(asset);
            return acc
        },{})
        res.status(200).render('stockView',{msg:"assetAll",groupAssets});  // Render the Pug form template (form.pug)
     }catch(err){
        res.status(500).send("Internal Server Error")
   }}
   const filteredAssets = async (req, res) => {
    try {
        // Extract query parameters and normalize them
        const cat = req.query.cat ? req.query.cat.toUpperCase() : null;
        const brand = req.query.brand ? req.query.brand.toUpperCase() : null;
        const model = req.query.model ? req.query.model.toString() : null;

        console.log("Filter Parameters:", { cat, brand, model });

        // Build the dynamic where condition
        const whereCondition = {};
        if (cat) whereCondition.cat = cat;
        if (brand) whereCondition.brand = brand;
        if (model) whereCondition.model = model;

        // Fetch assets based on the dynamic where condition
        const assets = await assetmasters.findAll({
            where: {
                [Op.and]: [
                    ...(cat ? [{ cat }] : []),
                    ...(brand ? [{ brand }] : []),
                    ...(model ? [{ model }] : [])
                ]
            }
        });

        console.log("Fetched Assets:", assets);

        // Render the results to the frontend
        res.status(200).render('asset', { msg: "filteredAssets", assets });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    }
};


    module.exports ={getAssets,addAsset,getAsset,editAsset,getAssetForDelete,deleteAsset,getAssetsForView,getAssetsForIndex,filteredAssets};