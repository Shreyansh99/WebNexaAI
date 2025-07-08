import { notFound } from 'next/navigation';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import Breadcrumb from '@/src/components/ui/breadcrumb';

// Static imports for each MDX file
import AiAutomationForBusinessGrowth from '../ai-automation-for-business-growth.mdx';
import AiAutomationFaq from '../ai-automation-faq.mdx';
import WorkflowAutomationRealWorldUseCases from '../workflow-automation-real-world-use-cases.mdx';
import AiChatbotsTransformingLeadGeneration from '../ai-chatbots-transforming-lead-generation.mdx';
import AiMarketingAutomationGuide from '../ai-marketing-automation-guide.mdx';
import AiBusinessAutomationTasks2025 from '../ai-business-automation-tasks-2025.mdx';
import AiAutomationMistakes from '../ai-automation-mistakes.mdx';
import ChooseAiToolsBusiness from '../choose-ai-tools-business.mdx';
import AiVsHumanCustomerSupport from '../ai-vs-human-customer-support.mdx';
import FutureWorkflowAutomationAiTrends from '../future-workflow-automation-ai-trends.mdx';
import IntegratingAiWithMarketingStack from '../integrating-ai-with-marketing-stack.mdx';
import TenWaysAiAutomationSavesTime from '../10-ways-ai-automation-saves-time-small-businesses.mdx';
import AiChatbotLeadGenCaseStudy from '../ai-chatbot-lead-gen-case-study.mdx';
import AiAutomationForBusinessGrowthUltimateGuide from '../ai-automation-for-business-growth-ultimate-guide.mdx';

interface BlogMeta {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
}

interface BlogPost {
  meta: BlogMeta;
  Content: React.ComponentType<unknown>;
}

