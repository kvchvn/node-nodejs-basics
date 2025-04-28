import { Transform } from 'node:stream';
import process from "node:process";

const transform = async () => {
  const transformer = new Transform({
    transform(chunk, _, callback) {
      const string = chunk.toString().trim();
      this.push(`${string.split('').reverse().join('')}\n\n`);
      callback();
    }
  });

  console.log('Press Ctrl+C to finish the process.\n');

  process.stdin
    .on('error', (err) => {
      console.log('Error occurred during the process:\n', err);
    })
    .pipe(transformer)
    .pipe(process.stdout);
};

await transform();