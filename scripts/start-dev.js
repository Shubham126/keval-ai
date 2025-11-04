const { spawn } = require('child_process');
const net = require('net');

function findAvailablePort(startPort = 3000, maxPort = 3010) {
  return new Promise((resolve, reject) => {
    const tryPort = (port) => {
      if (port > maxPort) {
        // If no port found in range, let Next.js handle it
        resolve(0);
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

async function startDev() {
  const mode = process.argv[2] || 'turbo'; // 'turbo' or 'webpack'
  const startPort = parseInt(process.argv[3]) || 3000;
  
  try {
    const port = await findAvailablePort(startPort, 3010);
    
    const args = ['next', 'dev'];
    if (mode === 'turbo') {
      args.push('--turbo');
    }
    
    if (port > 0) {
      args.push('-p', port.toString());
      console.log(`🚀 Starting Next.js development server on port ${port}...`);
    } else {
      console.log(`🚀 Starting Next.js development server (auto port)...`);
    }
    
    const child = spawn('npx', args, {
      stdio: 'inherit',
      shell: true,
    });
    
    child.on('error', (error) => {
      console.error('Failed to start server:', error);
      process.exit(1);
    });
    
    child.on('exit', (code) => {
      process.exit(code || 0);
    });
    
    // Handle process termination
    process.on('SIGINT', () => {
      child.kill('SIGINT');
    });
    
    process.on('SIGTERM', () => {
      child.kill('SIGTERM');
    });
  } catch (error) {
    console.error('Error finding port:', error);
    process.exit(1);
  }
}

startDev();

