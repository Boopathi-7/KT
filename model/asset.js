const { DataTypes } = require('sequelize');
const sequelize =require('./sequqlize');


const assetmasters =sequelize.define('assetmasters',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    cat:{
        type:DataTypes.STRING,
        allowNull:false
    },
    brand:{
        type:DataTypes.STRING,
        allowNull:false
    },
    model:{
        type:DataTypes.STRING,
        allowNull:false
    },
    ser_no:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    branch:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    },
 
});

// Asset History Model
const assetHistories = sequelize.define('assetHistories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    assetId:{ type: DataTypes.INTEGER, allowNull: false },
    assetCat: {type: DataTypes.STRING, allowNull: false},
    assetBrand: {type: DataTypes.STRING, allowNull: false},
    assetModel: {type: DataTypes.STRING, allowNull: false},
    assetSer_no: {type: DataTypes.STRING, allowNull: false},
    assetBranch: {type: DataTypes.STRING, allowNull: false},
    empId:{ type: DataTypes.INTEGER, allowNull: false },
    empName: {type: DataTypes.STRING, allowNull: false},
    empNumber: {type: DataTypes.BIGINT, allowNull: false},
    userName: {type: DataTypes.STRING, allowNull: false},
    userNumber:{type: DataTypes.BIGINT, allowNull: false},
    assetStatus: {type: DataTypes.STRING, allowNull: false} ,// e.g., Issued, Returned, Scrapped
    issueDate:{ type: DataTypes.DATE, allowNull: false },
    assetAction: {type: DataTypes.STRING, allowNull: false},
reason: {type: DataTypes.STRING, allowNull: false} // Optional
});

// Asset Return Model
const assetReturneds = sequelize.define('assetReturneds', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    assetId:{ type: DataTypes.INTEGER, allowNull: false },
    assetCat: {type: DataTypes.STRING, allowNull: false},
    assetBrand: {type: DataTypes.STRING, allowNull: false},
    assetModel: {type: DataTypes.STRING, allowNull: false},
    assetSer_no: {type: DataTypes.STRING, allowNull: false},
    assetBranch: {type: DataTypes.STRING, allowNull: false},
    empId:{ type: DataTypes.INTEGER, allowNull: false },
    empName: {type: DataTypes.STRING, allowNull: false},
    empNumber: {type: DataTypes.BIGINT, allowNull: false},
    userName: {type: DataTypes.STRING, allowNull: false},
    userNumber:{type: DataTypes.BIGINT, allowNull: false},
    assetStatus: {type: DataTypes.STRING, allowNull: false} ,// e.g., Issued, Returned, Scrapped
    issueDate:{ type: DataTypes.DATE, allowNull: false },
    assetAction: {type: DataTypes.STRING, allowNull: false},
reason: {type: DataTypes.STRING, allowNull: false} // Optional
});

// Asset Scrap Model
const assetScraps = sequelize.define('assetScraps', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    assetId:{ type: DataTypes.INTEGER, allowNull: false },
    assetCat: {type: DataTypes.STRING, allowNull: false},
    assetBrand: {type: DataTypes.STRING, allowNull: false},
    assetModel: {type: DataTypes.STRING, allowNull: false},
    assetSer_no: {type: DataTypes.STRING, allowNull: false},
    assetBranch: {type: DataTypes.STRING, allowNull: false},
    empId:{ type: DataTypes.INTEGER, allowNull: false },
    empName: {type: DataTypes.STRING, allowNull: false},
    empNumber: {type: DataTypes.BIGINT, allowNull: false},
    userName: {type: DataTypes.STRING, allowNull: false},
    userNumber:{type: DataTypes.BIGINT, allowNull: false},
    assetStatus: {type: DataTypes.STRING, allowNull: false} ,// e.g., Issued, Returned, Scrapped
    issueDate:{ type: DataTypes.DATE, allowNull: false },
    assetAction: {type: DataTypes.STRING, allowNull: false},
reason: {type: DataTypes.STRING, allowNull: false} // Optional
});

// Asset but Model
const assetBuys = sequelize.define('assetBuys', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    assetId:{ type: DataTypes.INTEGER, allowNull: false },
    assetCat: {type: DataTypes.STRING, allowNull: false},
    assetBrand: {type: DataTypes.STRING, allowNull: false},
    assetModel: {type: DataTypes.STRING, allowNull: false},
    assetSer_no: {type: DataTypes.STRING, allowNull: false},
    assetBranch: {type: DataTypes.STRING, allowNull: false},
    userName: {type: DataTypes.STRING, allowNull: false},
    userNumber:{type: DataTypes.BIGINT, allowNull: false},
    assetStatus: {type: DataTypes.STRING, allowNull: false} ,// e.g., Issued, Returned, Scrapped
    issueDate:{ type: DataTypes.DATE, allowNull: false },
    assetAction: {type: DataTypes.STRING, allowNull: false},
});

//sync with database
sequelize.sync({alter:true})
    .then(()=>console.log("Asset Master and Asset History and Asset Return and Asset Scrap Table created successfully"))
    .catch((err)=>console.log("Unable to create Table",err))

    module.exports= {assetmasters,assetHistories,assetReturneds,assetScraps,assetBuys};