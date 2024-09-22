export function getAssetPath(path) {
  const basePath = process.env.NODE_ENV === 'production' ? '/TLF-Nexus-Group' : '';
  return `${basePath}${path}`;
}