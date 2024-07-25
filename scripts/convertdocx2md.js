var os = require('os');
var path = require('path');
var spawn = require("child_process").spawn, child;

if (os.platform() === 'win32') {
  child = spawn("powershell.exe", [path.join(__dirname, "convertdocx2md.ps1")]);
} else if (os.platform() === 'darwin') {
  child = spawn("sh", [path.join(__dirname, "convertdocx2md.sh")]);
} else {
  console.log("Unsupported platform");
  process.exit(1);
}

child.stdout.on("data",function(data){
    console.log("Script Data: " + data);
});
child.stderr.on("data",function(data){
    console.log("Script Errors: " + data);
});
child.on("exit",function(){
    console.log("Script finished");
});
child.stdin.end(); //end input
