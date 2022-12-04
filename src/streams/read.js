import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createReadStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const file = join(__dirname, 'files', 'fileToRead.txt');
    const rs = createReadStream(file);

    rs.pipe(process.stdout);

    rs.on('end', () => {
        rs.unpipe(process.stdout);
    });
};

await read();