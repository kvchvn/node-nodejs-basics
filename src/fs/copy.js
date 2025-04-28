import path from "node:path";
import url from "node:url";
import fsPromises from "fs/promises";

const copy = async () => {
  const SRC_DIRNAME = 'files';
  const DEST_DIRNAME = 'files_copy';

  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const srcPath = path.join(__dirname, SRC_DIRNAME);
  const destPath = path.join(__dirname, DEST_DIRNAME);

  try {
    await fsPromises.cp(srcPath, destPath, { force: false, errorOnExist: true, recursive: true });
    console.log('Directory was successfully copied!');
  } catch (err) {
    throw new Error('FS operation failed.');
  }
};

await copy();
