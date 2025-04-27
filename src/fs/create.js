import url from "node:url";
import path from "node:path";
import fsPromises from 'fs/promises';

const create = async () => {
  const DIRNAME = 'files';
  const FILENAME = 'fresh.txt';
  const FILE_CONTENT = 'I am fresh and young';

  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, DIRNAME, FILENAME);

  try {
    await fsPromises.appendFile(filePath, FILE_CONTENT, { flag: 'wx' });
    console.log('File was successfully created!');
  } catch (err) {
    throw new Error('FS operation failed.')
  }
};

await create();
