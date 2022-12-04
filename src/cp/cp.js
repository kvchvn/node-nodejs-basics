import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { fork } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const childProcessPath = join(__dirname, 'files', 'script.js');
    const child = fork(childProcessPath, args);
};

spawnChildProcess(['hello', 'student']);