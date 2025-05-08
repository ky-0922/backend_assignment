const fs = require('fs').promises;
const path = require('path');

async function findJsFiles(dir) {
    try {
        const entries = await fs.readdir(dir, {withFileTypes: true});
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                await findJsFiles(fullPath);
            } else if (path.extname(entry.name) === '.js') {
                console.log(fullPath);
            }
        }
    }
    catch (err) {
        console.error("Error");
    }
}

findJsFiles('./');