import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from 'morgan';
import multer from "multer"
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import connect from './database/conn.js';
import router from './router/route.js';
import userRoutes from "./router/users.js";
import postRoutes from "./router/posts.js";
import { register } from './controllers/appController.js';
import { verifyToken } from './middleware/auth.js';
import { createPost } from './controllers/posts.js';
import session from 'express-session'
import cookieParser from 'cookie-parser';
// import { CreatPost } from '../client/src/components/CreatPost';

/** CONFIGURATIONS */
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

app.use(cookieParser());
 
app.use(session({
    secret: "superSecret",
    saveUninitialized: true,
    resave: true,
    sameSite: 'None'
}));
 
const corsOptions = {
  origin: 'http://localhost:3000', // Update with your frontend's origin
  credentials: true,
};
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors(corsOptions));
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

/** File Storage */
const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, "public/assets");
  },
  filename: function (req, file, cb){
    cb(null, file.originalname);
  }
});


/** middlewares */
app.use(express.json());
app.disable('x-powered-by');  //less hackers know about our stack

const port = 8080;

/** HTTP GET Request */
// app.get('/', (req, res) => {
//   res.status(201).json("Home GET Request");
// });
const upload = multer({storage});

/** Routes with files */
app.post("auth/register", upload.single("picture"), register);
app.post("/posts",verifyToken, upload.single("picture"), createPost);


/** API Routes */
app.use('/api', router)
app.use("/users", userRoutes)
app.use("/posts", postRoutes)

/** Start Server - After Db connection */
connect().then(() => {
  try {
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`);
    });
  } catch (error) {
    console.log('Cannot connect to the database');
  }
}).catch(error => {
  console.log("Invalid Database Connection");
});
