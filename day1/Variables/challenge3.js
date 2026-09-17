let prompt = require("prompt-sync")();
let GB = prompt("donner  une capacité Gigaoctets (GB):");
MB = GB * 1024  ;
console.log("capacité Gigaoctets (GB):" + GB + "GB");
console.log("capacité Mégaoctets (MB) :" + MB + "MB");