const blogPosts: Record<string, BlogPost> = {
  'ai-automation-for-business-growth': {
    meta: {
      title: "AI Automation for Business Growth: The Ultimate Guide",
      description: "A comprehensive guide to using AI automation for business growth in 2025. Learn strategies, tools, and real-world examples to scale faster.",
      date: "2025-07-06",
      author: "WebNexaAI",
      tags: ["AI Automation", "Business Growth", "Digital Transformation", "Marketing", "Productivity"]
    },
    Content: AiAutomationForBusinessGrowth,
  },
  'ai-automation-faq': {
    meta: {
      title: "AI Automation FAQ: Your Complete Guide",
      description: "Get answers to the most common questions about AI automation for business. From implementation to ROI, we cover everything you need to know.",
      date: "2025-07-05",
      author: "WebNexaAI",
      tags: ["AI Automation", "FAQ", "Business", "Technology"]
    },
    Content: AiAutomationFaq,
  },
  'workflow-automation-real-world-use-cases': {
    meta: {
      title: "Workflow Automation: Real-World Use Cases That Drive Results",
      description: "Discover practical workflow automation examples that businesses are using to save time, reduce errors, and scale operations in 2025.",
      date: "2025-07-04",
      author: "WebNexaAI",
      tags: ["Workflow Automation", "Business Process", "Productivity", "Case Studies"]
    },
    Content: WorkflowAutomationRealWorldUseCases,
  },
  'ai-chatbots-transforming-lead-generation': {
    meta: {
      title: "How AI Chatbots Are Transforming Lead Generation in 2025",
      description: "Discover how AI chatbots are revolutionizing lead generation with 24/7 availability, intelligent qualification, and seamless handoffs to sales teams.",
      date: "2025-07-03",
      author: "WebNexaAI",
      tags: ["AI Chatbots", "Lead Generation", "Sales", "Customer Experience"]
    },
    Content: AiChatbotsTransformingLeadGeneration,
  },
  'ai-marketing-automation-guide': {
    meta: {
      title: "AI Marketing Automation Guide: Scale Your Marketing in 2025",
      description: "Learn how to use AI marketing automation to create personalized campaigns, optimize performance, and scale your marketing efforts without increasing headcount.",
      date: "2025-07-02",
      author: "WebNexaAI",
      tags: ["Marketing Automation", "AI Marketing", "Personalization", "Campaign Optimization"]
    },
    Content: AiMarketingAutomationGuide,
  },
  'ai-business-automation-tasks-2025': {
    meta: {
      title: "AI Business Automation Tasks for 2025: What to Automate First",
      description: "Discover the top AI automation tasks that will give your business the biggest ROI in 2025. From customer service to data analysis.",
      date: "2025-07-01",
      author: "WebNexaAI",
      tags: ["AI Automation", "Business Tasks", "Productivity", "2025 Trends"]
    },
    Content: AiBusinessAutomationTasks2025,
  },
  'ai-automation-mistakes': {
    meta: {
      title: "Common AI Automation Mistakes and How to Avoid Them",
      description: "Learn about the most common AI automation mistakes businesses make and how to avoid them for successful implementation.",
      date: "2025-06-30",
      author: "WebNexaAI",
      tags: ["AI Automation", "Mistakes", "Best Practices", "Implementation"]
    },
    Content: AiAutomationMistakes,
  },
  'choose-ai-tools-business': {
    meta: {
      title: "How to Choose the Right AI Tools for Your Business",
      description: "A comprehensive guide to selecting AI tools that match your business needs, budget, and technical capabilities.",
      date: "2025-06-29",
      author: "WebNexaAI",
      tags: ["AI Tools", "Business Selection", "Technology", "Implementation"]
    },
    Content: ChooseAiToolsBusiness,
  },
  'ai-vs-human-customer-support': {
    meta: {
      title: "AI vs Human Customer Support: Finding the Right Balance",
      description: "Explore the pros and cons of AI vs human customer support and learn how to create the perfect hybrid approach.",
      date: "2025-06-28",
      author: "WebNexaAI",
      tags: ["AI Support", "Customer Service", "Human Touch", "Automation"]
    },
    Content: AiVsHumanCustomerSupport,
  },
  'future-workflow-automation-ai-trends': {
    meta: {
      title: "Future of Workflow Automation: AI Trends to Watch in 2025",
      description: "Discover the latest AI trends in workflow automation and how they'll shape business processes in 2025 and beyond.",
      date: "2025-06-27",
      author: "WebNexaAI",
      tags: ["Workflow Automation", "AI Trends", "Future", "2025"]
    },
    Content: FutureWorkflowAutomationAiTrends,
  },
  'integrating-ai-with-marketing-stack': {
    meta: {
      title: "Integrating AI with Your Marketing Stack: A Complete Guide",
      description: "Learn how to seamlessly integrate AI tools with your existing marketing stack for maximum efficiency and results.",
      date: "2025-06-26",
      author: "WebNexaAI",
      tags: ["AI Integration", "Marketing Stack", "Automation", "Tools"]
    },
    Content: IntegratingAiWithMarketingStack,
  },
  '10-ways-ai-automation-saves-time-small-businesses': {
    meta: {
      title: "10 Ways AI Automation Saves Time for Small Businesses",
      description: "Discover 10 practical ways AI automation can save time and boost productivity for small businesses in 2025.",
      date: "2025-06-25",
      author: "WebNexaAI",
      tags: ["AI Automation", "Small Business", "Time Saving", "Productivity"]
    },
    Content: TenWaysAiAutomationSavesTime,
  },
  'ai-chatbot-lead-gen-case-study': {
    meta: {
      title: "AI Chatbot Lead Generation Case Study: 300% Increase in Qualified Leads",
      description: "A real-world case study showing how an AI chatbot increased qualified leads by 300% for a B2B company.",
      date: "2025-06-24",
      author: "WebNexaAI",
      tags: ["AI Chatbot", "Lead Generation", "Case Study", "B2B"]
    },
    Content: AiChatbotLeadGenCaseStudy,
  },
  'ai-automation-for-business-growth-ultimate-guide': {
    meta: {
      title: "AI Automation for Business Growth: The Ultimate Guide",
      description: "The complete guide to using AI automation for business growth, covering strategies, tools, and implementation.",
      date: "2025-06-23",
      author: "WebNexaAI",
      tags: ["AI Automation", "Business Growth", "Guide", "Strategy"]
    },
    Content: AiAutomationForBusinessGrowthUltimateGuide,
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];

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