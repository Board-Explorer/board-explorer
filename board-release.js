#!/usr/bin/node
"use strict";

const board = process.argv[2] ? process.argv[2].toLowerCase() : "",
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

function execPromise(cmdLine) {
  let args = cmdLine.split(" "),
    cmd = args.shift();
  return new Promise(function(resolve, reject) {
    child_process.execFile(cmd, args, function (error, stdout, stderr) {
      if (error) {
        return reject(error);
      }

      resolve();
    });
  });
}

function build(boardDir) {
  let dir = process.cwd();

  return new Promise(function(resolve, reject) {
    try {
      process.chdir("release/" + boardDir);
    } catch (error) {
      return reject(error);
    }
    return resolve();
  }).then(function() {
    console.log("Installing bower components...");
    return execPromise("bower install");
  }).then(function() {
    console.log("Building...");
    return execPromise("polymer build");
  }).catch(function(error) {
    /* On error, chdir back and return the error */
    try {
      process.chdir(dir);
    } catch (___) {
      return Promise.reject(error);
    }
  }).then(function() {
    /* On successs, chdir back and return success */
    try {
      process.chdir(dir);
    } catch (error) {
      return Promise.reject(error);
    }
  });
}


let boardDir = "board-explorer-" + board, releaseVersion = 0,
  files = fs.readdirSync(".");

/* Walk the releases/ directory looking for built versions */
let regex = new RegExp("^" + boardDir + "-([0-9])*\.tgz$");
files.forEach(function(path) {
  let matches = regex.exec(path);
  if (matches && matches[1] > releaseVersion) {
    releaseVersion = parseInt(matches[1]);
  }
});
releaseVersion++;

boardDir = boardDir + "-" + releaseVersion;

Promise.resolve().then(function() {
  return execPromise("git checkout-index -a -f --prefix=release/" + boardDir + "/");
}).then(function() {
  return build(boardDir);
}).then(function() {
  try {
    fs.writeFileSync("release/" + boardDir + "/build/default/boards.json", JSON.stringify(boards));
  } catch (error) {
    console.log(process.cwd());
    return Promise.reject(error);
  }
  return Promise.resolve();
}).then(function() {
  if (board != "all") {
    let content;
    try {
      content = fs.readFileSync("release/" + boardDir + "/build/default/index.html", "utf8");
      content = content.replace(
            /<board-explorer-app /g,
            "<board-explorer-app single-board-mode single-board='" + board + "' ");
      fs.writeFileSync("release/" + boardDir + "/build/default/single-board.html", content);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}).then(function() {
  try {
    fs.renameSync(
      "release/" + boardDir + "/build/default",
      "release/" + boardDir + "/build/board-explorer");
  } catch(error) {
    return Promise.reject(error);
  }
}).then(function() {
  return execPromise("tar czvf " + boardDir + ".tgz " +
      "-C release/" + boardDir + "/build board-explorer");
}).then(function() {
  return execPromise([
      "git tag",
      "-a v" + boardDir,
      "-m 'Tagged-v" + releaseVersion + "-for-" + board + "'"
    ].join(" "));
}).then(function() {
  console.log("Completed building:\n  " + boardDir + ".tgz");
}).catch(function(error) {
  console.error(error);
});
