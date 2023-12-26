import mongoose from "mongoose";

export const registerationsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide title"],
    },
    members: {
        type: [{
            type: String,
        }],
        validate: {
            validator: function (value) {
                // Validate that the array has a maximum length of 3
                return value.length <= 3;
            },
            message: "Members array must have at most 3 elements",
        },
    },
    phone_number: {
        type: String,
        required: [true, "Please provide the contact person's name"],
    },
    team_name: {
        type: String,
        required: [true, "Please provide the team name"],
    },
});

export default mongoose.model.registerationsSchema || mongoose.model('registerations', registerationsSchema);
