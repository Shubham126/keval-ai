const net = require('net');

function findAvailablePort(startPort = 3000, maxPort = 3010) {
  return new Promise((resolve, reject) => {
    const tryPort = (port) => {
      if (port > maxPort) {
        reject(new Error(`No available port found between ${startPort} and ${maxPort}`));
        return;
      }

      const server = net.createServer();
      
      server.listen(port, () => {
        const foundPort = server.address().port;
        server.close(() => {
          resolve(foundPort);
        });
      });
      
      server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          // Port is in use, try next port
          tryPort(port + 1);
        } else {
          reject(err);
        }
      });
    };

    tryPort(startPort);
  });
}

// Get start port from command line or default to 3000
const startPort = parseInt(process.argv[2]) || 3000;
const maxPort = parseInt(process.argv[3]) || 3010;

findAvailablePort(startPort, maxPort)
  .then(port => {
    console.log(port);
    process.exit(0);
  })
  .catch(err => {
    console.error(err.message);
    process.exit(1);
  });

