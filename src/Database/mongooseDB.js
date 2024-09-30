const express = require("express")
const mongoose = require("mongoose");

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

const countryDataModel = mongoose.model('countryData', countryDataSchema, 'countryData');
const customerData = mongoose.model('customerSignUp', customerSignUpSchema, 'customerSignUp');


//  API GET CALLS


app.get("/signUp", async (req, res) => {
    const userEmail  = req.query.email;
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
        } catch(error) {
            res.status(500).json({ message: 'Error fetching country data', error });
        }
    }
})


app.get("/", async (req, res) => {
    console.log('Query Parameters:', req.query);  // Log incoming query parameters
    const { userEmail, userPassword } = req.query;  

    try {
        // Log the values being searched
        console.log('Searching for User:', { userEmail, userPassword });

        const data = await customerData.findOne({
            email: userEmail,
            password: userPassword
        });
        if (data) {
            res.status(200).json({ success: true, message: "User found", data });
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        console.error('Database Error:', error); // Log database errors
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
});




// API POST CALLS


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







app.listen(5000)


