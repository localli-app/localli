import dotenv from 'dotenv';

import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    const addr = server && typeof server.address === 'function' ? server.address() : undefined;
    console.log('Server object type:', server && server.constructor && server.constructor.name);
    console.log('server.listening:', server && server.listening);
    console.log('Server address:', addr);
    // inspect internal handle if present
    console.log('server._handle:', server && server._handle ? server._handle.constructor && server._handle.constructor.name : server && server._handle);
  } catch (e) {
    console.log('Could not read server.address():', e && e.message);
  }
});

process.on('exit', (code) => {
  console.log('Process exit event with code:', code);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT');
  process.exit(130);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('beforeExit', (code) => {
  console.log('Process beforeExit with code:', code);
  try {
    const handles = process._getActiveHandles();
    const requests = process._getActiveRequests();
    console.log('Active handles count:', handles.length);
    console.log('Active requests count:', requests.length);
    // Print a brief summary of handle types
    handles.forEach((h, i) => {
      console.log(`handle[${i}] type:`, h.constructor && h.constructor.name);
    });
  } catch (e) {
    console.error('Could not inspect active handles:', e && e.message);
  }
});