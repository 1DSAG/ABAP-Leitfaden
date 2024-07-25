$files = Get-ChildItem -Filter "*.docx"
 foreach ($file in $files) {
     $fileName = $file.BaseName
     pandoc -f docx --extract-media "./$fileName" -s "$fileName.docx" --wrap=none -t markdown -o "$fileName.md"
 }