const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://neosoftabhishek98:root@cluster0.1gd3o.mongodb.net/Neosoft?retryWrites=true&w=majority&appName=Cluster0")
.then((success)=>{console.log("Mongo db Connected")
require("../MongoDBModel/employee")
})
.catch(err=> console.log("MongoDB Connection Error:", err.message))
