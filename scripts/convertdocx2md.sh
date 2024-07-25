# find all files with the ending ".docx" in the current directory and loop over them
for file in ./*.docx; do
    echo "Processing file: $file"
    # extract the filename from the path
    filename=$(basename "$file" .docx)
    echo "Filename: $filename"
    pandoc -f docx --extract-media "./$filename" -s "./$filename.docx" --wrap=none -t markdown-simple_tables-multiline_tables-grid_tables -o "$filename.md"
    # do something with the file, for example:
    # convert it to a PDF
    # libreoffice --convert-to pdf "$file"
done
