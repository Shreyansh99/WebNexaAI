import { NextResponse } from 'next/server';
import { getAllPosts } from '../../blog/posts';

export const revalidate = 60;

export async function GET() {
  const posts = getAllPosts().map(({ slug, meta }) => ({
    slug,
    title: meta.title,
    description: meta.description,
    date: meta.date,
    tags: meta.tags,
  }));
  return NextResponse.json({ posts });
}