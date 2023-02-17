const processargv = process.argv;

for (const index of processargv) {
  if (!Number.isNaN(index) && index > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, index);
  }
}