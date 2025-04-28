import path from "node:path";
import url from "node:url";
import fsPromises from "fs/promises";

const read = async () => {
  const DIRNAME = 'files';
  const FILENAME = 'fileToRead.txt';

  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, DIRNAME, FILENAME);

  try {
    const content = await fsPromises.readFile(filePath, { encoding: 'utf-8' });
    console.log(content);
  } catch (err) {
    throw new Error('FS operation failed.');
  }
};

await read();