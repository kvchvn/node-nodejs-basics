import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createWriteStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const file = join(__dirname, 'files', 'fileToWrite.txt');
    const ws = createWriteStream(file);

    process.stdin.pipe(ws);

    process.stdin.on('end', () => {
        process.stdin.unpipe(ws);
    });
};

await write();