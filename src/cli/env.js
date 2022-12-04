const parseEnv = () => {
    const rssArgs = [];
    Object.entries(process.env).forEach(([key, value]) => {
       if (key.startsWith('RSS_')) {
           rssArgs.push(`${key}=${value}`);
       }
    });
    console.log(rssArgs.join('; '));
};

parseEnv();