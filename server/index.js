const express = require('express');
const db = require('./models');
const app = express();
const cors=require("cors");

app.use(express.json());
app.use(cors());


//Router
const router=require("./routes/employee");
app.use("/employee",router)
  
db.sequelize.sync().then(()=>{
    app.listen(5000, () => console.log('Server running on port 5000'));
});