import cp from 'node:child_process';
import url from 'node:url';
import path from 'node:path';

const spawnChildProcess = async (args) => {
  const FILENAME = 'script.js';
  const DIRNAME = 'files';

  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, DIRNAME, FILENAME);

  const childProcess = cp.spawn('node', [filePath, ...args]);

  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2']);
