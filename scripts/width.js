const fs = require('fs');
const path = require('path');

const directoryPath = '.';

fs.readdir(directoryPath, function(err, files) {
    if (err) {
        console.log('Error getting directory information.');
    } else {
        // Loop through all the files in the directory
        files.forEach(function(file) {
            // Only process .md files
            if (path.extname(file) === '.md') {
                const filePath = path.join(directoryPath, file);
                fs.readFile(filePath, 'utf8', function(err, data) {
                    if (err) {
                        console.log(`Error reading file: ${filePath}`);
                    } else {
                        // Replace curly brackets containing "width" and "height"
                        const newData = data.replace(/\{.*?width=.*?height=.*?\}/g, '');
                        // Write the updated data back to the file
                        fs.writeFile(filePath, newData, 'utf8', function(err) {
                            if (err) {
                                console.log(`Error writing file: ${filePath}`);
                            } else {
                                console.log(`Updated file: ${filePath}`);
                            }
                        });
                    }
                });
            }
        });
    }
});
