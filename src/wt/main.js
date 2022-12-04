import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const magicNumber = 10;
    const workerFile = join(__dirname, 'worker.js');

    const runWorkerThread = (filename, workerData) => {
      return new Promise((resolve, reject) => {
          const worker = new Worker(filename, { workerData });
          worker.on('message', resolve);
          worker.on('error', reject);
      });
    };

    const promises = cpus().map((_, index) => {
        return runWorkerThread(workerFile, magicNumber + index)
            .then((data) => ({ status: 'resolved', data }))
            .catch(() => ({ status: 'error', data: null }));
    });

    console.log(await Promise.all(promises));
};

await performCalculations();