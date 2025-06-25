// args: testListFile, totalChunks, chunkIndex
const fs = require('fs');
const [file, totalChunks, chunkIndex] = process.argv.slice(2).map(String);

const allTests = fs.readFileSync(file, 'utf8').split('\n').filter(Boolean);
const chunked = Array.from({ length: Number(totalChunks) }, () => []);

allTests.forEach((test, i) => {
  chunked[i % chunked.length].push(test);
});

console.log(chunked[Number(chunkIndex)].join('\n'));