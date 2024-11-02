const express = require("express");
const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const secret_key = "!@#123";

const cors = require('cors');
const app = express()
app.use(cors());
app.use(express.json());

const connection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/quickCart", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};
connection();
const countryDataSchema = new mongoose.Schema({
    flag: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
});

const customerSignUpSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    countryCode: { type: String, required: true },
    contactNo: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const blogSchema = new mongoose.Schema({
    img: { type: String, required: true },
    description: { type: String, required: true },
    title: { type: String, required: true },
    pubishedAt: { type: Date, default: Date.now }
})


const productItemsSchema = new mongoose.Schema({
    img: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    prevousPrice: { type: Number, required: true },
    currentPrice: { type: Number, required: true },
    discount: { type: Number, required: true },
    category: { type: String, required: true }
})

const wishlistSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, required: true },
    addedDate: { type: Date, required: true }
})

const addtoCartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, required: true },
    addedDate: { type: Date, required: true },
    quantity: { type: Number, required: true }
})

const countryDataModel = mongoose.model('countryData', countryDataSchema, 'countryData');
const customerData = mongoose.model('customerSignUp', customerSignUpSchema, 'customerSignUp');
const blogData = mongoose.model("blogData", blogSchema, "blogData");
const productItemsModel = mongoose.model("productDetail", productItemsSchema, "productDetail")
const wishlistModel = mongoose.model("wishList", wishlistSchema, 'wishList')
const addtoCartModel = mongoose.model("addtoCart", addtoCartSchema, "addtoCart")



//      MIDDLEWARE FOR TOKEN VERIFICATION

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Token ko header se nikaalna
    if (!token) {
        return res.status(403).json({ message: "Access denied, token missing" });
    }
    try {
        const verified = jwt.verify(token, secret_key);
        req.user = verified;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};




//  API GET CALLS

app.get('/home', verifyToken, (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Home Page!',
        data: {
            user: req.user,
        }
    });
});




app.get('/accountMenuBar', verifyToken, (req, res) => {
    res.status(200).json({
        meassage: 'Welcome to the My Account',
        data: {
            user: req.user,
        }
    })
})


// get UserId

app.post("/getUserId", async (req, res) => {
    const { email } = req.body;
    const customer = await customerData.findOne({ email });

    if (customer) {
        const customerId = customer._id;
        res.status(200).json({ message: "Customer found", customerId });
    } else {
        res.status(404).json({ message: "Customer not found" });
    }
})

app.get("/signUp", async (req, res) => {
    const userEmail = req.query.email;
    if (userEmail) {
        console.log("get")
        try {
            const existingUser = await customerData.findOne({
                email: userEmail
            });
            if (existingUser) {
                res.status(200).send("Email already exists");
            } else {
                res.status(404).send("Email does not exist");
            }
        } catch (error) {
            console.error("Error checking email:", error);
            res.status(500).send("Error checking email");
        }
    }
    else {
        try {
            const countries = await countryDataModel.find({});
            res.json(countries); // Send data as JSON
        } catch (error) {
            res.status(500).json({ message: 'Error fetching country data', error });
        }
    }
})

app.get("/getProductData", async (req, res) => {
    const category = req.query.data;
    try {
        const productData = await getProductData(category);
        res.json(productData)
    }
    catch (err) {
        console.log("Error Message", err)
    }
})


// Get WishlistData

app.post("/wishlist", async (req, res) => {
    const { userId } = req.body;
    const userIdObject = new mongoose.Types.ObjectId(userId);
    try {
        const product = await wishlistModel.aggregate([
            {
                $match: { userId: userIdObject }
            },
            {
                $lookup: {
                    from: 'productDetail',
                    localField: 'productId',
                    foreignField: '_id',
                    as: 'productDetails'
                }
            },
            {
                $unwind: '$productDetails'
            }
        ])
        res.json(product)
    } catch (err) {
        console.error("Error Message in catch block: ", err);
        res.status(500).json({ message: "Internal server error" });
    }
});


// Delete Data from the Wishlist 

app.post("/deleteWishlist", async (req, res) => {
    const { productId, userId } = req.body
    const userIdObject = new mongoose.Types.ObjectId(userId)
    try {

        const response = await wishlistModel.deleteOne(
            { productId: productId,userId:userIdObject }
        )
        if (response.deletedCount >= 1) {
            res.status(200).json({ message: "Product has been removed" });
        }
        else {
            res.status(400).json({ message: "Error in removing from Wishlist" })
        }
    }
    catch (err) {
        console.error("Error Message in catch block: ", err);
        res.status(500).json({ message: "Internal server error" });
    }
})



