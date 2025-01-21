const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Import controllers
const {
    getEmployees, addEmployee, getEmployee, editEmployee,
    getEmployeeForDelete, deleteEmployee,filteredEmployees
} = require("./controller/empcontroller");

const {
    getAssets, addAsset, getAsset, editAsset,
    getAssetForDelete, deleteAsset, getAssetsForView,filteredAssets
} = require('./controller/assetcontroller');

const {
    issueAsset, returnAsset, scrapAsset, assetHistoryView,
} = require('./controller/historyController');

// const { getPage, addUser } = require('./controller/userController');
const {
     getEmp, getasset, getAlldata,getHistory
} = require('./controller/issueController');
const {Employees} = require('./model/employee');
const app = express();

// General middleware setup
app.set('view engine', 'pug'); // Set Pug as the template engine
app.set('views', path.join(__dirname, 'view')); // Set the views directory
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded form data
app.use(bodyParser.json()); // Parse JSON form data

// Employee routes
app.get('/', getEmployees, (req, res) => res.render('form', ));
app.post('/employee/submit', addEmployee);
// app.get('/employee/filter/:status',getEmpByStatus)
app.get(`/employee/filter/`,filteredEmployees)
app.get('/employee/edit/:id', getEmployee);
app.post('/employee/edit/:id', editEmployee);
app.get('/employee/delete/:id', getEmployeeForDelete);
app.post('/employee/delete/:id', deleteEmployee);

// Asset routes
app.get('/asset', getAssets);
app.post('/asset/submit', addAsset);
app.get(`/asset/filter`,filteredAssets)
app.get('/asset/edit/:id', getAsset);
app.post('/asset/edit/:id', editAsset);
app.get('/asset/delete/:id', getAssetForDelete);
app.post('/asset/delete/:id', deleteAsset);

// Stock view route
app.get('/stockview', getAssetsForView);



// Service issue routes
app.get('/service/issue', async (req, res) => {
    try {
        const emp = await getEmp();
        const asset = await getasset();
        res.render('issue', { emp, asset });
    } catch (error) {
        console.error("Error in /service/issue:", error);
        res.status(500).send("Internal Server Error");
    }
});
app.post('/service/issue', issueAsset);

//service return
app.get('/service/return', async (req, res) => {
    try {
        const data = await getAlldata();
        res.render('return', { data });
    } catch (error) {
        console.error("Error in /service/return:", error);
        res.status(500).send("Internal Server Error");
    }
});
app.post('/service/return', returnAsset);

//service scrap
app.get('/service/scrap', async (req, res) => {
    try {
        const data = await getAlldata();
        res.render('scrap', { data });
    } catch (error) {
        console.error("Error in /service/scrap:", error);
        res.status(500).send("Internal Server Error");
    }
});
app.post('/service/scrap', scrapAsset);

//service history
app.get('/service/history', async (req, res) => {
    try {
        const data = await getHistory();
        res.render('history', { data });
    } catch (error) {
        console.error("Error in /service/history:", error);
        res.status(500).send("Internal Server Error");
    }
});
app.post('/service/history', assetHistoryView);





// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
