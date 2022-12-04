const parseArgs = () => {
    const parsedArgs = [];

    process.argv.slice(2).map((arg, index, args) => {
        if (arg.startsWith('--')) {
            const value = args[index + 1] || '';
            if (!value.startsWith('--')) {
                parsedArgs.push(`${arg.slice(2)} is ${value}`);
            }
        }
    });

    console.log(parsedArgs.join(', '));
};

parseArgs();