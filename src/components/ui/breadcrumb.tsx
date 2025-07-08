import Link from 'next/link';

export interface BreadcrumbItem {
  href: string;
  label: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center space-x-2 text-sm text-blue-300">
        {items.map((item, idx) => (
          <li key={item.href} className="flex items-center">
            {idx > 0 && <span className="mx-1">/</span>}
            {idx < items.length - 1 ? (
              <Link href={item.href} className="hover:underline hover:text-blue-400">{item.label}</Link>
            ) : (
              <span className="text-blue-400 font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
} 