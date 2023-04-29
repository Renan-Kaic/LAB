console.clear()
const fs = require('fs').promises
const path = require('path')


//fs.readdir(path.resolve(__dirname))
//    .then( files => console.log(files) )
//    .catch ( e => console.log(e) )

async function readDir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)

    const file = await fs.readdir(rootDir)

    walk (file, rootDir)
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fullPath)

        if (/\.git/g.test(fullPath)) continue
        if (/node-modules/g.test(fullPath)) continue

        if (stats.isDirectory()) {
            readDir(fullPath)

            continue
        }

        if (!/\.js/g.test(fullPath)) continue
        console.log(fullPath)
    }
}

readDir('/workspaces/js/Aulas1')