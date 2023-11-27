import UserModel from '../model/User.model.js';
import UpCompModel from '../model/UpComp.model.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import pastpaperModel from '../model/Pastpaper.model.js';
let existUsername;


/** POST: http://localhost:8080/api/register
 * @param: {
  "username" : "example123", 
  "passowrd" : "admin123",
  "email" : example@gail.com,
  "firstname" : bill,
  "lastname" : william,
  "mobile" : 8009860560,
  "address" : "Apt. 556, KulasLight, Gwenborough",
  "profile" : ""
}
 */
export async function register(req, res) {
  try {
    const { username, password, confirmPass, profile, email, picturePath, friends } = req.body;

    // Check existing user
    const existUsername = await UserModel.findOne({ username }).exec();

    // Check existing email
    const existEmail = await UserModel.findOne({ email }).exec();

    if (existUsername) {
      return res.status(400).send({ error: "Please use a unique username" });
    }

    if (existEmail) {
      return res.status(400).send({ error: "Please use a unique Email" });
    }

    if (password !== confirmPass) {
      return res.status(500).send({ error: "Passwords do not match" });
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new UserModel({
        username,
        password: hashedPassword,
        profile: profile || '',
        email,
        role: "student",
        picturePath, 
        friends, 
      });

      // Save user to the database
      const savedUser = await user.save();

      res.status(201).send({ msg: "User Registered Successfully" })  //.json(savedUser);
    }
  } catch (error) {
    // Handle the error
    console.error(error);
    res.status(500).send({ error: "Unable to register user" });
  }
}



/** POST: http://localhost:8080/api/login
 * @param: {
  "username" : "example123", 
  "password" : "admin123"
}
 */
export async function login(req, res) {
  try {
    const { username, password } = req.body;

    // Check if a user with the given username exists in the database.
    existUsername = await UserModel.findOne({ username }).exec();

    if (!existUsername) {
      return res.status(400).send({ error: "Incorrect username" });
    }

    // Compare the provided password with the hashed password stored in the database.
    const passwordMatch = await bcrypt.compare(password, existUsername.password);

    if (!passwordMatch) {
      return res.status(400).send({ error: "Incorrect Password" });
    }
    const token = jwt.sign({id: existUsername._id}, process.env.JWT_SECRET)
    delete existUsername.password;

    // If both username and password are correct, send a success message.
    res.status(200).send({ message: "Login Successful", user: existUsername}) //.json({token, user})
  } catch (error) {
    // Handle the error properly, e.g., log it
    console.error(error);
    res.status(500).send({ error: "Unable to login" });
  }
}


/**GET: http://localhost:8080/api/user/example123 */
export async function getUser(req, res) {
  const { username } = req.params;

  try {
    //Check if any username entered
    if (!username) return res.status(400).send({ error: "No user entered" })

    //Check whether the user exists or not
    existUsername = await UserModel.findOne({ username }).exec()
    if (!existUsername) {
      res.status(404).send({ error: "No such user Exists" })
    }
    //Filter out Password
    const { password, ...rest } = Object.assign({}, existUsername.toJSON());

    //Send success response with user data
    res.status(200).send(rest);

  } catch (error) {
    // Handle the error 
    console.error(error);
    res.status(500).send({ error: "Unable to Find User" });
  }
}

/** PUT: http://localhost:8080/api/updateuser
 * @param: {
  "id" : "<userid>"
}
body: {
  "firstName" : '', 
  "address" : '',
  "profile" : ''
}
 */
export async function updateUser(req, res) {
  try {
    // Extract the user ID from the request query parameters
    const id = req.query.id;

    if (id) {
      // Extract the data to update from the request body
      const body = req.body;

      // Use async/await to update the data in the database
      const result = await UserModel.updateOne({ _id: id }, body);
      console.log(result);

      if (result.modifiedCount > 0) {
        // If at least one document was modified, send a success response
        return res.status(201).send({ msg: "Record Updated" });
      }
      if (result.modifiedCount === 0 && result.matchedCount > 0) {
        // If no record change but Id match
        return res.status(201).send({ msg: "No record changed, users matched" });
      }
      if (result.matchedCount === 0) {
        // If no documents were modified, send a response indicating that the user was not found
        return res.status(404).send({ error: "User Not Found" });
      }
    } else {
      // If the user ID is missing, send an unauthorized response
      return res.status(401).send({ error: "User ID is required" });
    }
  } catch (error) {
    // Handle any errors that may occur during the process
    console.error(error);
    res.status(500).send({ error: "Unable to Update User" });
  }
}






/**GET: http://localhost:8080/api/generateOTP */
export async function generateOTP(req, res) {
  res.json('generateOTP route');
}

