import path from "node:path";
import url from "node:url";
import fsPromises from "fs/promises";

const list = async () => {
  const DIRNAME = 'files';

  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const dirPath = path.join(__dirname, DIRNAME);

  try {
    const files = await fsPromises.readdir(dirPath);
    console.log(files);
  } catch (err) {
    throw new Error('FS operation failed.');
  }
};

await list();