/**
 * Helper function to prepend the correct base path to internal links
 * This ensures links work correctly both in development and when deployed to GitHub Pages
 */
export function getPageUrl(path: string): string {
  // With a custom domain, we don't need to prepend a base path
  // Previously: const basePath = process.env.NODE_ENV === 'production' ? '/alphastatsinc' : '';
  const basePath = '';
  
  // Ensure the path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
} 