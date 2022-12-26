const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

// port and mongodb url...
const port =3200;
const dataBaseUrl ="mongodb://localhost:27017/multySmart";

// middlewares
app.use(express.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({extended:false}));
app.use('/uploads' , express.static(path.join('uploads')));


// connect to DataBase
mongoose.connect(dataBaseUrl);

// call routes
const adminRoutes = require('./routes/Admin.js'); // Route
const messagesRoutes = require('./routes/Message.js'); // Route
const videosRoutes = require('./routes/Video.js'); // Route
const projectsRoutes = require('./routes/Project.js'); // Route
const offerRoutes = require('./routes/Offer.js'); // Route
const productRoutes = require('./routes/Product.js'); // Route
const brandRoutes = require('./routes/Brand.js'); // Route
const commentRoutes = require('./routes/Comment.js'); // Route
const categoryRoutes = require('./routes/Category.js'); // Route
const ratingRoutes = require('./routes/Category.js'); // Route
const likesRoutes = require('./routes/Likes.js'); // Route

app.use(cors({
  origin:'http://localhost:4200'
}));

// users routes ... 
app.use('/admin',adminRoutes);
app.use('/messages',messagesRoutes);
app.use('/videos',videosRoutes);
app.use('/projects',projectsRoutes);
app.use('/offers',offerRoutes);
app.use('/products',productRoutes);
app.use('/brands',brandRoutes);
app.use('/comments',commentRoutes);
app.use('/categories',categoryRoutes);
app.use('/rating',ratingRoutes);
app.use('/likes',likesRoutes);

// run the app ...
app.listen(port,()=>{console.log(`The serve is running on port:${port}`)});