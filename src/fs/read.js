import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const pathToFile = join(__dirname, 'files', 'fileToRead.txt');

    try {
        const fileContent = await readFile(pathToFile, { encoding: 'utf-8' });
        console.log(fileContent);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();