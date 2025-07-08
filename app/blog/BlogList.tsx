'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/src/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/src/components/ui/container';
import { Button } from '@/src/components/ui/button';

interface BlogListProps {
  allPosts: Array<any>;
  categories: string[];
}

export default function BlogList({ allPosts, categories }: BlogListProps) {
  // Extract all unique tags from all posts
  const allTags = Array.from(
    new Set(
      allPosts.flatMap(post => Array.isArray(post.tags) ? post.tags : []).filter(Boolean)
    )
  );
  const [filter, setFilter] = useState<string>('All Posts');
  // Filter posts by selected tag
  const filteredPosts =
    filter === 'All Posts'
      ? allPosts
      : allPosts.filter(post => Array.isArray(post.tags) && post.tags.includes(filter));

  return (
    <>
      {/* Tag Filter UI */}
      <Container className="relative z-10 mb-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <Button
            key="All Posts"
            variant={filter === 'All Posts' ? 'default' : 'outline'}
            size="sm"
            className="rounded-full px-4 py-2 text-xs sm:text-sm font-medium"
            onClick={() => setFilter('All Posts')}
          >
            All Posts
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={filter === tag ? 'default' : 'outline'}
              size="sm"
              className="rounded-full px-4 py-2 text-xs sm:text-sm font-medium"
              onClick={() => setFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </Container>

      {/* Blog Grid */}
      <Container className="relative z-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.slug} className="bg-blue-500/5 border border-blue-500/20 shadow-lg hover:bg-blue-500/10 transition-colors duration-300 flex flex-col h-full">
              <CardHeader className="pb-2 flex-row items-center gap-2 flex-wrap">
                {/* Show all tags as badges */}
                {Array.isArray(post.tags) && post.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary" className="mb-0 mr-2">{tag}</Badge>
                ))}
                <span className="text-xs text-gray-400">{post.date}</span>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  <CardTitle className="text-lg font-bold text-white mb-2 hover:text-blue-400 transition-colors">
                    {post.title}
                  </CardTitle>
                </Link>
                {post.description && <p className="text-gray-300 text-sm mb-4 flex-1">{post.description}</p>}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-400">By {post.author}</span>
                  <Link href={`/blog/${post.slug}`} className="text-blue-400 hover:text-blue-300 text-xs font-medium flex items-center gap-1">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <div className="text-center text-gray-400 py-12">No blog posts found for this tag.</div>
        )}
      </Container>
    </>
  );
} 