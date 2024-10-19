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
    productId: { type: mongoose.Schema.Types.ObjectId, required: true },
    addedDate: { type: Date, required: true }
})

const addtoCartSchema = new mongoose.Schema({
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

app.get("/wishlist", async (req, res) => {
    try {
        //  console.log("Fetching product IDs from wishlistModel...");
        const productId = await wishlistModel.find({});
        //  console.log("Product IDs fetched: ", productId);
        const productData = await productItemsModel.find({});
        // console.log("Product data fetched: ", productData);
        // Check if either productId or productData is empty
        if (!productId.length || !productData.length) {
            console.log("No data found.");
            return res.status(404).json({ message: 'No data found' });
        }

        const wishlistProductId = productId.map((element) => element.productId.toString());
        // console.log("Mapped wishlist product IDs: ", wishlistProductId);

        const matchedData = productData.filter((data) =>
            wishlistProductId.includes(data._id.toString())
        );
        // console.log("Matched data: ", matchedData);

        const result = matchedData.map((item) => {
            const matchedWishlistItem = productId.find(
                (element) => element.productId.toString() === item._id.toString()
            );

            return {
                ...item._doc,
                addedDate: matchedWishlistItem.addedDate,
            };
        });

        //console.log("Final result to send: ", result);

        // Sending the matched data as a JSON response.
        res.json(result);
    } catch (err) {
        console.error("Error Message in catch block: ", err);
        res.status(500).json({ message: "Internal server error" });
    }
});


// Delete Data from the Wishlist 

app.post("/deleteWishlist", async (req, res) => {
    const { productId } = req.body
    try {
        const result = await wishlistModel.deleteOne({ productId: productId });
        if (result.deletedCount === 0) {
            res.status(400).json({ message: "Product is not remove" });
        } else {
            res.status(200).json({ message: "Product has been removed" });
        }
    } catch (error) {
        console.error('Error deleting item:', error);
    }
})

// Add to Cart


app.post("/addtoCart", async (req, res) => {
    const { productId } = req.body
    try {
        const duplicate = await addtoCartModel.findOne({ productId: productId })
        if (duplicate) {
            res.status(400).json({ message: "Product Already added to cart" });
        }
        else {
            const newId = new addtoCartModel({ productId, addedDate: new Date(), quantity: 1 })
            await newId.save()
            res.status(200).json({ message: "Product added to cart" });
        }
    }
    catch (err) {
        console.log("Error occurred:", err);
    }
})


// Get Add to Cart Data


app.get("/getAddtoCart", async (req, res) => {
    try {
        const addtoCartData = await addtoCartModel.aggregate([
            {
                $lookup: {
                    from: 'productDetail', // Ensure the collection name matches the one in your MongoDB.
                    localField: 'productId', // Field in addtoCartModel that you are joining with.
                    foreignField: '_id', // Field in productItemsModel to join on.
                    as: 'productDetails' // Output array field where matched product data will be stored.
                }
            },
            {
                $unwind: '$productDetails' // Flattens the productDetails array into a single object for each addtoCart item.
            }
        ]);
        res.json(addtoCartData); // Send the data as a JSON response.
    } catch (error) {
        console.error('Error fetching cart with product details:', error);
        res.status(500).json({ error: 'Internal server error' }); // Return a proper error response.
    }
});







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
    const { productId } = req.body
    const duplicate = await wishlistModel.findOne({ productId: productId })
    console.log("function call")
    try {
        if (duplicate) {
            res.status(400).json({ message: "Product Already added to cart" });
        }
        else {
            const newId = new wishlistModel({ productId, addedDate: new Date() })
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


