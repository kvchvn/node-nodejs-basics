import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createGzip } from 'zlib';
import { pipeline } from "stream";
import { createWriteStream, createReadStream } from 'fs';
import { rm } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const sourceFile = join(__dirname, 'files', 'fileToCompress.txt');
    const rs = createReadStream(sourceFile);
    const ws = createWriteStream(join(__dirname, 'files', 'archive.gz'));

    const gzip = createGzip();

    pipeline(
        rs,
        gzip,
        ws,
        async (err) => {
            if (err) {
                throw err;
            }
            await rm(sourceFile);
        }
    )
};

await compress();