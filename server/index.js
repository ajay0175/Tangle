const app = require('./app') //importing app 

require('dotenv').config();  

//creating basic server
app.listen(process.env.PORT, ()=>{
    console.log(`server is running at port: ${process.env.PORT}`);
})
