import express from "express";
const router = express.Router();

import {BlogModel} from "../schema/blog.js";

/* GET users listing. */
router.get("/", async (req, res, next) => {
  // find blogs based on no condition==> get all blogs
  const blogs = await BlogModel.find({});
  // convert each blog to an object and send an array to client
  return res.send(blogs.map((blog) => blog.toObject()));
});

router.post("/create-post", async (req, res) => {
  // body should be JSON
  try {
    const body = req.body;
    const password = body.password;
    console.log(body);
    const passcode = "12345678";
    if (password != passcode) {
      return res.status(500).json({error: "yo"});
    } else {
      // create blog model with the request body
      const blog = new BlogModel({content: body.content, title: body.title});
      // remember to await .save();
      // save to mongodb
      await blog.save();
      // get an object representation and send it back to the client
      res.status(200).json({msg: "POST CREATED."});
      return res.send(blog.toObject());
    }
  } catch (err) {
    res.status(400).json({msg: "Same post nah"});
  }
});

export default router;
