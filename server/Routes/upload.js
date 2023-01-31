import express from "express";
import { getPost,newPostRoute } from "../Controllers/upload.js";

const router = express.Router();

router.get('/', getPost);
router.post('/new', newPostRoute);

export default router;