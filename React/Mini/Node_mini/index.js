// const express = require("express");
// const cors = require("cors");
// const { getAllFooditem ,addfooditem} = require("./api/FoodItem");
// const app =express();


// app.use(cors({
//    origin:'*'
// }));

// app.use(express.urlencoded({ extended: true }));
// const port =4000;
// app.listen(port, ()=>console.log(`application server started ${port}...`))


// require("./config/mysqldb");


// app.get("/getAll",function(request,response){
//     const data = getAllFooditem();
//     response.send(data);  
// });
    
//     app.post("/fooditem/add",function(request, response){
//     console.log(request.body);
//     const data=addfooditem(request.body);
//     response.send(data);
// });



const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { getAllFooditem, addfooditem, updatebyId,getFoodbyId, deletebyId, getFoodName } = require("./api/FoodItem");

const app = express();
const upload = multer();

app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Add this to parse JSON bodies

const port = 4001;

app.listen(port, () => console.log(`Application server started on port ${port}...`));

// Route to get all food items
app.get("/getAll", async (req, res) => {
    try {
        const data = await getAllFooditem();
        res.json(data);
        // console.log(data)
    } catch (error) {
        console.error('Error fetching food items:', error);
        res.status(500).send('Error fetching food items');
    }
});

app.get("/getfname/:fname" , async function (req,res){
    console.log(req.params.fname)
    const data = await getFoodName(req.params.fname);
    const food = data.map((fooditem)=>{
        const imageBuffer = fooditem.image_url;

        const base64Image = imageBuffer ? `data:image/png;base64,${imageBuffer.toString('base64')}` : null;

        return {
            id: fooditem.id,
            name: fooditem.name,
            description: fooditem.description,
            category : fooditem.category,
            price: fooditem.price,
            image_url: base64Image,
            quantity_in_stock:fooditem.quantity_in_stock,
            rating: fooditem.rating,
            is_available:fooditem.is_available


        };
    })
    
    res.send(food);
})


app.post("/addFoodItem",upload.single("file"), async (req, res) => {
    console.log(req.body);
    try {
        // const file = req.file.buffer ? req.file.buffer : null;
        const data = await addfooditem(req.body ,req?.file?.buffer);
        res.json(data);
    } catch (error) {
        console.error('Error adding food item:', error);
        res.status(500).send('Error adding food item');
    }
});

app.delete("/deletebyId/:id" ,async(req,res) =>{
    const data = await deletebyId(req.params.id)
    console.log(data);
    res.json(data);
});

app.get("/getbyid/:id" ,async (req,res) =>{

    const data= await getFoodbyId(req.params.id)
    // console.log(data);
    res.json(data);
 });

app.put("/updatefood/:id" ,upload.single('file')  , async(req , res)=>{

    // console.log(req.params.id ,req.body);
    // console.log("//////", req.file.buffer)
    const data = await updatebyId(req.params.id ,req.body , req?.file?.buffer)
    // console.log(data);
    res.json(data);
});

