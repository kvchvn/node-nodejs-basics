import path from "node:path";
import url from "node:url";
import fsPromises from "fs/promises";

const rename = async () => {
  const DIRNAME = 'files';
  const INITIAL_FILENAME = 'wrongFilename.txt';
  const NEW_FILENAME = 'properFilename.md';

  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const initialPath = path.join(__dirname, DIRNAME, INITIAL_FILENAME);
  const newPath = path.join(__dirname, DIRNAME, NEW_FILENAME);

  try {
    const directoryFiles = await fsPromises.readdir(path.join(__dirname, DIRNAME));

    if (directoryFiles.includes(NEW_FILENAME)) {
      throw new Error('File is already copied.');
    }

    await fsPromises.rename(initialPath, newPath);
    console.log('File was successfully renamed!');
  } catch (err) {
    throw new Error('FS operation failed.');
  }
};

await rename();