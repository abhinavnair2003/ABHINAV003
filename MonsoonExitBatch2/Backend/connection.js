const mongoose = require("mongoose");
//Write missing code 
mongoose.connect('mongodb+srv://abhinavnairb21cs1202:abhinav@cluster0.4nj2edp.mongodb.net/empdb?retryWrites=true&w=majority&appName=Cluster0')
  .then((res)=>{
  console.log('DB is connected')
}).catch((res)=>{
  console.log('DB not connected')
})
