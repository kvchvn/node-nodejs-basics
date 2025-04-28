import url from "node:url";
import path from "node:path";
import fs from 'node:fs';
import process from "node:process";

const read = async () => {
  const DIRNAME = 'files';
  const FILENAME = 'fileToRead.txt';

  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, DIRNAME, FILENAME);

  fs.createReadStream(filePath)
    .on('error', (err) => {
      console.log('Error occurred during the process:\n', err);
    })
    .pipe(process.stdout)
};

await read();