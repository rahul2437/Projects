const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  author: { type: String, required: true },
  title: String,
  createdAt: Date,
  content: String,
  tags: [String],
});


const BlogModel = mongoose.model("blog", BlogSchema);


async function main() {
  const conn = await mongoose.connect("mongodb://127.0.0.1:27017/storybook");
  console.log("Connected to MongoDB");

  const blog = new BlogModel({
    author: "Jack Doe",
    title: "Blog Title 3",
    createdAt: new Date(),
    content: "This is a blog post 3",
    tags: ["tag2", "tag3"]
  })

  await blog.save();

  conn.disconnect();
}

main();