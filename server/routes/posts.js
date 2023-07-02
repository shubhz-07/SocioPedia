import express from "express";
import { createPost, getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//read
router.post('/createPost',verifyToken,createPost);
router.get("/", verifyToken, getFeedPosts); //feed posts means we are showing each and every post from database
router.get("/:userId/posts", verifyToken, getUserPosts); //post of only specific user


//Update
router.patch("/:id/like", verifyToken, likePost);

export default router;
