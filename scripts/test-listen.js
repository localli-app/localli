import http from 'http';

const PORT = 4000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok');
});

server.listen(PORT, () => {
  console.log('Test server listening on', PORT);
  console.log('server.listening:', server.listening);
  console.log('server._handle:', server._handle);
});

process.on('beforeExit', (code) => console.log('Test process beforeExit', code));
process.on('exit', (code) => console.log('Test process exit', code));

// keep the process alive for manual Ctrl+C
setInterval(() => {}, 1e6);
