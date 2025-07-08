import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export function getBlogSlugs(): string[] {
  return fs.readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function getBlogBySlug(slug: string) {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { frontmatter: data, content };
}

export function getAllBlogs() {
  return getBlogSlugs()
    .map((slug) => {
      const { frontmatter } = getBlogBySlug(slug);
      return { ...frontmatter, slug };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
} 