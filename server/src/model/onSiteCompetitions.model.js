import mongoose from "mongoose";

export const onSiteCompSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide unique title"],
        unique: [true, "Title Exists"]
    },
    date: {
        type: Date,
        required: [true, "Please provide date"],
    },
    max_registerations: {
        type: Number,
        required: [true, "Please provide kind"],
    },
});

export default mongoose.model.onSiteCompSchema || mongoose.model('onSiteComp', onSiteCompSchema);