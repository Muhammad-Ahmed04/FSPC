import express from "express";
import { getFeedPosts, getUserPosts, likePost, createPost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router(); // Use express.Router() here

/** Read */
router.get("/", verifyToken, getFeedPosts);
router.get("/:username/posts", verifyToken, getUserPosts);
router.post("/postcreate", createPost);

/** Update */
router.patch("/:id/like", verifyToken, likePost);

export default router;
