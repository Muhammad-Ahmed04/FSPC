import Post from "../model/Post.js"
import UserModel from "../model/User.model.js";

/** Create */
export const createPost = async (req, res) => {
    try{
        const { username, description, picturePath } = req.body;
        const user = await UserModel.findOne({username});
        const newPost = new Post({
            username,
            email: user.email,
            description,
            userPicturePath: " ",
            picturePath,
            likes: {},
            comments: []
        })
        await newPost.save();

        const post = await Post.find();

        res.status(201).json(post)
    } catch(err){
        res.status(409).json({ message: err.message})
    }
}

/** Read */
export const getFeedPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json(posts); // Corrected to send 'posts' instead of 'post'
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};



export const getUserPosts = async (req, res) => {
    try{
        const {username} = req.params;
        const post = await Post.find({username});
        res.status(200).json(post);
    } catch(err) {
        res.status(404).json({ message: err.message })
    }
}

/** Update */
export const likePost = async (req, res) => {
    try{
        const {id} = req.params;
        const {username} = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(username);

        if(isLiked){
            post.likes.delete(username)
        } else {
            post.likes.set(username, true)
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            {likes: post.likes},
            {new: true}
        );

        res.status(200).json(updatedPost);
    } catch(err) {
        res.status(404).json({ message: err.message })
    }
}