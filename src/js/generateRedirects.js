import fs from "fs";

const blogPath = "./src/content/blog/";

/******************************************************************************
 * Get the last blog post ID from the current _redirects file.
 */
const redirects_current_file = fs.readFileSync("./public/_redirects", {
  encoding: "utf8",
});

const redirects_lastBlogPostId = redirects_current_file
  .split("\n")
  .pop()
  .substring(1, 11);
/*
 */

/******************************************************************************
 * Get the last published blog post ID from the contents/blog folder.
 */
fs.readdir(blogPath, (err, files) => {
  if (err) {
    console.error("Error reading folder:", err);
    return;
  }

  const onlyBlogPosts = files.filter((fileName) => {
    return fileName.substring(0, 5) === "22.00";
  });

  const blogPostFileNamesWithoutMdxOrSlashes = onlyBlogPosts.map((fileName) => {
    return fileName.replace(".mdx", "");
  });

  const lastPublishedBlogPostId = blogPostFileNamesWithoutMdxOrSlashes[
    blogPostFileNamesWithoutMdxOrSlashes.length - 1
  ].substring(0, 10);

  // If the last published blog post ID isn't the last _redirect, add a line.
  if (lastPublishedBlogPostId !== redirects_lastBlogPostId) {
    console.log(
      "📬 generateRedirects.js: adding latest blog post to _redirects"
    );
    const lineToAddToRedirects =
      "\n" +
      "/" +
      lastPublishedBlogPostId +
      "/ /20-29-communication/22-blog/" +
      blogPostFileNamesWithoutMdxOrSlashes.pop() +
      "/";
    fs.appendFileSync("public/_redirects", lineToAddToRedirects);
  } else {
    console.log("📪 generateRedirects.js: nothing to do");
  }
});
/*
 */

// Read the last line of the current _redirects
// If the 22.00.BLOG slug at the start isn't the same as the last item in the redirects array
// Construct a line that looks like the _redirects line
// And append it to _redirects

// Create a newline-separated string of file names
// const fileNames = files.join("\n");

// Write the file names to the output file
// fs.writeFile(outputPath, fileNames, (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//     return;
//   }
//   console.log("Files extracted successfully!");
// });
