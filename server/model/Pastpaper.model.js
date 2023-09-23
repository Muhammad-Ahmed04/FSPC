import mongoose from "mongoose";

export const pastPaper = new mongoose.Schema({
    name: {
        type: String,
        required: [true , "Please provide unique title"],
        unique: false
    },
    link: {
        type: String,
        required: [true, "Please provide link"],
        unique: true,
    },
    date: {
        type: Date,
        required: false,
        unique: false, 
    },
    type: {
        type: String,
        required: [true, "Please provide location"],
        unique: false,  
    },
    

});

export default mongoose.model.pastPaper || mongoose.model('pastPaper', pastPaper);