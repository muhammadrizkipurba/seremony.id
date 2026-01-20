// app/sitemap.ts (Example using a hypothetical fetch)
import { PackageMetadataResponse } from '@/types';
import { MetadataRoute } from 'next';

export async function generateSitemaps() {
  const response = await fetch('https://admin.seremony.id/api/sitemap').then((res) => res.json()); // Fetch all slugs
  const result = response.data.map((pkgMetadata: PackageMetadataResponse) => ({
    id: pkgMetadata._id,
    slug: pkgMetadata.metadata.slug, // For generateSitemaps
  }));

  console.log(result);
  return result
}

export default function sitemap({ slug }: { slug: string }): MetadataRoute.Sitemap {
  // For single sitemap, you might just fetch all data here
  // This example assumes generateSitemaps provides IDs
  return [
    // Static pages
    { url: 'https://seremony.id', lastModified: new Date() },
    { url: 'https://seremony.id/about', lastModified: new Date() },
    // Dynamic pages (using the ID from generateSitemaps)
    { url: `https://seremony.id/katalog/${slug}`, lastModified: new Date() },
  ];
};