/**GET: http://localhost:8080/api/verifyOTP */
export async function verifyOTP(req, res) {
  res.json('verifyOTP route');
}

// successfuly redirect user when OTP is valid
/**GET: http://localhost:8080/api/createResetSession */
export async function createResetSession(req, res) {
  res.json('createResetSession route');
}

//update the password when we have valid session
/** PUT: http://localhost:8080/api/resetPassword
 * @param: {
  "id" : "<userid>"
}
body: {
  "firstName" : '', 
  "address" : '',
  "profile" : ''
}
 */
export async function resetPassword(req, res) {
  res.json('resetPassword route');
}

//********* ADMIN  **********/

/** Upcoming competitions */
/** POST: http://localhost:8080/api/admin-uc */
export async function upcomingComp(req, res) {
  try {
    const { title, date, location, link } = req.body;

    // Check existing competition
    const existTitle = await UserModel.findOne({ title }).exec();

    // Check existing link
    const existLink = await UserModel.findOne({ link }).exec();

    if (existTitle) {
      return res.status(400).send({ error: "Competition Already Posted" });
    }

    if (existLink) {
      return res.status(400).send({ error: "Link Already Posted" });
    }


    const comp = new UpCompModel({
      title,
      link,
      date,
      location
    });

    // Save user to the database
    await comp.save();

    res.status(201).send({ msg: "Upcoming Competition Uploaded Successfully" });
  } catch (error) {
    // Handle the error
    console.error(error);
    res.status(500).send({ error: "Unable to Upload Competition" });
  }
}

/** GET: http://localhost:8080/api/competitions */
export async function getComp(req, res) {

  try {

    //Check whether the user exists or not
    const data = await UpCompModel.find().exec()
    if (!data) {
      res.status(404).send({ error: "No such Title Exists" })
    }
    //Send success response with user data
    res.status(200).send(data);

  } catch (error) {
    // Handle the error 
    console.error(error);
    res.status(500).send({ error: "Unable to Find Competition" });
  
}
}

/** GET: http://localhost:8080/api/pastpapers */
export async function getPastPapers(req, res) {

    try {

      //Check whether the user exists or not
      const data = await pastpaperModel.find().exec()
      if (!data) {
        res.status(404).send({ error: "data not found" })
      }
      //Send success response with user data
      res.status(200).send(data);

    } catch (error) {
      // Handle the error 
      console.error(error);
      res.status(500).send({ error: "Unable to Find Competition" });
    }
}

/** POST: http://localhost:8080/api/pastpapers */
export async function postPastPapers(req, res) {

  try {
    const { name, link, type, date } = req.body;

    //Check whether the user exists or not
   
    const paper = new pastpaperModel({
      name,
      link,
      type,
      date
    });

    // Save user to the database
    await paper.save();

    res.status(201).send({ msg: "Past Paper Uploaded Successfully" });
  } catch (error) {
    // Handle the error 
    console.error(error);
    res.status(500).send({ error: "Unable to upload Past Paper" });
  }
}

/** user - profile - traits */
// export const fetchUser = async (req,res) => {
//   try{
//     const {id} = req.params;
//     const user = await UserModel.findById(id);
//     res.status(200).json(user);
//   } catch(err){
//     res.status(404).json({message: err.message});
//   }
// }

// export const getUserFriends = async (req,res) => {
//   try{
//     const {id} = req.params;
//     const user = await UserModel.findById(id);

//     const friends = await Promise.all(
//     user.friends.map((id)=> UserModel.findById(id))
//     );
//     const formattedFriends = friends.map(
//       ({ _id, username, password, confirmPass, profile, email, picturePath, friends }) => {
//         return{ _id, username, password, confirmPass, profile, email, picturePath, friends};
//       }
//     );
//   } catch(err){
//     res.status(404).json({message: err.message});
//   }
// }

// export const addRemoveFriend = async (req,res) => {
//   try{
//     const {id, friendId} = req.params;
//     const user = await UserModel.findById(id);
//     const friend = await UserModel.findById(friendId);
//     if(user.friends.includes(friendId)) {
//       user.friends = user.friends.filter((id)=> id !== friendId);
//       friend.friends = friend.friends.filter((id)=> id!== id);
//     }
//     else{
//       user.friends.push(friendId);
//       friend.friends.push(id);
//     }

//     await user.save();
//     await friend.save();

//     const friends = await Promise.all(
//       user.friends.map((id)=> UserModel.findById(id))
//       );
//       const formattedFriends = friends.map(
//         ({ _id, username, password, confirmPass, profile, email, picturePath, friends }) => {
//           return{ _id, username, password, confirmPass, profile, email, picturePath, friends};
//         }
//       );

//       res.status(200).json(formattedFriends);

//   } catch (err){
//     res.status(404).json({message: err.message})
//   }
// }

