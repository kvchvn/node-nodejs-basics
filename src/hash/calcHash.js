import url from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import process from "node:process";
import { createHash } from 'node:crypto';

const calculateHash = async () => {
  const DIRNAME = 'files';
  const FILENAME = 'fileToCalculateHashFor.txt';

  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, DIRNAME, FILENAME);

  const rs = fs.createReadStream(filePath);
  const hash = createHash('sha256', { encoding: 'hex' });

  await pipeline(rs, hash, process.stdout).catch((err) => {
    console.log('Error occurred during streams reading/writing:\n', err);
  });
};

await calculateHash();