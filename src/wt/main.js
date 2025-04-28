import os from 'node:os';
import { Worker } from 'node:worker_threads';
import url from 'node:url';
import path from 'node:path';

const performCalculations = async () => {
  const WORKER_FILENAME = 'worker.js';
  const NUM = 10;

  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const workerPath = path.join(__dirname, WORKER_FILENAME);

  const runWorkerThread = (path, data) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(path, {
        workerData: data,
      });

      worker.on('message', resolve);
      worker.on('error', reject);
    })
  }

  const results = os.cpus().map((_, i) =>
    runWorkerThread(workerPath, NUM + i)
      .then((value) => ({ status: 'resolved', value }))
      .catch(() => ({ status: 'error', value: null }))
  );

  console.log(await Promise.all(results));
};

await performCalculations();