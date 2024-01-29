process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
  if (process.stdin.isTTY) {
    process.exit(0);
  }

  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
});
