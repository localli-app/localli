import http from 'http';
import app from '../src/app.js';

const PORT = 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('Express-backed server listening on', PORT);
  console.log('server.listening:', server.listening);
  console.log('server._handle:', server._handle ? server._handle.constructor.name : server._handle);
});

process.on('beforeExit', (code) => console.log('Test express beforeExit', code));
process.on('exit', (code) => console.log('Test express exit', code));
