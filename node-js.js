/*console.log(process.argv)
const fs = require("fs")
// fs.readFile("lyrics-1.txt", "utf8", (err, data) => {
    // if (err){ 
        // throw err}
// console.log(data)}) fs.writeFile("lyrics-3.txt", (err) => {}) 

fs.readFile("lyrics-1.txt", (eventType, filename) => {
    console.log(eventType + " in " + filename);
})
*******************************************************
 */
const fs = require("fs")
let lyrics =
    `"You Send Me"

Darling, you send me
I know you send me
Darling, you send me
Honest you do, honest you do
Honest you do, whoa

You thrill me
I know you, you, you thrill Me
Darling you, you, you, you thrill me
Honest you do

At first I thought it was infatuation
But wooh, it's lasted so long
Now I find myself wanting
To marry you and take you home, woah

You, you, you, you send me
I know you send me
I know you send me
Honest you do
`
fs.writeFile("lyrics-1.txt", lyrics, (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
})

fs.readFile("lyrics-1.txt", "uft-8", (err, data) => {

})


let lyrics2 =
    `Whoa, whenever I'm with you
I know, I know, I know when I'm near you
Mmm hmm, mmm hmm, honest you do, honest you do
Whoa, I know

I know, I know, I know, when you hold me
Whoa, whenever you kiss me
Mmm hmm, mmm hmm, honest you do

At first I thought it was infatuation
But wooh, it's lasted so long
Now I find myself wanting
To marry you and take you home

I know, I know, I know, you send me
I know you send me
Whoa, you you you you send me
Honest you do
`

writeFile("lyrics-2.txt", lyrics2, (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
})
let lyrics3 = " "
fs.readFile("lyrics-1.txt", "uft-8", (err, data) => {
    lyrics3 += data
})

fs.readFile("lyrics-2.txt", "uft-8", (err, data) => {
    lyrics3 += data
})

fs.writeFile("lyrics-3.txt", lyrics3, (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
})

//folder exercises
fs.mkdir('myFolder', () => {
    console.log('created folder')
    fs.rmdir('myFolder', (err, data) => {
        if (err) console.log('Error!', err);
        console.log('deleted folder')
    })
})

makeFolder = (num) => {
    for (var i = 1; i <= num; i++) {
        fs.mkdir(`folder-${[i]}`, (err, data) => {
            if (err) {
                throw (`ERROR: ${err}`)
            } else {
                console.log("new folder was made")
            }
        })
    }
}

renameFolders = (num) => {
    for (var i = 1; i <= num; i++) {
        fs.rename(`new-folder-${[i]}`, `newNEWW-folder-${[i]}`)
    }
}

deleteFolders = () => {
    for (var i = 0; i <= num; i++) {
      fs.rmdir(`new-repo-${i}`);
    }
  }

//List Files By Extension
const listOfFiles = (readDir, fileExtension) => {
    const path = require("path");
    const fs = require("fs");
    fs.readdir(readDir, (err,data) => {
      err? console.log(err) :data;