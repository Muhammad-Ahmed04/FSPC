import UserModel from '../model/User.model.js';
import UpCompModel from '../model/UpComp.model.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import pastpaperModel from '../model/Pastpaper.model.js';
let existUsername,
sessionUser;


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
    const existUsername = await UserModel.findOne({ username }).exec();

    if (!existUsername) {
      return res.status(400).send({ error: 'Incorrect username' });
    }

    // Compare the provided password with the hashed password stored in the database.
    const passwordMatch = await bcrypt.compare(password, existUsername.password);

    if (!passwordMatch) {
      return res.status(400).send({ error: 'Incorrect Password' });
    }

    // Fetch the role from the MongoDB value named "role"
    const role = existUsername.role;

    // Generate a JWT token
    const token = jwt.sign({ id: existUsername._id }, process.env.JWT_SECRET);

    // Omit the password from the response
    delete existUsername.password;

    const userInfo = {
      id: existUsername._id,
      username: existUsername.username,
      email: existUsername.email,
      role: existUsername.role,
      aboutme: existUsername.aboutme,
      profilepicture: existUsername.profilePicture
    }
    sessionUser = userInfo
    req.session.user = userInfo
    await req.session.save()

    console.log('Session user:', req.session.user); // Add this line


    // Send a response object containing token, username, and role
    res.status(200).json({ username: existUsername.username, role, access: token, userInfo });
  } catch (error) {
    // Handle the error properly, e.g., log it
    console.error(error);
    res.status(500).send({ error: 'Unable to login' });
  }
}
//  GET: http://localhost:8080/api/me

export async function userSessionInfo(req, res) {
  try {
    // console.log('helo')

    res.status(200).json({ sessionUser });

  } catch (error) {
    // Handle the error properly, e.g., log it
    console.error(error);
    res.status(500).send({ error: `Can't fetch user SessionInfo ` });
  }
}



//  POST: http://localhost:8080/api/logout

export async function logout(req, res) {
  try {
    req.session.destroy()
    res.send('logged Out successfully')

  } catch (error) {
    // Handle the error properly, e.g., log it
    console.error(error);
    res.status(500).send({ error: 'Unable to Logout' });
  }
}


/**GET: http://localhost:8080/api/user/example123 */
export async function getUser(req, res) {
  const { username } = req.params;
  console.log(username)

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

/** PUT: http://localhost:8080/api/update-profile
 * @body: {
  "id" : "<userid>"
  "aboutme" 
}
*/
export async function updateUser(req, res) {
  const { aboutMe, userId } = req.body;
  const user = await UserModel.findOne({ _id: userId })
  if (!user) {
    return res.status(404).json({ error: 'No user' });
  }
  if (!aboutMe) {
    return res.status(400).json({ error: 'About Me is required' });
  }

  // Update the user data (this might involve a database operation in a real-world scenario)
  user.aboutme = aboutMe;
  await user.save()
  sessionUser.aboutme = aboutMe
  console.log(`about is ${user.aboutme}`)
  // Respond with the updated user data
  res.status(200).json({ success: true, aboutMe: aboutMe });
};

export async function updateUserProfile(req, res) {
  const { userId, profilePicture } = req.body;
  console.log('inside user profile controller')
  try {
    // Update the user's profile picture in MongoDB
    await UserModel.findByIdAndUpdate(userId, { profilePicture });

    res.status(200).json({ message: 'Profile picture updated successfully' });
    sessionUser.profilepicture = profilePicture
  } catch (error) {
    console.error('Error updating profile picture:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



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
    const { title, date, location, link, kind } = req.body;

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
      location,
      kind
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
    const { name, link, kind, date } = req.body;

    //Check whether the user exists or not

    const paper = new pastpaperModel({
      name,
      link,
      kind,
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

