
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

// With ID suffix (recommended hybrid approach)
export function generateProductSlug(name: string, id: number | string): string {
  const base = generateSlug(name)
  return `${base}-${id}`
}

// Extract ID back from slug
export function getIdFromSlug(slug: string): string {
  return slug.split('-').pop() ?? ''
}