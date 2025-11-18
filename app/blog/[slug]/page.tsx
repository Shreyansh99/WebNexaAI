import { notFound } from 'next/navigation';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import Breadcrumb from '@/src/components/ui/breadcrumb';
import { getPostBySlug } from '../posts';

export default function BlogPostPage({ params }: { params: unknown }) {
  const { slug } = params as { slug: string };
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const { meta, Content } = post;

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={`https://webnexaai.com/blog/${slug}`}
        openGraph={{
          url: `https://webnexaai.com/blog/${slug}`,
          title: meta.title,
          description: meta.description,
          images: [
            {
              url: 'https://webnexaai.com/logo.png',
              width: 800,
              height: 600,
              alt: meta.title,
            },
          ],
          site_name: 'WebNexaAI',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Breadcrumb items={[
        { href: '/', label: 'Home' },
        { href: '/blog', label: 'Blog' },
        { href: `/blog/${slug}`, label: meta.title }
      ]} />
      <Script id="blogposting-schema" type="application/ld+json" strategy="afterInteractive">{`
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "${meta.title}",
          "description": "${meta.description}",
          "datePublished": "${meta.date}",
          "author": {
            "@type": "Person",
            "name": "${meta.author || 'WebNexaAI'}"
          },
          "image": ["https://webnexaai.com/logo.png"],
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://webnexaai.com/blog/${slug}"
          },
          "publisher": {
            "@type": "Organization",
            "name": "WebNexaAI",
            "logo": {
              "@type": "ImageObject",
              "url": "https://webnexaai.com/logo.png"
            }
          }
        }
      `}</Script>
      <main className="min-h-screen bg-black/90 text-white py-12 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{meta.title}</h1>
        <div className="mb-6 text-gray-400 text-sm flex flex-wrap gap-4 items-center">
          <span>{meta.date}</span>
          {meta.author && <span>By {meta.author}</span>}
          <span className="flex flex-wrap gap-2">{meta.tags?.map((tag: string) => (
            <span key={tag} className="bg-blue-700/30 px-2 py-1 rounded text-xs">{tag}</span>
          ))}</span>
        </div>
        <article className="prose prose-invert max-w-none">
          <Content />
        </article>
      </main>
    </>
  );
}