// add ALl from Wishlist


app.post("/addAllfromWishlist", async (req, res) => {
    const { userId } = req.body; // Destructure userId from the body

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
    }
    const userIdObject = new mongoose.Types.ObjectId(userId); // Convert userId to ObjectId
    try {
        const wishlistItems = await wishlistModel.find({ userId: userIdObject });

        for (const item of wishlistItems) {
            const { productId } = item;
            const existingCartItem = await addtoCartModel.findOne({ productId: productId, userId: userIdObject });

            if (!existingCartItem) {
                const newCartItem = new addtoCartModel({
                    userId: userIdObject,
                    productId,
                    addedDate: new Date(),
                    quantity: 1
                });
                await newCartItem.save();
            }
        }
        
        res.status(200).json({ message: "Products added to cart" });
    } catch (err) {
        console.error("Error Message in catch block: ", err);
        res.status(500).json({ message: "Internal server error" });
    }
});



// remove all from the wishlist

app.post("/removeAllfromWishlist", async (req, res) => {
    const {userId} = req.body
    const userIdObject = new mongoose.Types.ObjectId(userId)
    try {
        const response = await wishlistModel.deleteMany({userId:userIdObject});
        res.status(200).json({ message: "All products removed from wishlist", deletedCount: response.deletedCount });
    } catch (error) {
        res.status(500).json({ message: "Error deleting products from wishlist", error: error.message });
    }
})


// Upadate the Add to Cart

app.post("/updateAddtoCart", async (req, res) => {
    const { productId, quantity, flag,userId } = req.body
    const userIdObject = new mongoose.Types.ObjectId(userId)
    let newQuantity = quantity
    if (flag === 0) {
        newQuantity--;
    }
    else if (flag === 1) {
        newQuantity++;
    }
    try {

        const response = await addtoCartModel.updateOne(
            { productId: productId,userId:userIdObject },
            {
                $set: { quantity: newQuantity }
            }
        );
        if (response.modifiedCount >= 1) {
            res.status(200).json({ message: "Quantity has been Changed" })
        }
    }
    catch (err) {
        console.log("Error message: ", err)
    }
})

// Add to Cart


app.post("/addtoCart", async (req, res) => {
    const { productId,userId } = req.body
    const userIdObject = new mongoose.Types.ObjectId(userId)
    try {
        const duplicate = await addtoCartModel.findOne({ productId: productId,userId:userIdObject })
        if (duplicate) {
            res.status(400).json({ message: "Product Already added to cart" });
        }
        else {
            const newId = new addtoCartModel({userId:userIdObject, productId, addedDate: new Date(), quantity: 1 })
            await newId.save()
            res.status(200).json({ message: "Product added to cart" });
        }
    }
    catch (err) {
        console.log("Error occurred:", err);
    }
})


// Get Add to Cart Data


