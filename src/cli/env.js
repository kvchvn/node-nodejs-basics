import process from 'node:process';

const parseEnv = () => {
  const PREFIX = 'RSS_';

  const parsedEnv = Object.entries(process.env).reduce((acc, [key, value]) =>
    key.startsWith(PREFIX) ? `${acc}${acc ? '; ' : ''}${key}=${value}` : acc, '');

  console.log(parsedEnv);
};

parseEnv();