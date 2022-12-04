import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { appendFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const content = 'I am fresh and young';
    const path = join(__dirname, 'files', 'fresh.txt');

    try {
        await appendFile(path, content, { flag: 'ax' });
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();