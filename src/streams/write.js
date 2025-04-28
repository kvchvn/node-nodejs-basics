import url from "node:url";
import path from 'node:path';
import { createWriteStream } from 'node:fs';

const write = async () => {
  const DIRNAME = 'files';
  const FILENAME = 'fileToWrite.txt';

  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, DIRNAME, FILENAME);

  const ws = createWriteStream(filePath);

  console.log('Press Ctrl+C to finish the process.\n');

  process.stdin
    .on('error', (err) => {
      console.log('Error occurred during the process:\n', err);
    })
    .pipe(ws);
};

await write();