import {Schema, model} from "mongoose";

// mongo already adds an _id so don't worry about ids
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export const BlogModel = model("Blog", blogSchema);
