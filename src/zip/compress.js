import url from 'node:url';
import path from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import fsPromises from "node:fs/promises";
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';

const compress = async () => {
    const SRC_FILENAME = 'fileToCompress.txt';
    const DEST_FILENAME = 'archive.gz';
    const DIRNAME = 'files';

    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const srcPath = path.join(__dirname, DIRNAME, SRC_FILENAME);
    const destPath = path.join(__dirname, DIRNAME, DEST_FILENAME);

    const rs = createReadStream(srcPath);
    const ws = createWriteStream(destPath);
    const gzip = createGzip();

    await pipeline(rs, gzip, ws).catch((err) => {
      console.log(`Error occurred during the operation:\n`, err);
    });

    await fsPromises.rm(srcPath);

    console.log('File was successfully compressed!');
};

await compress();