import process from 'node:process';

const parseArgs = () => {
  let args = '';

  const isKey = (keyOrValue) => keyOrValue.startsWith('--');

  for(let keyOrValue of process.argv.slice(2)) {
    if (isKey(keyOrValue)) {
      if (args) {
        args += ', ';
      }

      args += `${keyOrValue.slice(2)} is `;
    } else {
      args += keyOrValue;
    }
  }

  console.log(args);
};

parseArgs();