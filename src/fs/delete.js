import path from "node:path";
import url from "node:url";
import fsPromises from "fs/promises";

const remove = async () => {
  const DIRNAME = 'files';
  const FILENAME = 'fileToRemove.txt';

  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, DIRNAME, FILENAME);

  try {
    await fsPromises.rm(filePath);
    console.log('File was successfully removed!');
  } catch (err) {
    throw new Error('FS operation failed.');
  }
};

await remove();