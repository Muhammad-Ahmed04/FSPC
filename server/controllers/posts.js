import Post from "../model/Post.js"
import UserModel from "../model/User.model.js";

export const createPost = async (req, res) => {
    try {
        const { description, profilepicture, userId, userName } = req.body;
        // console.log(`userName is ${userName}`)
        // Fetch the user using the user's ID
        const user = await UserModel.findById(userId);
        // console.log("Fetched User:", user); // Add this log

        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        const newPost = new Post({
            userId: userId,
            userName: userName,
            email: user.email,
            description,
            likes: {},
            comments: [],
            profilepicture: profilepicture
        });

        await newPost.save();

        const posts = await Post.find();

        console.log("New Post:", newPost); // Add this log

        res.status(201).json(posts);
    } catch (err) {
        console.error("Error Creating Post:", err); // Add this log
        res.status(409).json({ message: err.message });
    }
}




/** Read */
export const getFeedPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};


export const getUserPosts = async (req, res) => {
    try {
        const { username } = req.params;
        const post = await Post.find({ username });
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

/** Update */
export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { username } = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(username);

        if (isLiked) {
            post.likes.delete(username)
        } else {
            post.likes.set(username, true)
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true }
        );

        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}