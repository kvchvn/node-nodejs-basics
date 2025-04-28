import url from "node:url";
import path from "node:path";
import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import fsPromises from "node:fs/promises";

const decompress = async () => {
  const SRC_FILENAME = 'archive.gz';
  const DEST_FILENAME = 'fileToCompress.txt';
  const DIRNAME = 'files';

  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const srcPath = path.join(__dirname, DIRNAME, SRC_FILENAME);
  const destPath = path.join(__dirname, DIRNAME, DEST_FILENAME);

  const rs = createReadStream(srcPath);
  const ws = createWriteStream(destPath);
  const gzip = createGunzip();

  await pipeline(rs, gzip, ws).catch((err) => {
    console.log(`Error occurred during the operation:\n`, err);
  });

  await fsPromises.rm(srcPath);

  console.log('Archive was successfully decompressed!');
};

await decompress();