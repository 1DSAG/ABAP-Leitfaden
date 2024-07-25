const fs = require('fs');
const path = require('path');

// Define the directory containing the .md files
const directory = './';

// Read all files in the directory
fs.readdir(directory, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    // Iterate over all files
    files.forEach(file => {
        // Get the file path
        const filePath = path.join(directory, file);

        // Check if the file is a .md file
        if (path.extname(file) === '.md' && file.startsWith("Kapitel")) {
            // Read the file contents
            fs.readFile(filePath, 'utf8', (err, content) => {
                if (err) {
                    console.error(err);
                    return;
                }

                // Get the file name without the extension
                const fileName = path.basename(file, '.md');

                // Get the number from the file name
                const number = fileName.match(/\d+/);

                // Replace "FILENAME" and "NUMBER" in the template
                let template = '---\nlayout: page\ntitle: ' + fileName + '\npermalink: /kapitel' + number + '/\nnav_order: ' + number + '\n---\n\n';

                // Add the template before the file content
                content = template + content;

                // Write the modified content to the file
                fs.writeFile(filePath, content, 'utf8', err => {
                    if (err) {
                        console.error(err);
                    }
                });
            });
        }
    });
});
