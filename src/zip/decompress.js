import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createUnzip } from 'zlib';
import { pipeline } from "stream";
import { createWriteStream, createReadStream } from 'fs';
import { rm } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const sourceArchive = join(__dirname, 'files', 'archive.gz');
    const rs = createReadStream(sourceArchive);
    const ws = createWriteStream(join(__dirname, 'files', 'fileToCompress.txt'));

    const unzip = createUnzip();

    pipeline(
        rs,
        unzip,
        ws,
        async (err) => {
            if (err) {
                throw err;
            }
            await rm(sourceArchive);
        }
    );
};

await decompress();