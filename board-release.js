#!/usr/bin/node
const board = (process.argv[2] || "all").toLowerCase(),
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

console.log("Building for '" + board + "'");

try {
  fs.mkdirSync("build");
} catch (___) {
}

try {
  fs.mkdirSync("build/" + board);
} catch (___) {
}

function execPromise(cmdLine) {
  let args = cmdLine.split(" "),
    cmd = cmdLine.pop();
  return new Promise(function(resolve, reject) {
    child_process.execFile(cmd, args, function (error, stdout, stderr) {
      if (error) {
        return reject(error);
      }

      resolve();
    });
  });
}

function checkout(board) {
}

function build(board) {
  return new Promise(function(resolve, reject) {
    try {
      process.chdir("build/" + board);
    } catch (error) {
      return reject(error);
    }
    return resolve();
  }).then(function() {
    console.log("Installing bower components...");
    return execPromise("bower install");
  }).then(function() {
    console.log("Building...");
    return execPromise("polymer build")
  });
}

execPromise("git checkout-index -a -f --prefix=build/" + board).then(function() {
  return build(board);
}).then(function() {
  try {
    fs.writeFileSync("build/" + board + "/boards.json", JSON.stringify(boards));
  } catch (error) {
    return Promise.reject(error);
  }
  return Promise.resolve();
}).then(function() {
  let contents;
  try {
    content = fs.readFileSync("build/" + board + "/index.html");
  } =
  try {
    fs.writeFileSync("build/" + board + "/index.html",
      fs.JSON.stringify(boards));
  } catch (error) {
    return Promise.reject(error);
  }
  return Promise.resolve();
}).catch(function(error) {
  console.error(error);
});
/*
edit index.html and change singleBoard: "" to singleBoard: "foo"
rm -rf boards/ all except "foo"

sed -i 's#singleBoard:{type:String,value:""}#singleBoard:{type:String,value:"quark_mcu_dev_kit_d2000"}#' index.html

mv default board-explorer
 tar czvf ../board-explorer-qd2000-4.tgz --exclude=.git board-explorer/
*/
