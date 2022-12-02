import {pipeline, Transform} from 'stream';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            const transformedChunk = chunk.toString().trim();
            const reversedChunk = transformedChunk.split('').reverse().join('');
            this.push(`${reversedChunk}\n`);
            callback();
        }
    });

    pipeline(
        process.stdin,
        reverse,
        process.stdout,
        (err) => {
            if (err) {
                throw err;
            }
        }
    )
};

await transform();