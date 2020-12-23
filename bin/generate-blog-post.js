/*
  First parameter is the slug
  Example: node generate-blog-post.js my-first-awesome-blog-post
*/
const fs = require("fs");
const path = require("path");

// Get paramas
const params = process.argv.slice(2);
// First param is the slug
const slug = params[0];
if (!slug) throw new Error("Please provide a slug as a first parameter");

const blogPostFolder = {
  fullPath: "public/blog-posts",
  folderName: "blog-posts",
};

const postDirectory = path.join(
  process.cwd(),
  blogPostFolder.fullPath,
  `${slug}`
);

const mdTemplate = `---
date: "2020-05-26"
title: ""
excerpt: ""
metaDescription: ""
seoTitle: ""
tags: "tag1,tag2,tag3"
slug: "${slug}"
coverImage: "cover.jpg"
---
`;

if (!fs.existsSync(postDirectory)) {
  fs.mkdirSync(postDirectory);
  fs.mkdirSync(path.join(postDirectory, "images"));
  fs.writeFile(postDirectory + "/index.md", mdTemplate, (err) => {
    if (err) throw err;
    console.log("Blog post folder created");
  });
} else {
  console.log("Blog post folder with that name already exists.");
}
