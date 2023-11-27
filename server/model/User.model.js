import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true , "Please provide unique username"],
        unique: [true , "Username Exists"]
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: [true, "User already created on this email"]  
    },
    role: {
        type: String,
        required: [true, "Please provide role"],
        unique: false,  
    },
    picturePath: {
        type: String,
        default: "",  
    },
    friends: {
        type: Array,
        default: [],  
    },
    firstName: { type:String},
    lastName: { type:String},
    mobile: { type:Number},
    address: { type:String},
    location: String,
    viewedProfile: Number,
    impressions: Number,

},{timestamps: true}
);

export default mongoose.model.Users || mongoose.model('User', UserSchema);