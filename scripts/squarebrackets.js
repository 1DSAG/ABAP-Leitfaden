const fs = require("fs");
const path = require("path");

const directoryPath = "."; // current directory
const searchPattern = /\.md$/i; // search for files ending in ".md" (case-insensitive)

// read all files in the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  // filter out files that don't match the search pattern
  const markdownFiles = files.filter((filename) => searchPattern.test(filename));

  // process each markdown file
  markdownFiles.forEach((filename) => {
    const filepath = path.join(directoryPath, filename);

    // read the file contents
    fs.readFile(filepath, "utf8", (err, data) => {
      if (err) {
        console.error(`Error reading file ${filepath}: ${err}`);
        return;
      }

      // remove double square brackets from the file contents
      const newData = data.replace(/\[\[(.*?)\]\]/g, "[$1]");

      // write the modified contents back to the file
      fs.writeFile(filepath, newData, "utf8", (err) => {
        if (err) {
          console.error(`Error writing file ${filepath}: ${err}`);
          return;
        }

        console.log(`File ${filepath} processed successfully.`);
      });
    });
  });
});
