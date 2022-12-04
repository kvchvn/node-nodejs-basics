import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createReadStream } from 'fs';
import { pipeline } from 'stream';
const { createHash } = await import('crypto');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const rs = createReadStream(filePath);
    const hash = createHash('sha256');

    pipeline(
        rs,
        hash.setEncoding('hex'),
        process.stdout,
        (err) => {
            if (err) {
                console.log(err);
            }
        }
    );
};

await calculateHash();