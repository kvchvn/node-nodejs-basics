import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fsPromises from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const wrongFilePath = join(__dirname, 'files', 'wrongFilename.txt');
    const properFilePath = join(__dirname, 'files', 'properFilename.md');

    try {
        await fsPromises.rename(wrongFilePath, properFilePath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();