#!/usr/bin/node
const board = process.argv[2].toLowerCase(),
  child_process = require("child_process"),
  fs = require("fs");

let boards = JSON.parse(fs.readFileSync("boards.json")),
  boardIndex = boards.findIndex(function(item) {
    return item.board.toLowerCase() == board.toLowerCase();
  });

if (board != "all" && (!board || boardIndex == -1)) {
  console.log([
    "usage: ./board-release.js board-file|all",
    "",
    "Available board-files:\n"
  ].join("\n"));
  boards.forEach(function(board) {
    console.log("  " + board.board + "\n" +
      "    " + board.title + "\n");
  });
  process.exit(0);
}

if (boardIndex != -1) {
  boards = [ boards[boardIndex] ];
}

console.log(JSON.stringify(boards));
process.exit(0);
console.log(process.argv);
console.log("Building for '" + board + "'");

try {
  fs.mkdirSync("build");
} catch (___) {
}

try {
  fs.mkdirSync("build/" + board);
} catch (___) {
}

function checkout(board) {
  let args = [
    "-a", "-f", "--prefix=build/" + board + "/"
  ];
  child_process.execFile("git", args, function (error, stdout, stderr) {
    if (error) {
      console.log("Unable to checkout " + board + ": " + error);
      return;
    }
  });
}

checkout(board);

/*

process...

bower install
polymer build
cd build/default
for board "foo":

remove all entries in boards.json for all but foo
edit index.html and change singleBoard: "" to singleBoard: "foo"
rm -rf boards/ all except "foo"

sed -i 's#singleBoard:{type:String,value:""}#singleBoard:{type:String,value:"quark_mcu_dev_kit_d2000"}#' index.html

mv default board-explorer
 tar czvf ../board-explorer-qd2000-4.tgz --exclude=.git board-explorer/
*/