app.post("/getAddtoCart", async (req, res) => {
    const {userId} = req.body
    const userIdObject = new mongoose.Types.ObjectId(userId)
    try {
        const addtoCartData = await addtoCartModel.aggregate([
            {
                $match:{userId:userIdObject}
            },
            {
                $lookup: {
                    from: 'productDetail',
                    localField: 'productId',
                    foreignField: '_id',
                    as: 'productDetails'
                }
            },
            {
                $unwind: '$productDetails'
            }
        ]);
        res.json(addtoCartData);
    } catch (error) {
        console.error('Error fetching cart with product details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// Delete from the Add to Cart


app.post("/deleteAddtoCart", async (req, res) => {
    const { productId,userId } = req.body
    const userIdObject = new mongoose.Types.ObjectId(userId)
    const response = await addtoCartModel.deleteOne({ productId: productId, userId:userIdObject })
    if (response.deletedCount >= 1) {
        res.status(200).json({ message: "Product has been removed" });
    }
    else {
        res.status(400).json({ message: "Error in removing from Add to Cart" })
    }
})


// Remove all from the Cart


app.post("/removeAllfromCart", async (req, res) => {
    const {userId} = req.body
    const userIdObject = new mongoose.Types.ObjectId(userId)
    try {
        const response = await addtoCartModel.deleteMany({userId:userIdObject});
        res.status(200).json({ message: "All products removed from cart", deletedCount: response.deletedCount });
    } catch (error) {
        res.status(500).json({ message: "Error deleting products from cart", error: error.message });
    }
})



// Get Subtotal of Cart

app.post("/getSubtotal", async (req, res) => {
    const {userId} = req.body
    const userIdObject = new mongoose.Types.ObjectId(userId)
    try {
        const addtoCartData = await addtoCartModel.aggregate([
            {
                $match:{userId:userIdObject}
            },
            {
                $lookup: {
                    from: 'productDetail',
                    localField: 'productId',
                    foreignField: '_id',
                    as: 'productDetails'
                }
            },
            {
                $unwind: '$productDetails'
            }
        ]);
        const total = addtoCartData.map((items) => {
            return items.quantity * items.productDetails.currentPrice;
        }).reduce((acc, curr) => acc + curr, 0);
        res.json(total);
    } catch (error) {
        console.error('Error fetching cart with product details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})





// API POST CALLS


app.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        const data = await customerData.findOne({
            email: email,
            password: password
        });
        if (data) {
            const token = jwt.sign({ data }, secret_key, { expiresIn: "2h" })
            res.status(200).json({ token: token, success: true, message: "User found", data });
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        console.error('Database Error:', error); // Log database errors
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
});


app.post("/signUp", async (req, res) => {
    const { name, email, password, countryCode, contactNo } = req.body;
    const newUser = new customerData({
        name, email, password, countryCode, contactNo
    });

    try {
        await newUser.save();
        res.status(201).send("User registered successfully!");
        console.log("Data sent:", newUser);
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Error registering user");
    }
});


// Add to Wishlist

app.post("/addtoWishList", async (req, res) => {
    const { productId, userId } = req.body
    console.log("UserId", userId)
    const duplicate = await wishlistModel.findOne({ productId, userId })
    console.log("function call")
    try {
        if (duplicate) {
            res.status(400).json({ message: "Product Already added to cart" });
        }
        else {
            const newId = new wishlistModel({ userId, productId, addedDate: new Date() })
            await newId.save()
            res.status(200).json({ message: "Product added to cart" });
        }
    }
    catch (err) {
        console.log("Error occurred:", err);
    }

})





// const blogInfo = ({
//     img: "https://static.blog.bolt.eu/LIVE/wp-content/uploads/2022/04/30135418/grocery-list-1024x536.jpg",
//     title:"A food pyramid based grocery list",
//     description: "Over the years, the food pyramid has been upgraded in line with new scientific discoveries. There are also slight variations between different countries’ food pyramids as you may have specific preferences based on your diet. But overall, it remains one of the best visualisations of a person’s weekly nutritional needs, and that’s why we established our healthy grocery shopping list based on the food pyramid. Healthy grocery list essentials In short, a healthy grocery list should include these foods (see below for exact amounts): Whole grains — oats, barley, buckwheat, brown and wild rice, quinoa, milletBread, cereals, potatoesVegetablesFruits and berriesDairy productsFish, meat, and poultryNuts, seeds, legumes, and oilsKeep in mind! The three macronutrients you need are carbohydrates (carbs), protein, and fats. Healthy eating guidelines recommend getting 50–60 % of your daily calories from carbs, 10–20 % calories from protein, and 20–30 % from fats."
// })


// const blog = async () => {
//     const newData = new blogData(blogInfo)
//     await newData.save();
// }

//blog();


const productData = ({
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-39-768x691.jpg",
    title: "Organic Green Grapes",
    description: "Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent",
    status: "InStock",
    prevousPrice: 5.75,
    currentPrice: 4.75,
    discount: 0,
    category: "Fruits & Vegetables"
})


const insertData = async () => {
    const data = new productItemsModel(productData)
    await data.save();
}

//insertData();




// Get Product Data 

const getProductData = async (category) => {
    let productInfo = [];
    try {
        const data = await productItemsModel.find({});
        data.forEach((item) => {
            if (item.category === category) {
                productInfo.push(item);
            }
        });
        return productInfo;
        //  console.log(data);
    } catch (error) {
        console.error("Error fetching product data:", error);
    }

};

//getProductData();



app.listen(5000)


