const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'out')));

// For any route that doesn't match a static file, serve the appropriate HTML file
app.get('*', (req, res) => {
  let url = req.url;
  
  // Remove query parameters
  if (url.includes('?')) {
    url = url.split('?')[0];
  }
  
  // Ensure URL has trailing slash to match Next.js export format
  if (!url.endsWith('/') && !path.extname(url)) {
    url = `${url}/`;
  }
  
  // Default to index.html for root path
  if (url === '/') {
    return res.sendFile(path.resolve(__dirname, 'out', 'index.html'));
  }
  
  // Try to serve the route-specific HTML file
  const htmlPath = path.join(__dirname, 'out', url, 'index.html');
  
  // If HTML file exists for route, serve it
  if (fs.existsSync(htmlPath)) {
    return res.sendFile(htmlPath);
  }
  
  // Otherwise, serve the 404 page or fallback to index.html
  const notFoundPath = path.join(__dirname, 'out', '404.html');
  if (fs.existsSync(notFoundPath)) {
    return res.status(404).sendFile(notFoundPath);
  }
  
  // Last resort: serve the index.html (SPA fallback)
  return res.sendFile(path.resolve(__dirname, 'out', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
});
