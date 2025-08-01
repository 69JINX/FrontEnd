const express = require('express');
const app = express();
const {router} = require('./router.js');

const parentRouter = express.Router();

const viewData = (req,res) => res.send('Data Viewed');
const updateData = (req,res) => res.send('Data Updated');
const deleteData = (req,res) => res.send('Data Deleted');

app.route('/data')
.get(viewData)
.post(updateData)
.delete(deleteData);

app.use('/api', parentRouter);

parentRouter.use(router);



app.listen(4000,()=>{
 console.log('server is running at port 4000');
})
